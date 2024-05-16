// Import necessary components and hooks from Agora SDK and React
import {
  LocalVideoTrack,
  RemoteUser,
  useJoin,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
  useRTCClient,
  useRemoteUsers,
  useClientEvent,
  LocalUser,
  useRemoteAudioTracks,
  useIsConnected,
  useRemoteUserTrack,
} from "agora-rtc-react";

import React, { createContext, useContext, useState, useEffect } from "react";
import { IMicrophoneAudioTrack, ICameraVideoTrack } from "agora-rtc-sdk-ng";
import { configType } from "./config";

// Define the shape of the Agora context
interface AgoraContextType {
  localCameraTrack: ICameraVideoTrack | null;
  localMicrophoneTrack: IMicrophoneAudioTrack | null;
  children: React.ReactNode;
}

// Create the Agora context
const AgoraContext = createContext<AgoraContextType | null>(null);

// AgoraProvider component to provide the Agora context to its children
export const AgoraProvider: React.FC<any> = ({
  children,
  localCameraTrack,
  localMicrophoneTrack,
}) => (
  <AgoraContext.Provider
    value={{ localCameraTrack, localMicrophoneTrack, children }}
  >
    {children}
  </AgoraContext.Provider>
);

// Custom hook to access the Agora context
export const useAgoraContext = () => {
  const context = useContext(AgoraContext);
  if (!context)
    throw new Error("useAgoraContext must be used within an AgoraProvider");
  return context;
};

// AgoraManager component responsible for handling Agora-related logic and rendering UI
export const AgoraManager = ({
  config,
  setJoined,
  children,
}: {
  config: configType;
  setJoined: Function;
  children?: React.ReactNode;
}) => {
  // Retrieve local camera and microphone tracks and remote users
  const agoraEngine = useRTCClient();
  const isConnected = useIsConnected();
  const { isLoading: isLoadingCam, localCameraTrack } = useLocalCameraTrack();
  const { isLoading: isLoadingMic, localMicrophoneTrack } =
    useLocalMicrophoneTrack();
  const remoteUsers = useRemoteUsers();
  const { audioTracks } = useRemoteAudioTracks(remoteUsers);

  // play the remote user audio tracks
  audioTracks.forEach((track) => track.play());

  const [role, setRole] = useState("host"); // Default role is host
  const [activeConnection, setActiveConnection] = useState(true);

  // track the mic/video state - Turn on Mic and Camera On
  const [micOn, setMic] = useState(true);
  const [cameraOn, setCamera] = useState(true);

  // Publish local tracks
  usePublish([localMicrophoneTrack, localCameraTrack]);

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
  });

  useClientEvent(agoraEngine, "user-published", (user, mediaType) => {
    console.log("The user", user.uid, " has published media in the channel");
  });

  useClientEvent(agoraEngine, "user-published", (user, mediaType) => {
    console.log("The user", user.uid, " has published media in the channel");
  });

  const handleMute = (uid: any) => {
    // Mute remote user with uid
    remoteUsers.forEach((user: any) => {
      if (user.uid === uid) {
        user.audioTrack && user.audioTrack.setEnabled(false);
      }
    });
  };

  const handleUnmute = (uid: any) => {
    // Unmute remote user with uid
    remoteUsers.forEach((user: any) => {
      if (user.uid === uid) {
        user.audioTrack && user.audioTrack.setEnabled(true);
      }
    });
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
        .catch((error) => {
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
        .catch((error) => {
          // Your code to handle any errors
          console.error("Error setting client role:", error);
        });
    }
  };

  useEffect(() => {
    return () => {
      localCameraTrack?.close();
      localMicrophoneTrack?.close();
    };
  }, []);

  const handleLeave = () => {
    setActiveConnection(false);
    localCameraTrack?.close();
    localMicrophoneTrack?.close();
    setJoined(false);
  };

  const audioTrack = useRemoteUserTrack(remoteUsers[0], "audio");
  console.log("audioTrack", audioTrack);

  // Check if devices are still loading
  const deviceLoading = isLoadingMic && isLoadingCam;

  // Render the AgoraProvider and associated UI components
  return (
    // <>
    //   {console.log("deviceLoading", deviceLoading)}
    //   {deviceLoading && isConnected ? (
    //     <div>Loading devices...</div>
    //   ) : (
    //     <AgoraProvider
    //       localCameraTrack={localCameraTrack}
    //       localMicrophoneTrack={localMicrophoneTrack}
    //     >
    //       {children}
    //       <div id="remoteVideoGrid">
    //         {
    //           // Initialize each remote stream using RemoteUser component
    //           remoteUsers.map((user) => (
    //             <div key={user.uid} className="remote-video-container">
    //               <RemoteUser user={user} />
    //             </div>
    //           ))
    //         }
    //       </div>
    //       <div id="localVideo">
    //         <LocalUser
    //           audioTrack={localMicrophoneTrack}
    //           videoTrack={localCameraTrack}
    //           cameraOn={cameraOn}
    //           micOn={micOn}
    //           playAudio={micOn}
    //           playVideo={cameraOn}
    //           className=""
    //         />
    //         <div>
    //           {/* media-controls toolbar component - UI controling mic, camera, & connection state  */}
    //           <div id="controlsToolbar">
    //             <div id="mediaControls">
    //               <button className="btn" onClick={() => setMic((a) => !a)}>
    //                 Mic
    //               </button>
    //               <button className="btn" onClick={() => setCamera((a) => !a)}>
    //                 Camera
    //               </button>
    //             </div>
    //             <button
    //               id="endConnection"
    //               onClick={() => {
    //                 handleLeave();
    //               }}
    //             >
    //               {" "}
    //               Disconnect
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </AgoraProvider>
    //   )}
    // </>
    <>
      <div className="flex justify-between space-x-2 h-full">
        <div className="w-[80%] h-full p-2">
          <div className="pinned-user">
            <LocalUser
              className="video-rounded"
              audioTrack={localMicrophoneTrack}
              cameraOn={cameraOn}
              micOn={micOn}
              videoTrack={localCameraTrack}
              cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
            >
              <samp className="user-name">You</samp>
            </LocalUser>
          </div>
        </div>
        <div className="w-[20%] h-full overflow-auto p-2">
          <div className="flex flex-col space-y-2 -h-[98%]">
            {remoteUsers.map((user) => (
              <div className="user" key={user.uid}>
                <RemoteUser
                  className="video-rounded"
                  cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
                  user={user}
                >
                  <samp className="user-name">{user.uid}</samp>
                </RemoteUser>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isConnected && (
        <div className="flex justify-center">
          <div className="control">
            <button className="btn" onClick={() => setMic((a) => !a)}>
              <i className={`i-microphone ${!micOn ? "off" : ""}`} />
            </button>
            <button className="btn" onClick={() => setCamera((a) => !a)}>
              <i className={`i-camera ${!cameraOn ? "off" : ""}`} />
            </button>
            <button
              className={`btn btn-phone btn-phone-active cursor-pointer`}
              onClick={() => handleLeave()}
            >
              <i className="i-phone-hangup" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// Export the AgoraManager component as the default export
export default AgoraManager;
