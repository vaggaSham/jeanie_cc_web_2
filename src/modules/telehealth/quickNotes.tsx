import React, { useEffect, useRef, useState } from "react";
import minize from "../../assets/images/minize.svg";
import chatSend from "../../assets/images/chatSend.svg";
import Message from "../../assets/images/messageSent.png";
import dots from "../../assets/images/dotsIcon.svg";
import AC, { AgoraChat } from 'agora-chat'
import WebIM from 'agora-chat'
import moment from "moment";

type MessageFormat = {
  time: string;
  text: string;
  position: string;
  msgType: string;
  fileUrl: string | File;
}

const appKey = "411130085#1315009";
// Initializes the Web client.
// const conn = new AC.connection({
//   appKey: '411130085#1315009',
// });
const conn = new WebIM.connection({
  appKey: "41117440#383391",
})


const QuickNotes = () => {
  const count = useRef<any>(0)
  const messageView = useRef<any>(null);
  const fileInuptRef = useRef<any>(null);
  const [messageValue, setMessageValue] = useState<any>('')
  const [messageStack, setMessageStack] = useState<MessageFormat[]>([])
  const [showFileOptions, setShowFileOptions] = useState<boolean>(false);

  useEffect(() => {

    // openConnection()

    setTimeout(() => {
      if (count.current == 0) {
        count.current = 1
        // registerUSer(`sham_${makeid(5)}`,`Sham@92_${makeid(5)}`)
        registerUSer(`sham_2020`, `Sham@92_2020`)
      }
    }, 5000);

  }, [])


  conn.addEventHandler("connection&message", {
    // Occurs when the app is connected to Agora Chat.
    onConnected: () => {
      console.log("OnDConnected==>", "YES")

    },
    // Occurs when the app is disconnected from Agora Chat.
    onDisconnected: () => {
      console.log("OnDisConnected==>", "YES")

    },
    // Occurs when a text message is received.
    onTextMessage: (message: any) => {
      const msgObj: MessageFormat = {
        time: moment(message.time).format("hh:mm"),
        msgType: message?.type,
        text: message?.msg,
        fileUrl: "",
        position: "left",

      }
      setMessageStack((prevArray: any) => [...prevArray, msgObj]);
    },

    onImageMessage: (message: any) => {
      const msgObj: MessageFormat = {
        time: moment(message.time).format("hh:mm"),
        msgType: message?.type,
        text: "",
        fileUrl: message?.url,
        position: "left",

      }
      setMessageStack((prevArray: any) => [...prevArray, msgObj]);
    },
    onFileMessage: function (message: any) {
      const msgObj: MessageFormat = {
        time: moment(message.time).format("hh:mm"),
        msgType: message?.type,
        text: "",
        fileUrl: message?.url,
        position: "left",

      }
      setMessageStack((prevArray: any) => [...prevArray, msgObj]);
    },
    // Occurs when the token is about to expire.
    onTokenWillExpire: () => {
      console.log("OnToken will Expired==>", "YES")
      refreshToken(`sham_2020`, `Sham@92_2020`);
    },
    // Occurs when the token has expired. 
    onTokenExpired: () => {
      console.log("OnToken Expired==>", "YES")

    },
    onError: (error) => {
      console.log("on error", JSON.stringify(error));
    },
  });


  function makeid(length: any) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }









  // const openChatConnection=()=>{
  //   conn.open({
  // 		user: userId,
  // 		agoraToken: token,
  // 	});
  // }

  function refreshToken(username: any, password: any) {
    postData('https://a41.chat.agora.io/app/chat/user/login', { "userAccount": username, "userPassword": password })
      .then((res) => {
        let agoraToken = res.accessToken
        conn.renewToken(agoraToken)

      })
  }

  const postData = (url: any, data: any) => {
    return fetch(url, {
      body: JSON.stringify(data),
      cache: 'no-cache',
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      referrer: 'no-referrer',
    })
      .then(response => response.json())
  }


  const openConnection = (username: any, password: any) => {
    postData('https://a41.chat.agora.io/app/chat/user/login', { "userAccount": username, "userPassword": password })
      .then((res) => {
        console.log("TokenSuccess==>", res)
        let agoraToken = res.accessToken
        let easemobUserName = res.chatUserName
        conn.open({
          user: easemobUserName,
          agoraToken: agoraToken
        }).then((resOpen) => {
          console.log("resOpen==>Success", resOpen)

        }).catch((resOpenerr) => {
          console.log("resOpen==>Err", resOpenerr)
        });



      })
      .catch((res) => {
        console.log("TokenError==>", res)
        // document.getElementById("log").appendChild(document.createElement('div')).append(`Login failed`)
      })
  }


  const registerUSer = (username: any, password: any) => {
    postData('https://a41.chat.agora.io/app/chat/user/register', { "userAccount": username, "userPassword": password })
      .then((res) => {
        console.log("TokenRegi==>", res)
        openConnection(username, password)
        // document.getElementById("log").appendChild(document.createElement('div')).append(`register user ${username} success`)
      })
      .catch((res) => {
        // document.getElementById("log").appendChild(document.createElement('div')).append(`${username} already exists`)
      })
  }

  const handleSendMssage = (fileType: string, selectedFile?: File | any) => {
    if (fileType === 'txt' && (!messageValue || messageValue.trim() === "")) return;
    if (fileType !== 'txt' && (!selectedFile)) return;

    const msgObj: MessageFormat = {
      time: moment().format("hh:mm"),
      text: fileType === "txt" ? messageValue : "",
      position: "right",
      msgType: fileType,
      fileUrl: fileType !== "txt" ? selectedFile : ""
    }
    setMessageStack((prevArray: MessageFormat[]) => [...prevArray, msgObj]);

    let globalOption: any = {};
    if (fileType === "txt") {
      let option: any = {
        chatType: 'singleChat',    // Set it to single chat
        type: fileType,               // Message type
        to: 'rahul_4950',
        msg: messageValue               // The user receiving the message (user ID)
      }
      globalOption = { ...option };
    } else {
      let option = {
        type: 'img',
        file: selectedFile,
        ext: {
          file_length: selectedFile.size,
        },
        to: "rahul_4950",
        chatType: "singleChat",
        onFileUploadError: function (e:any) {
          console.log("onFileUploadError",e);
        },
        // Reports the progress of uploading the image file.
        onFileUploadProgress: function (e: any) {
          console.log(e);
        },
        // Occurs when the image file is successfully uploaded.
        onFileUploadComplete: function (e:any) {
          console.log("onFileUploadComplete",e);
        },
      };
      globalOption={...option};
    }
    console.log("global oj  = ===",globalOption)

    let msg = AC.message.create(globalOption);

    conn.send(msg).then((res) => {
      console.log('our sent msg resposne = ', res);
    }).catch((err) => {
      console.log('send private text fail', err);
    })
    setMessageValue('')
  }

  useEffect(() => {
    messageView?.current?.lastElementChild?.scrollIntoView({ behavior: "smooth", block: "end" });
    console.log("our msg statck =============================", messageStack)

  }, [messageStack])


  return (
    <div className="bg-card-bg  rounded-[20px]  p-[18px] mt-[15px]  min-h-[224px] relative">
      <div className="flex justify-between mb-2.5">
        <p className="text-lg  font-semibold font-Mulish" onClick={() => { }}>Quick Notes</p>
        <img src={minize} alt="icon" />
      </div>
      <div ref={messageView} className="h-[190px] overflow-y-auto mb-[50px]" >
        {
          messageStack?.map((item: any) => {
            return (
              <div className={`flex  my-2 ${item?.position === 'right' ? "flex-row-reverse" : ""}`}>
                <div className={`flex rounded-2xl ${item?.position === "left" ? " rounded-tl-none bg-[#b0cbe8]" : "rounded-tr-none bg-white"}`}>
                  {
                    item?.msgType === 'txt' ?
                      (
                        <div className=" p-2 text-[12px] ">{item?.text}</div>
                      )
                      : item?.msgType === "img" ? (
                        <div className="p-1 ">
                          <img className="rounded-xl" width={120} src={typeof item.fileUrl === "string" ? item.fileUrl : URL.createObjectURL(item.fileUrl)} alt="image msg" />
                        </div>
                      ) : (
                        <div></div>
                      )
                  }
                  <div className="w-[30px] text-[8px] justify-center text-[#656664] font-semibold flex items-end pb-2"><span>{item?.time}</span></div>
                </div>
              </div>
            )
          })
        }
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
              value={messageValue}
              onChange={(e) => {
                setMessageValue(e.target.value)
                // console.log("change Value===>",e.target.value)
              }}
              onKeyDown={(e: any) => {
                if (e.key === "Enter") {
                  handleSendMssage("txt");
                }
              }}
            />
            <div className="absolute flex gap-3 items-center right-2 top-3">
              <div>
                <img src={Message} width={14} alt="" onClick={() => { handleSendMssage("txt") }} />
              </div>

              <div className="px-1 relative" onMouseEnter={() => setShowFileOptions(true)} onMouseLeave={() => setShowFileOptions(false)}>
                {/* <img className="cursor-pointer"  src={dots} alt="" onClick={() => fileInuptRef?.current?.click()} /> */}
                <img className="cursor-pointer " src={chatSend} alt="" onClick={() => fileInuptRef?.current?.click()} />
                {
                  showFileOptions && (
                    <div className="absolute h-[80px] w-[70px] bottom-0 right-0 bg-white rounded-lg shadow-2xl text-[14px] font-bold p-3 font-Mulish">
                      <div className="mb-2 cursor-pointer" onClick={() => fileInuptRef?.current?.click()}>Image</div>
                      <div className="cursor-pointer">File</div>
                    </div>
                  )
                }
              </div>

              {/* <img className="cursor-pointer" src={chatSend} alt=""  onClick={() => fileInuptRef?.current?.click()}/> */}
            </div>
            <div className="hidden">
              <input ref={fileInuptRef} type="file" accept="image/*" onChange={(e: any) => handleSendMssage("img", e.target.files[0])} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuickNotes;
