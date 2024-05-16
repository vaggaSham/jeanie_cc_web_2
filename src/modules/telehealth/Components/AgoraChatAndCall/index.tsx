import React, { createContext, useContext, useState, useEffect } from "react";
import {
  useJoin,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
  useRTCClient,
  useRemoteUsers,
  useClientEvent,
  useRemoteAudioTracks,
  useIsConnected,
  useRemoteUserTrack,
} from "agora-rtc-react";
import AgoraRTC from "agora-rtc-sdk-ng";

import { useSelector, useDispatch } from "react-redux";
import {
  setExpanded,
  setIsEnded,
  setIsStarted,
  setFloating,
} from "../../telehealth.reducer";
import config from "../../config";
const TeleHealthContext = createContext<any>(null);

const TeleHealthProvider = ({ client, children }: any) => {
  const dispatch = useDispatch();
  const engine = useRTCClient(client);
  const { isFloating, isStarted } = useSelector(
    (state: any) => state.telehealth
  );
  const isConnected = useIsConnected();
  // const { isLoading: isLoadingCam, localCameraTrack } = useLocalCameraTrack();
  // const { isLoading: isLoadingMic, localMicrophoneTrack } =
  //   useLocalMicrophoneTrack();
  // const remoteUsers = useRemoteUsers();
  // const { audioTracks } = useRemoteAudioTracks(remoteUsers);
  const [role, setRole] = useState("host"); // Default role is host
  const [activeConnection, setActiveConnection] = useState(true);

  // track the mic/video state - Turn on Mic and Camera On
  const [micOn, setMic] = useState(true);
  const [cameraOn, setCamera] = useState(true);
  const [isChatShow, setIsChatShow] = useState(false);
  const [joined, setJoined] = useState(false);
  const [agoraClient, setAgoraClient] = useState<any>(null);
  const [agoraEngine, setAgoraEngine] = useState<any>(null);
  const [localCameraTrack, setLocalCameraTrack] = useState<any>(null);
  const [localMicrophoneTrack, setLocalMicrophoneTrack] = useState<any>(null);
  const [remoteUsers, setRemoteUsers] = useState<any>([]);

  // play the remote user audio tracks
  // audioTracks.forEach((track) => track.play());

  // Publish local tracks
  // usePublish([localCameraTrack, localMicrophoneTrack]);

  const createAndpublishTrack = async () => {
    // if (isConnected) {
    const localVideoTrack = await AgoraRTC.createCameraVideoTrack();
    const localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();

    if (agoraEngine && isConnected) {
      setLocalMicrophoneTrack(localAudioTrack);
      setLocalCameraTrack(localVideoTrack);
      agoraEngine.publish([localVideoTrack, localAudioTrack]);
    }
    // }
  };

  // Join the Agora channel with the specified configuration
  useJoin(
    {
      appid: config.appId,
      channel: config.channelName,
      token: config.rtcToken,
      uid: config.uid,
    },
    activeConnection
  );

  useClientEvent(agoraEngine, "user-joined", (user) => {
    console.log("The user", user.uid, " has joined the channel");
  });

  useClientEvent(agoraEngine, "user-left", (user) => {
    console.log("The user", user.uid, " has left the channel");
    if (user?.audioTrack) user?.audioTrack?.stop();
    setRemoteUsers([]);
  });

  const handleClientEventHandler = () => {
    agoraEngine.on("user-published", async (user: any, mediaType: any) => {
      await agoraEngine.subscribe(user, mediaType);
      console.log("The user", user.uid, " has published media in the channel");
      if (remoteUsers.length === 0) {
        const users = agoraEngine ? agoraEngine?.remoteUsers : [];
        const oponent = users.length > 0 ? users[0] : null;
        if (oponent?.audioTrack) oponent.audioTrack.play();
        setRemoteUsers([oponent]);
      }
    });
  };

  const handleMute = (muted: any) => {
    // Mute remote user with uid
    // remoteUsers.forEach((user: any) => {
    //   if (user.uid === uid) {
    //     user.audioTrack && user.audioTrack.setEnabled(false);
    //   }
    // });
    if (localMicrophoneTrack) localMicrophoneTrack?.setMuted(muted);
  };

  const handleUnmute = (uid: any) => {
    // Unmute remote user with uid
    remoteUsers.forEach((user: any) => {
      if (user.uid === uid) {
        user.audioTrack && user.audioTrack.setEnabled(true);
      }
    });
  };

  useEffect(() => {
    if (isStarted) {
      setAgoraClient(client);
      setAgoraEngine(engine);
      createAndpublishTrack();
    }
    // return () => {
    //   localCameraTrack?.close();
    //   localMicrophoneTrack?.close();
    // };
  }, [isStarted]);

  useEffect(() => {
    if (
      localCameraTrack === null &&
      localMicrophoneTrack === null &&
      isConnected
    ) {
      if (agoraEngine) handleClientEventHandler();
      createAndpublishTrack();
    }
  }, [isConnected]);

  const handleLeave = () => {
    setActiveConnection(false);
    setLocalCameraTrack((track: any) => {
      track?.close();
      return null;
    });
    setLocalMicrophoneTrack((track: any) => {
      track?.close();
      return null;
    });
    setJoined(false);
    dispatch(setIsEnded());
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
    if (event.target.value === "host") {
      agoraEngine
        .setClientRole("host")
        .then(() => {
          // Your code to handle the resolution of the promise
          console.log("Client role set to host successfully");
        })
        .catch((error: any) => {
          // Your code to handle any errors
          console.error("Error setting client role:", error);
        });
    } else {
      agoraEngine
        .setClientRole("audience")
        .then(() => {
          // Your code to handle the resolution of the promise
          console.log("Client role set to host successfully");
        })
        .catch((error: any) => {
          // Your code to handle any errors
          console.error("Error setting client role:", error);
        });
    }
  };

  return (
    <TeleHealthContext.Provider
      value={{
        handleLeave,
        handleMute,
        handleUnmute,
        setMic,
        setCamera,
        setIsChatShow,
        setAgoraClient,
        setAgoraEngine,
        agoraClient,
        remoteUsers,
        localMicrophoneTrack,
        localCameraTrack,
        isConnected,
        agoraEngine,
        role,
        micOn,
        cameraOn,
        isChatShow,
        joined,
      }}
    >
      {children}
    </TeleHealthContext.Provider>
  );
};

// Export the custom hook
export default TeleHealthProvider;

export const useTeleHealth = () => {
  const context = useContext(TeleHealthContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
