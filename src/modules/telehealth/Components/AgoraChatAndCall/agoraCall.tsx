import { RemoteUser, LocalUser } from "agora-rtc-react";
import menuIcon from "../../../../assets/images/hamburger.svg";
import message from "../../../../assets/images/message1.svg";
import callCut from "../../../../assets/images/callCut.svg";
import record from "../../../../assets/images/record.svg";
import mike from "../../../../assets/images/mike.svg";
import { useSelector } from "react-redux";
import React, { createContext, useContext, useEffect, useState } from "react";
import { IMicrophoneAudioTrack, ICameraVideoTrack } from "agora-rtc-sdk-ng";
import { createRoot } from "react-dom/client";
import AiInsights from "./AiInsightsAlert";
import { setDetailsShow } from "../../telehealth.reducer";
import { useDispatch } from "react-redux";
import minize from "../../../../assets/images/minize.svg";
import chatSend from "../../../../assets/images/chatSend.svg";
import { useTeleHealth } from ".";
import QuickNotes from "../../quickNotes";

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

// AgoraCall component responsible for handling Agora-related logic and rendering UI
const AgoraCall = () => {
  const dispatch = useDispatch();
  const { isFloating } = useSelector((state: any) => state.telehealth);
  const [isCallAiInsights, setIsCallAiInsights] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Retrieve local camera and microphone tracks and remote users
  const {
    agoraEngine,
    agoraClient,
    isConnected,
    localCameraTrack,
    localMicrophoneTrack,
    remoteUsers,
    activeConnection,
    micOn,
    cameraOn,
    isChatShow,
    setMic,
    setCamera,
    setIsChatShow,
    role,
    setRole,
    handleMute,
    handleLeave,
    handleUnmute,
  } = useTeleHealth();

  useEffect(() => {
    setTimeout(() => {
      setIsCallAiInsights(false);
    }, 5000);
  }, []);

  const ExpandedCall = () => {
    return (
      <div className="relative bg-gray-800 p-2 h-full w-full">
        {isCallAiInsights && !isFloating && <AiInsights />}
        {!isFloating && (
          <p className="text-[14px] text-[white] absolute left-[15px] top-[15px] font-Mulish z-[99]">
            12:20
          </p>
        )}
        <div className={isFloating ? "pop-out-user" : "pinned-user"}>
          <RemoteUser
            className="video-rounded"
            cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
            user={remoteUsers.length > 0 ? remoteUsers[0] : null}
          >
            {/* <samp className="user-name">{user.uid}</samp> */}
          </RemoteUser>
        </div>
        {!isFloating && (
          <>
            <img
              src={menuIcon}
              className="cursor-pointer absolute right-[25px] top-[23px] z-[99]"
              alt="menu"
              onClick={() => setIsMenuOpen((a) => !a)}
            />
            {isMenuOpen && (
              <div
                role="button"
                onClick={() => {
                  dispatch(setDetailsShow('isAiInsightShow'));
                  setIsMenuOpen((a) => !a);
                }}
                className="bg-white divide-y divide-gray-100 rounded-lg shadow w-40 absolute right-[25px] top-[40px] z-[99] cursor-pointer"
              >
                <ul className="py-2 ">
                  <li>
                    <div className="px-4 text-[#000000] text-sm font-semibold font-Mulish">
                      AI Video Analysis
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </>
        )}
        {!isFloating && (
          <div
            className={`local-user max-w-[130px] w-full absolute left-[15px] bottom-4 z-[99] `}
          >
            <LocalUser
              className="video-rounded"
              audioTrack={localMicrophoneTrack}
              cameraOn={cameraOn}
              micOn={micOn}
              videoTrack={localCameraTrack}
              cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
            >
              {/* <samp className="user-name">You</samp> */}
            </LocalUser>
          </div>
        )}
        {isChatShow && (
          <div className="bg-card-bg  rounded-[20px] z-[99] p-[18px] mt-[15px]  min-h-[224px] absolute w-[270px] right-3.5 bottom-[65px]">
            <div className="flex justify-between mb-2.5">
              <p className="text-lg  font-semibold font-Mulish">Send Message</p>
              <img src={minize} alt="icon" />
            </div>
            <div className="absolute bottom-[5px] inset-x-2.5">
              <form>
                <label
                  htmlFor="search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="search"
                    className="focus:outline-none block w-full font-Mulish pl-5 pr-[50px] py-0 text-sm h-[43px] leading-[43px] rounded-[28px] border-[none]"
                    placeholder="Type here"
                    required
                  />
                  <img
                    src={chatSend}
                    alt=""
                    className="absolute right-5 top-3"
                  />
                </div>
              </form>
            </div>
          </div>
        )}

        {/* {
          isChatShow && (
            <div
              className="absolute w-[500px] h-[500px] shadow-2xl rounded-xl border-[1px] border-dark-black left-[100%] bottom-10 z-[100]">
              <QuickNotes />
            </div>
          )
        } */}
   
        <div
          className={`absolute z-[99] ${isFloating ? "left-[20%] bottom-4" : "right-[15px] bottom-4"
            }  flex gap-2.5 bg-[#a0969a] px-2 py-[5px] rounded-[52px]`}
        >
          <div
            role="button"
            onClick={() => handleMute(!localMicrophoneTrack?.muted)}
          >
            <img
              src={mike}
              className="w-[35px] rounded-[50%] bg-[#c2bfc2]"
              alt="mike"
            />
          </div>
          <div role="button" onClick={() => setCamera((a: any) => !a)}>
            <img
              src={record}
              className="w-[35px] rounded-[50%] bg-[#c2bfc2]"
              alt="camera"
            />
          </div>
          <div
            role="button"
            onClick={() => {
              handleLeave();
            }}
          >
            <img
              src={callCut}
              className="w-[35px] rounded-[50%] bg-[#ff574c]"
              alt="callcut"
            />
          </div>
          <div role="button" onClick={() => setIsChatShow((a: any) => !a)}>
            <img
              src={message}
              className="w-[35px] rounded-[50%] bg-[#c2bfc2]"
              alt="chat"
            />
          </div>
        </div>
      </div>
      // </AgoraRTCProvider>
    );
  };

  const PopOutCall = () => {
    return (
      <div className="bg-gray-800 p-2 h-full w-full">
        <div className="relative h-full w-full">
          <div className="pop-out-user">
            <RemoteUser
              className="video-rounded"
              cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
              user={remoteUsers[0]}
            >
              {/* <samp className="user-name">{user.uid}</samp> */}
            </RemoteUser>
          </div>
          <div className="absolute z-[99] left-[20%] bottom-1 flex gap-2.5 bg-[#a0969a] px-2 py-[5px] rounded-[52px]">
            <div role="button" onClick={() => setMic((a: any) => !a)}>
              <img
                src={mike}
                className="w-[35px] rounded-[50%] bg-[#c2bfc2]"
                alt="mike"
              />
            </div>
            <div role="button" onClick={() => setCamera((a: any) => !a)}>
              <img
                src={record}
                className="w-[35px] rounded-[50%] bg-[#c2bfc2]"
                alt="camera"
              />
            </div>
            <div
              role="button"
              onClick={() => {
                handleLeave();
              }}
            >
              <img
                src={callCut}
                className="w-[35px] rounded-[50%] bg-[#ff574c]"
                alt="callcut"
              />
            </div>
            <div role="button" onClick={() => setIsChatShow((a: any) => !a)}>
              <img
                src={message}
                className="w-[35px] rounded-[50%] bg-[#c2bfc2]"
                alt="chat"
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  };

  const handleExpandedRender = () => {
    const agoraContainer = document.getElementById("agoraVideoContainer");

    console.log("agoraContainer", agoraContainer);
    if (agoraContainer) {
      const root = createRoot(agoraContainer);
      root.render(<ExpandedCall />);
    }
  };

  // useEffect(() => {
  //   console.log(
  //     "isFloating after",
  //     isFloating,
  //     agoraClient,
  //     localMicrophoneTrack,
  //     localCameraTrack,
  //     remoteUsers
  //   );
  //   if (
  //     !isFloating &&
  //     agoraClient &&
  //     // localMicrophoneTrack &&
  //     // localCameraTrack &&
  //     remoteUsers.length > 0
  //   ) {
  //     handleExpandedRender();
  //   }
  // }, [
  //   isFloating,
  //   agoraClient,
  //   // localMicrophoneTrack,
  //   // localCameraTrack,
  //   remoteUsers,
  // ]);

  // useEffect(() => {
  //   console.log("isFloating init", isFloating);
  //   if (!isFloating && agoraClient) {
  //     handleExpandedRender();
  //   }
  // }, []);

  return (
    <>
      {/* {isFloating ? ( */}
      <div
        className={
          isFloating ? `popout-call bottom-2 right-2` : "expanded-call"
        }
      >
        <ExpandedCall />
      </div>
      {/* ) : (
        <></>
      )} */}
    </>
  );
};

// Export the AgoraCall component as the default export
export default AgoraCall;
