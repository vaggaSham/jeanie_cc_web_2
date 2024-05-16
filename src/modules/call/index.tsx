// import React, { useState } from "react";
// import AgoraUIKit, { layout } from "agora-react-uikit";
// import "agora-react-uikit/dist/index.css";

// function AgoraCall() {
//   const [videocall, setVideocall] = useState(false);
//   const [isHost, setHost] = useState(true);
//   const [isPinned, setPinned] = useState(true);
//   const [username, setUsername] = useState("");

//   const handleEndCall = () => {
//     try {
//       setVideocall(false);
//     } catch (err) {
//       console.log("Call End Error => ", err);
//       //   setVideocall(false);
//     }
//   };
//   return (
//     <div className=" flex flex-col w-[100vw] h-[85vh] pl-[52px] md:pl-[68px] lg:pl-[84px] pr-1">
//       {videocall ? (
//         <>
//           {/* <div className="flex justify-around">
//             <p className="w-[200px] text-[20px]">
//               You're {isHost ? "a host" : "an audience"}
//             </p>
//             <p
//               className="bg-[#2B89A2] cursor-pointer rounded-md py-4 px-4 text-[20px] text-[#ffffff]"
//               onClick={() => setHost(!isHost)}
//             >
//               Change Role
//             </p>
//             <p
//               className="bg-[#2B89A2] cursor-pointer rounded-md py-4 px-4 text-[20px] text-[#ffffff]"
//               onClick={() => setPinned(!isPinned)}
//             >
//               Change Layout
//             </p>
//           </div> */}
//           <AgoraUIKit
//             rtcProps={{
//               appId: "05cdc04bc2774d0c9fe13245d181bd2c",
//               channel: "JeanieCCDesktop", // your agora channel
//               token:
//                 "007eJxTYDidXP3gtb5iit80DQ3nqwEtRlLxeyLtnLfefs56//gPw2sKDAamySnJBiZJyUbm5iYpBsmWaamGxkYmpimGFoZJKUbJ6/SU0hoCGRm0Hk5iZGSAQBCfn8ErNTEvM9XZ2SW1OLskv4CBAQCuKSMv", // use null or skip if using app in testing mode
//               role: isHost ? "host" : "audience",
//               layout: isPinned ? layout.pin : layout.grid,
//               enableScreensharing: true,
//             }}
//             // rtmProps={{ username: username || "user", displayUsername: true }}
//             callbacks={{
//               EndCall: () => handleEndCall(),
//             }}
//           />
//         </>
//       ) : (
//         <div className="flex justify-center">
//           <h3
//             className="bg-[#2B89A2] cursor-pointer rounded-md py-2 px-4 text-[20px] text-[#ffffff]"
//             onClick={() => setVideocall(true)}
//           >
//             Start Call
//           </h3>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AgoraCall;

// import { useState } from "react";
// import { AgoraRTCProvider, useRTCClient } from "agora-rtc-react";
// import AgoraRTC from "agora-rtc-sdk-ng";
// import { AgoraManager } from "./agoraManager";
// import config from "./config";
// import "./style.css";

// function AgoraCall() {
//   const client: any = AgoraRTC.createClient({
//     codec: "vp8",
//     mode: config.selectedProduct,
//   });
//   const agoraEngine = useRTCClient(client);
//   const [joined, setJoined] = useState(false);

//   const handleJoinClick = () => {
//     setJoined(true);
//   };

//   return (
//     <div className=" flex flex-col w-[100vw] h-[86vh] pl-[52px] md:pl-[68px] lg:pl-[84px] pr-1">
//       <div className="h-full w-full">
//         {!joined && (
//           <div className="flex justify-center items-center h-full">
//             <button
//               className="bg-[#2B89A2] cursor-pointer rounded-md py-2 px-4 text-[20px] text-[#ffffff]"
//               onClick={handleJoinClick}
//             >
//               Join
//             </button>
//           </div>
//         )}
//         {joined && (
//           <AgoraRTCProvider client={agoraEngine}>
//             <AgoraManager config={config} setJoined={setJoined}></AgoraManager>
//           </AgoraRTCProvider>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AgoraCall;

import { useState } from "react";
import { AgoraRTCProvider, useRTCClient } from "agora-rtc-react";
import AgoraRTC from "agora-rtc-sdk-ng";
import { AgoraManager } from "./agoraManager";
import config from "./config";
import "./style.css";
import Copy from "../../assets/images/copy.svg";
import minize from "../../assets/images/minize.svg";
import warn from "../../assets/images/warn.svg";
import plus from "../../assets/images/plus.svg";
import doctorScan from "../../assets/images/doctor-scan.svg";
import chatSend from "../../assets/images/chatSend.svg";
import menuIcon from "../../assets/images/hamburger.svg";
import backgroundbanner from "../../assets/images/banner.svg";
import smallImage from "../../assets/images/smallImage.svg";
import message from "../../assets/images/message1.svg";
import callCut from "../../assets/images/callCut.svg";
import record from "../../assets/images/record.svg";
import mike from "../../assets/images/mike.svg";
import star from "../../assets/images/star.svg";
import close from "../../assets/images/close.svg";
import closeBlack from "../../assets/images/closeBlack.svg";
import warnWhite from "../../assets/images/warnWhite.svg";
import AiImages from "../../assets/images/AiImages.svg";
import ClientRecord from "../../assets/images/Client_audio_record.svg";

function AgoraCall() {
  const client: any = AgoraRTC.createClient({
    codec: "vp8",
    mode: config.selectedProduct,
  });
  const agoraEngine = useRTCClient(client);
  const [joined, setJoined] = useState(false);

  const handleJoinClick = () => {
    setJoined(true);
  };

  return (
    <div className=" flex flex-col w-[100%] h-[86vh] pl-[52px] md:pl-[68px] lg:pl-[84px] pr-1">
      <div className="h-full w-full">
        <p className="text-sm font-Mulish mt-[8px]">12 April, 2024</p>
        <p className="text-[18px] font-Mulish font-semibold">
          Title Of The Call
        </p>
        <div className="flex">
          <div className="w-[45%] bg-gray-800 p-2">
            <div className="relative">
              <div className="top-8 w-[400px] p-[15px] bg-[#38bdf8] absolute left-2/4 -translate-x-2/4 rounded-[20px]">
                <p className="flex font-Mulish text-[white] mb-2.5">
                  AI Insight <img src={star} alt="" className="pl-2.5" />{" "}
                </p>
                <p className="text-[15px] font-Mulish inline-flex gap-[7px] px-2.5 py-[5px] rounded-[10px] bg-[#fff4d8] my-2">
                  <img src={warn}></img>It looks like the patient is in pain
                </p>
                <p className="text-[17px] font-Mulish font-semibold">
                  Please ask the patient :
                </p>
                <p className="text-[15px] font-Mulish">
                  1.Question Number 1 based on what AI detected?
                </p>
                <p className="text-[15px] font-Mulish">
                  2.Question Number 2 based on what AI detected?
                </p>
              </div>
              <div className="bg-card-bg  rounded-[20px]  p-[18px] mt-[15px]  min-h-[224px] absolute w-[270px] right-3.5 bottom-[61px]">
                <div className="flex justify-between mb-2.5">
                  <p className="text-lg  font-semibold font-Mulish">
                    Quick Notes
                  </p>
                  <img src={minize} alt="icon" />
                </div>
                {/* <div id="chatBot" className="h-[150px] overflow-y-auto mb-[15px] bg-[#f2f6fb] pr-2.5 pt-[7px] pb-[15px]">
                  <div className="bg-[#b0cbe8] mb-[7px] px-[15px] py-[5px] shadow-[0px_3px_15px_0px_rgba(0,0,0,0.15)] rounded-tr-none rounded-xl">
                    <p className="text-[12px] font-Mulish  ">Patient seems to be doing okay - has attended all scheduled calls and is working towards the goals.</p>
                    <p className="text-[8px] text-[white] text-right">12:20</p>
                  </div>
                  <div className="bg-[#b0cbe8] mb-[7px] px-[15px] py-[5px] shadow-[0px_3px_15px_0px_rgba(0,0,0,0.15)] rounded-tr-none rounded-xl">
                    <p className="text-[12px] font-Mulish  ">Patient seems to be doing okay - has attended all scheduled calls and is working towards the goals.</p>
                    <p className="text-[8px] text-[white] text-right">12:20</p>
                  </div>
                  <div className="flex gap-2.5">
                   <div className="bg-[#def6ef] mb-[7px] px-[15px] py-[5px] shadow-[0px_3px_15px_0px_rgba(0,0,0,0.15)] rounded-tl-none rounded-xl">
                    <p className="text-[12px] font-Mulish  ">Question number 1 based on what Ai detected?</p>
                    <p className="text-[8px] text-[black] text-right">12:20</p>
                  </div>
                    <img src={close} alt="icon" />
                  </div>
                  </div>
                  */}
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
              <p className="text-[14px] text-[white] absolute left-[15px] top-[15px] font-Mulish">
                12:20
              </p>
              <img src={backgroundbanner} />
              <img
                src={menuIcon}
                className="absolute right-[25px] top-[23px]"
              />
              <img
                src={smallImage}
                className="max-w-[130px] w-full absolute left-[15px] bottom-9"
              />
              <div className="absolute right-[15px] bottom-[15px] flex gap-2.5 bg-[#a0969a] px-2 py-[5px] rounded-[52px]">
                <img
                  src={mike}
                  className="w-[35px] rounded-[50%] bg-[#c2bfc2]"
                />
                <img
                  src={record}
                  className="w-[35px] rounded-[50%] bg-[#c2bfc2]"
                />
                <img
                  src={callCut}
                  className="w-[35px] rounded-[50%] bg-[#ff574c]"
                />
                <img
                  src={message}
                  className="w-[35px] rounded-[50%] bg-[#c2bfc2]"
                />
              </div>
            </div>
            <div className="relative bg-[#534B52] rounded-[25px]">          
             <div className="flex flex-col justify-center items-center h-[700px]">
              <p className="text-base text-[#FF574C] font-Mulish">
              This session has ended
              </p>
              <p className="text-lg text-white font-Mulish">Please review patient data and save!</p>
                <button className="mt-[30px] bg-[#35C299] font-Mulish h-[30px] leading-[30px] text-[15px] text-white px-3 py-0 rounded-[100px]">
                  Save
                </button>
            </div>

            </div>
          </div>
          <div className="w-[55%] bg-gray-300 p-2">
            <div className="flex bg-card-bg  rounded-[20px]">
              <div className="w-[50%] bg-gray-800 p-4">
                <div className="flex items-center gap-4">
                  <img
                    className="w-[60px] h-[60px] rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                    alt=""
                  />
                  <div className="font-medium dark:text-white">
                    <p className="font-Mulish font-semibold font-md mb-1.5 text-[calc(15px_+_0.390625vw)]">
                      Nancy Drew
                    </p>
                    <p className="text-sm text-light-blue font-Mulish underline relative">
                      444222222 2.16.840.1.113883.4.1{" "}
                      <img
                        src={Copy}
                        alt="copy"
                        className="absolute right-[-7px] -top-3"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[50%] bg-gray-300 p-4">
                <div className="max-w-md mx-auto">
                  <div>
                    <h2 className="text-md font-semibold font-Mulish">
                      Health Condition:{" "}
                      <span className="text-sm font-normal ">
                        {" "}
                        Diabetes; Inflated A1C, This data can be filled with
                        three lines
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2.5 mt-[15px]">
              <div className="w-[50%] bg-gray-800">
                <div className="bg-card-bg  rounded-[20px]  p-[18px]">
                  <div className="flex justify-between mb-2.5">
                    <p className="text-lg  font-semibold font-Mulish">
                      Medications
                    </p>
                    <img src={minize} alt="icon" />
                  </div>
                  <div className="flex justify-between">
                    <ul className="list-disc pl-[22px]">
                      <li className="text-sm font-Mulish  mb-[5px]">
                        Omeprazol
                      </li>
                      <li className="text-sm font-Mulish  mb-[5px]">Validol</li>
                      <li className="text-sm font-Mulish  mb-[5px]">
                        Medication 3
                      </li>
                    </ul>
                    <div className="w-[45%] p-3 bg-[#ffe4ee] rounded-[28px]">
                      <p className="text-md font-Mulish font-semibold">
                        Allergies
                      </p>
                      <ul className="list-disc  pl-[25px]">
                        <li className="text-sm font-Mulish  mb-[5px]">
                          Amoxicillin
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2.5 mt-[15px]">
                  <div className="w-[100%] bg-gray-800">
                    <div className="bg-card-bg  rounded-[20px]  p-[18px]">
                      <div className="flex justify-between mb-2.5">
                        <p className="text-lg  font-semibold font-Mulish">
                          Risk Profile
                        </p>
                        <img src={minize} alt="icon" />
                      </div>
                      <div className="flex  gap-2.5 mx-0 my-2.5">
                        <div className="bg-white px-[17px] py-[5px] rounded-lg">
                          <p className=" text-[13px] font-Mulish font-bold">
                            22
                          </p>
                          <p className="text-[11px] text-[rgba(162,163,163,1)] font-Mulish">
                            Risk Score ADA
                          </p>
                        </div>
                        <div className="bg-white px-[17px] py-[5px] rounded-lg">
                          <p className=" text-[13px] font-Mulish font-bold">
                            22
                          </p>
                          <p className="text-[11px] text-[rgba(162,163,163,1)] font-Mulish">
                            Risk Score FINDRISC
                          </p>
                        </div>
                      </div>
                      <p className="text-[12px] font-Mulish inline-flex gap-[7px] px-2.5 py-[5px] rounded-[10px] bg-[#fff4d8]">
                        <img src={warn}></img>High risk of heart disease within
                        1 year
                      </p>
                      <div className="mt-2.5">
                        <p className=" text-[18px] font-Mulish font-semibold">
                          Risk Factors
                        </p>
                        <ul className="list-disc  pl-[25px]">
                          <li className="text-sm font-Mulish">Age + Gender</li>
                          <li className="text-sm font-Mulish">
                            Fasting glucose levels
                          </li>
                          <li className="text-sm font-Mulish">
                            History of cardiovascular diseases
                          </li>
                          <li className="text-sm font-Mulish">
                            Blood pressure with treatment
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2.5 mt-[15px]">
                  <div className="w-[100%] bg-gray-800">
                    <div className="bg-card-bg  rounded-[20px]  p-[18px]">
                      <div className="flex justify-between mb-2.5">
                        <p className="text-lg  font-semibold font-Mulish">
                          Reports
                        </p>
                        <span className="flex gap-2.5">
                          <img src={plus} alt="icon" />
                          <img src={minize} alt="icon" />
                        </span>
                      </div>
                      <div className="flex gap-[15px]  mt-2.5">
                        <div>
                          <p className="text-[12px] font-Mulish mb-[5px]">
                            Full Brain MRI
                          </p>
                          <img src={doctorScan} alt="icon" />
                        </div>
                        <div>
                          <p className="text-[12px] font-Mulish mb-[5px]">
                            A1C Chart
                          </p>
                          <img src={doctorScan} alt="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2.5 mt-[15px]">
                  <div className="w-[100%] bg-gray-800">
                    <div className="bg-card-bg  rounded-[20px]  p-[18px]">
                      <div className="flex justify-between">
                        <p className="text-lg  font-semibold font-Mulish">
                          Schedule Next Appointment
                        </p>
                        <img src={plus} alt="icon" className="w-7" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[50%] bg-gray-800">
                <div className="flex gap-2.5">
                  <div className="w-[100%] bg-gray-800">
                    <div className="bg-card-bg  rounded-[20px]  p-[18px]">
                      <div className="flex justify-between mb-2.5">
                        <p className="text-lg  font-semibold font-Mulish">
                          Care Plan
                        </p>
                        <img src={minize} alt="icon" />
                      </div>
                      <p className="text-sm font-Mulish mb-2.5">
                        Description & details about the care plan about the care
                        plan - can take up about 3 lines very easily.
                      </p>
                      <p className="text-[12px] rounded-[10px] font-Mulish mb-[7px] px-[15px] py-[5px] bg-[#ffe4d5]">
                        Alerts can be displayed here!
                      </p>
                      <p className="text-[12px] rounded-[10px] font-Mulish mb-[7px] px-[15px] py-[5px] bg-[#ffe4d5]">
                        Alerts can be displayed here!
                      </p>
                      <div className="flex justify-between mt-3.5">
                        <p className="text-lg  font-semibold font-Mulish">
                          Goals
                        </p>
                        <img src={plus} alt="icon" />
                      </div>
                      <div className="flex gap-[15px]  mt-2.5">
                        <div className="bg-white rounded-[9px]  w-full max-w-[200px] p-[15px]">
                          <p className="text-sm font-Mulish mb-[5px] text-[rgba(162,163,163,1)]">
                            #goalid
                          </p>
                          <p className="text-[12px] rounded-[24px] font-Mulish mb-[7px] px-[15px] py-[5px] bg-[#d0d1d1]">
                            Disease Management
                          </p>
                          <p className="text-[12px]  font-Mulish mb-2.5">
                            Description & details about the care plan about the
                            care plan - can take up about 3 lines very easily.
                          </p>
                          <div className="flex gap-[10px]  mt-3.5 items-center">
                            <p className="text-[12px] font-Mulish font-bold">
                              Status :{" "}
                            </p>
                            <p className="text-[11px] rounded-[24px] font-Mulish px-[15px] py-[5px] bg-[#a5f3fc]">
                              In Progress
                            </p>
                          </div>
                          <div className="flex gap-[10px]  mt-1.5 items-center">
                            <p className="text-[12px] font-Mulish font-bold">
                              Target Date :{" "}
                            </p>
                            <p className="text-[12px] font-Mulish font-semibold">
                              12/05/2024
                            </p>
                          </div>
                        </div>
                        {/* <div className="bg-white rounded-[9px]">
                          <p className="text-[12px] font-Mulish mb-[5px]">A1C Chart</p>
                          <img src={doctorScan} alt="icon" />
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-card-bg  rounded-[20px]  p-[18px] mt-[15px]  min-h-[224px] relative">
                  <div className="flex justify-between mb-2.5">
                    <p className="text-lg  font-semibold font-Mulish">
                      Quick Notes
                    </p>
                    <img src={minize} alt="icon" />
                  </div>
                  <div
                    id="chatBot"
                    className="h-[150px] overflow-y-auto mb-[15px] bg-[#f2f6fb] pr-2.5 pt-[7px] pb-[15px]"
                  >
                    <div className="bg-[#b0cbe8] mb-[7px] px-[15px] py-[5px] shadow-[0px_3px_15px_0px_rgba(0,0,0,0.15)] rounded-tr-none rounded-xl">
                      <p className="text-[12px] font-Mulish  ">
                        Patient seems to be doing okay - has attended all
                        scheduled calls and is working towards the goals.
                      </p>
                      <p className="text-[8px] text-[white] text-right">
                        12:20
                      </p>
                    </div>
                    <div className="bg-[#b0cbe8] mb-[7px] px-[15px] py-[5px] shadow-[0px_3px_15px_0px_rgba(0,0,0,0.15)] rounded-tr-none rounded-xl">
                      <p className="text-[12px] font-Mulish  ">
                        Patient seems to be doing okay - has attended all
                        scheduled calls and is working towards the goals.
                      </p>
                      <p className="text-[8px] text-[white] text-right">
                        12:20
                      </p>
                    </div>
                    <div className="flex gap-2.5">
                      <div className="bg-[#def6ef] mb-[7px] px-[15px] py-[5px] shadow-[0px_3px_15px_0px_rgba(0,0,0,0.15)] rounded-tl-none rounded-xl">
                        <p className="text-[12px] font-Mulish  ">
                          Question number 1 based on what Ai detected?
                        </p>
                        <p className="text-[8px] text-[black] text-right">
                          12:20
                        </p>
                      </div>
                      <img src={close} alt="icon" />
                    </div>
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
              </div>
            </div>
            {/* AI Insights */}
            <div className="shadow-[0px_0px_5.5px_0px_rgba(0,0,0,0.2)] rounded-[8px] px-5 py-[20px]">
              <div className="flex justify-between">
                <p className="text-[26px] font-semibold">AI Insights</p>
                <img src={closeBlack} />
              </div>
              <p className="text-[15px] font-Mulish inline-flex gap-[7px] px-2.5 py-[5px] rounded-[10px] bg-[#38bdf8] my-2 text-white">
                <img src={warnWhite}></img>It looks like the patient is in pain
              </p>
              <div className="flex gap-2 mx-0 my-[15px]">
                <img src={AiImages} />
                <img src={AiImages} />
              </div>
              <p className="text-sm font-Mulish mb-2.5">
                These facial movements indicate a discomfort that is caused by a
                certain level of pain.
              </p>
              <div className="flex gap-2 mx-0 my-[15px]">
                <img src={ClientRecord} />
                <img src={ClientRecord} />
                <img src={ClientRecord} />
              </div>
              <p className="text-sm font-Mulish mb-2.5">
                The patients voice at these points, indicates a pain level.
              </p>
              <div className="mt-[20px] pt-[20px] border-t-[#e6e6e6] border-t border-solid">
                <p className="text-[17px] font-Mulish font-semibold mb-2.5">
                  Please ask the patient :
                </p>
                <p className="text-[15px] font-Mulish">
                  1.Question Number 1 based on what AI detected?
                </p>
                <p className="text-[15px] font-Mulish">
                  2.Question Number 2 based on what AI detected?
                </p>
              </div>
            </div>
            {/* AI Insights */}
            {/* Add New Goal */}
            <div className="shadow-[0px_0px_5.5px_0px_rgba(0,0,0,0.2)] rounded-[8px] px-5 py-[20px]">
              <div className="flex justify-between">
                <p className="text-[26px] font-semibold mb-2.5 font-Mulish">
                  Add New Goal{" "}
                </p>
                <img src={closeBlack} />
              </div>
              <div>
                <form className="w-full mt-[20px]">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-3">
                      <input
                        className="font-Mulish border-neutral-200 appearance-none block w-full bg-gray-200 text-gray-700 border border-1  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="GOAL23567"
                      />
                      <label className="text-[#a2a3a3] text-sm font-Mulish">
                        Goal ID
                      </label>
                    </div>
                    <div className="w-full md:w-[66%] px-3">
                      <div className="relative">
                        <select
                          className="font-Mulish block  border-neutral-200 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-state"
                        >
                          <option>Disease Management</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                      <label className="text-[#a2a3a3] text-sm font-Mulish">
                        Goal Category
                      </label>
                    </div>
                    <div className="w-full px-[15px] py-0 mx-0 my-5">
                      <textarea
                        id="message"
                        rows={2}
                        className="font-Mulish  border-neutral-200 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none focus:outline-none"
                        placeholder="Description of the goal can be displayed here for the nurses reference."
                      ></textarea>
                      <label className="text-[#a2a3a3] text-sm font-Mulish">
                        Description
                      </label>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <input
                        className=" font-Mulish border-neutral-200 appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="17.10.1976"
                      />
                      <label className="text-[#a2a3a3] text-sm font-Mulish">
                        Goal ID
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Add New Goal */}
            {/* core plan */}
            <div className="flex gap-2.5">
              <div className="w-[100%] bg-gray-800">
                <div className="bg-card-bg  rounded-[20px]  p-[18px]">
                  <div className="flex justify-between mb-2.5">
                    <p className="text-lg  font-semibold font-Mulish">
                      Care Plan
                    </p>
                    <img src={minize} alt="icon" />
                  </div>
                  <p className="text-sm font-Mulish mb-2.5">
                    Description & details about the care plan about the care
                    plan - can take up about 3 lines very easily.
                  </p>
                  <p className="inline-block text-[12px] rounded-[10px] font-Mulish mb-[7px] px-[15px] py-[5px] bg-[#ffe4d5]">
                    Alerts can be displayed here!
                  </p>
                  <br />
                  <p className="inline-block text-[12px] rounded-[10px] font-Mulish mb-[7px] px-[15px] py-[5px] bg-[#ffe4d5]">
                    Alerts can be displayed here!
                  </p>
                  <div className="flex justify-between mt-3.5">
                    <p className="text-lg  font-semibold font-Mulish">Goals</p>
                    <img src={plus} alt="icon" />
                  </div>
                  <div className="flex flex-wrap gap-[15px] mx-0 my-5">
                    <div className="flex gap-[15px]">
                      <div className="bg-white rounded-[9px]  w-full max-w-[200px] p-[15px]">
                        <p className="text-sm font-Mulish mb-[5px] text-[rgba(162,163,163,1)]">
                          #goalid
                        </p>
                        <p className="text-[12px] rounded-[24px] font-Mulish mb-[7px] px-[15px] py-[5px] bg-[#d0d1d1]">
                          Disease Management
                        </p>
                        <p className="text-[12px]  font-Mulish mb-2.5">
                          Description & details about the care plan about the
                          care plan - can take up about 3 lines very easily.
                        </p>
                        <div className="flex gap-[10px]  mt-3.5 items-center">
                          <p className="text-[12px] font-Mulish font-bold">
                            Status :{" "}
                          </p>
                          <p className="text-[11px] rounded-[24px] font-Mulish px-[15px] py-[5px] bg-[#a5f3fc]">
                            In Progress
                          </p>
                        </div>
                        <div className="flex gap-[10px]  mt-1.5 items-center">
                          <p className="text-[12px] font-Mulish font-bold">
                            Target Date :{" "}
                          </p>
                          <p className="text-[12px] font-Mulish font-semibold">
                            12/05/2024
                          </p>
                        </div>
                      </div>
                      {/* <div className="bg-white rounded-[9px]">
                          <p className="text-[12px] font-Mulish mb-[5px]">A1C Chart</p>
                          <img src={doctorScan} alt="icon" />
                        </div> */}
                    </div>
                    <div className="flex gap-[15px]">
                      <div className="bg-white rounded-[9px]  w-full max-w-[200px] p-[15px]">
                        <p className="text-sm font-Mulish mb-[5px] text-[rgba(162,163,163,1)]">
                          #goalid
                        </p>
                        <p className="text-[12px] rounded-[24px] font-Mulish mb-[7px] px-[15px] py-[5px] bg-[#d0d1d1]">
                          Disease Management
                        </p>
                        <p className="text-[12px]  font-Mulish mb-2.5">
                          Description & details about the care plan about the
                          care plan - can take up about 3 lines very easily.
                        </p>
                        <div className="flex gap-[10px]  mt-3.5 items-center">
                          <p className="text-[12px] font-Mulish font-bold">
                            Status :{" "}
                          </p>
                          <p className="text-[11px] rounded-[24px] font-Mulish px-[15px] py-[5px] bg-[#a5f3fc]">
                            In Progress
                          </p>
                        </div>
                        <div className="flex gap-[10px]  mt-1.5 items-center">
                          <p className="text-[12px] font-Mulish font-bold">
                            Target Date :{" "}
                          </p>
                          <p className="text-[12px] font-Mulish font-semibold">
                            12/05/2024
                          </p>
                        </div>
                      </div>
                      {/* <div className="bg-white rounded-[9px]">
                          <p className="text-[12px] font-Mulish mb-[5px]">A1C Chart</p>
                          <img src={doctorScan} alt="icon" />
                        </div> */}
                    </div>
                    <div className="flex gap-[15px]">
                      <div className="bg-white rounded-[9px]  w-full max-w-[200px] p-[15px]">
                        <p className="text-sm font-Mulish mb-[5px] text-[rgba(162,163,163,1)]">
                          #goalid
                        </p>
                        <p className="text-[12px] rounded-[24px] font-Mulish mb-[7px] px-[15px] py-[5px] bg-[#d0d1d1]">
                          Disease Management
                        </p>
                        <p className="text-[12px]  font-Mulish mb-2.5">
                          Description & details about the care plan about the
                          care plan - can take up about 3 lines very easily.
                        </p>
                        <div className="flex gap-[10px]  mt-3.5 items-center">
                          <p className="text-[12px] font-Mulish font-bold">
                            Status :{" "}
                          </p>
                          <p className="text-[11px] rounded-[24px] font-Mulish px-[15px] py-[5px] bg-[#a5f3fc]">
                            In Progress
                          </p>
                        </div>
                        <div className="flex gap-[10px]  mt-1.5 items-center">
                          <p className="text-[12px] font-Mulish font-bold">
                            Target Date :{" "}
                          </p>
                          <p className="text-[12px] font-Mulish font-semibold">
                            12/05/2024
                          </p>
                        </div>
                      </div>
                      {/* <div className="bg-white rounded-[9px]">
                          <p className="text-[12px] font-Mulish mb-[5px]">A1C Chart</p>
                          <img src={doctorScan} alt="icon" />
                        </div> */}
                    </div>
                    <div className="flex gap-[15px]">
                      <div className="bg-white rounded-[9px]  w-full max-w-[200px] p-[15px]">
                        <p className="text-sm font-Mulish mb-[5px] text-[rgba(162,163,163,1)]">
                          #goalid
                        </p>
                        <p className="text-[12px] rounded-[24px] font-Mulish mb-[7px] px-[15px] py-[5px] bg-[#d0d1d1]">
                          Disease Management
                        </p>
                        <p className="text-[12px]  font-Mulish mb-2.5">
                          Description & details about the care plan about the
                          care plan - can take up about 3 lines very easily.
                        </p>
                        <div className="flex gap-[10px]  mt-3.5 items-center">
                          <p className="text-[12px] font-Mulish font-bold">
                            Status :{" "}
                          </p>
                          <p className="text-[11px] rounded-[24px] font-Mulish px-[15px] py-[5px] bg-[#a5f3fc]">
                            In Progress
                          </p>
                        </div>
                        <div className="flex gap-[10px]  mt-1.5 items-center">
                          <p className="text-[12px] font-Mulish font-bold">
                            Target Date :{" "}
                          </p>
                          <p className="text-[12px] font-Mulish font-semibold">
                            12/05/2024
                          </p>
                        </div>
                      </div>
                      {/* <div className="bg-white rounded-[9px]">
                          <p className="text-[12px] font-Mulish mb-[5px]">A1C Chart</p>
                          <img src={doctorScan} alt="icon" />
                        </div> */}
                    </div>
                    <div className="flex gap-[15px]">
                      <div className="bg-white rounded-[9px]  w-full max-w-[200px] p-[15px]">
                        <p className="text-sm font-Mulish mb-[5px] text-[rgba(162,163,163,1)]">
                          #goalid
                        </p>
                        <p className="text-[12px] rounded-[24px] font-Mulish mb-[7px] px-[15px] py-[5px] bg-[#d0d1d1]">
                          Disease Management
                        </p>
                        <p className="text-[12px]  font-Mulish mb-2.5">
                          Description & details about the care plan about the
                          care plan - can take up about 3 lines very easily.
                        </p>
                        <div className="flex gap-[10px]  mt-3.5 items-center">
                          <p className="text-[12px] font-Mulish font-bold">
                            Status :{" "}
                          </p>
                          <p className="text-[11px] rounded-[24px] font-Mulish px-[15px] py-[5px] bg-[#a5f3fc]">
                            In Progress
                          </p>
                        </div>
                        <div className="flex gap-[10px]  mt-1.5 items-center">
                          <p className="text-[12px] font-Mulish font-bold">
                            Target Date :{" "}
                          </p>
                          <p className="text-[12px] font-Mulish font-semibold">
                            12/05/2024
                          </p>
                        </div>
                      </div>
                      {/* <div className="bg-white rounded-[9px]">
                          <p className="text-[12px] font-Mulish mb-[5px]">A1C Chart</p>
                          <img src={doctorScan} alt="icon" />
                        </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* core plan */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgoraCall;
