import React, { useEffect, useRef, useState } from "react";
import minize from "../../assets/images/minize.svg";
import chatSend from "../../assets/images/chatSend.svg";
import AC, { AgoraChat } from 'agora-chat'
import WebIM from 'agora-chat'


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
  const [messageValue,setMessageValue]=useState<any>('')
  const [messageReceived,setMessageReceived]=useState<any>([])
 


  useEffect(()=>{
    
    // openConnection()

    setTimeout(() => {
      if(count.current==0){
        count.current=1
        // registerUSer(`sham_${makeid(5)}`,`Sham@92_${makeid(5)}`)
        registerUSer(`sham_2020`,`Sham@92_2020`)
        }
    }, 5000);
   
  },[])


  conn.addEventHandler("connection&message", {
    // Occurs when the app is connected to Agora Chat.
    onConnected: () => {
      console.log("OnDConnected==>","YES")
      
    },
    // Occurs when the app is disconnected from Agora Chat.
    onDisconnected: () => {
      console.log("OnDisConnected==>","YES")
     
    },
    // Occurs when a text message is received.
    onTextMessage: (message) => {

      setMessageReceived((prevArray:any) => [...prevArray, message]);
      // console.log(message);
      // document
      //   .getElementById("log")
      //   .appendChild(document.createElement("div"))
      //   .append("Message from: " + message.from + " Message: " + message.msg);
    },
    // Occurs when the token is about to expire.
    onTokenWillExpire: () => {
      console.log("OnToken will Expired==>","YES")
      // document
      //   .getElementById("log")
      //   .appendChild(document.createElement("div"))
      //   .append("Token is about to expire");
    },
    // Occurs when the token has expired. 
    onTokenExpired: () => {
      console.log("OnToken Expired==>","YES")
      // document
      //   .getElementById("log")
      //   .appendChild(document.createElement("div"))
      //   .append("The token has expired");
    },
    onError: (error) => {
      console.log("on error", JSON.stringify(error));
    },
  });


  function makeid(length:any) {
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

  function refreshToken(username:any, password:any) {
    postData('https://a41.chat.agora.io/app/chat/user/login', { "userAccount": username, "userPassword": password })
        .then((res) => {
            let agoraToken = res.accessToken
            conn.renewToken(agoraToken)
            
        })
}

  const postData=(url:any, data:any) =>{
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


const openConnection=(username:any,password:any)=>{
  postData('https://a41.chat.agora.io/app/chat/user/login', { "userAccount": username, "userPassword": password })
        .then((res) => {
          console.log("TokenSuccess==>",res)
            let agoraToken = res.accessToken
            let easemobUserName = res.chatUserName
            conn.open({
                user: easemobUserName,
                agoraToken: agoraToken
            }).then((resOpen)=>{
              console.log("resOpen==>Success",resOpen)

            }).catch((resOpenerr)=>{
              console.log("resOpen==>Err",resOpenerr)
            });

            
          
        })
        .catch((res)=> {
          console.log("TokenError==>",res)
            // document.getElementById("log").appendChild(document.createElement('div')).append(`Login failed`)
        })
}


const registerUSer=(username:any,password:any)=>{
  postData('https://a41.chat.agora.io/app/chat/user/register', { "userAccount": username, "userPassword": password })
        .then((res) => {
          console.log("TokenRegi==>",res)
          openConnection(username,password)
           // document.getElementById("log").appendChild(document.createElement('div')).append(`register user ${username} success`)
        })
        .catch((res)=> {
           // document.getElementById("log").appendChild(document.createElement('div')).append(`${username} already exists`)
        })
}

const handleSendMssage=()=>{
  let option:any = {
    chatType: 'singleChat',    // Set it to single chat
    type: 'txt',               // Message type
    to: 'sham_9292',                // The user receiving the message (user ID)
    msg: messageValue           // The message content
}
let msg = AC.message.create(option); 
conn.send(msg).then((res) => {
    console.log('send private text success');
    // document.getElementById("log").appendChild(document.createElement('div')).append("Message send to: " + peerId + " Message: " + peerMessage)
}).catch((err) => {
    console.log('send private text fail', err);
})
setMessageValue('')
}

useEffect(()=>{
  console.log("messageRecive==>",messageReceived)
},[messageReceived])


  
  return (
    <div className="bg-card-bg  rounded-[20px]  p-[18px] mt-[15px]  min-h-[224px] relative">
      <div className="flex justify-between mb-2.5">
        <p className="text-lg  font-semibold font-Mulish" onClick={()=>{handleSendMssage()}}>Quick Notes</p>
        <img src={minize} alt="icon" />
      </div>
      <div style={{maxHeight:190,minHeight:190, overflowY:'auto'}}>

      {messageReceived.map((data:any,index:any)=>{
        return(
        <div className="bg-[#b0cbe8] mb-[7px] px-[15px] py-[5px] shadow-[0px_3px_15px_0px_rgba(0,0,0,0.15)] rounded-tl-none rounded-xl">
        <p className="text-[12px] font-Mulish  ">
          {/* Patient seems to be doing okay - has attended all scheduled calls and
          is working towards the goals. */}
          {data?.msg}
         
        </p>
        <p className="text-[8px] text-[white] text-right">12:20</p>
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
              onChange={(e)=>{
                setMessageValue(e.target.value)
                console.log("change Value===>",e.target.value)
              }}
            />
            <img src={chatSend} alt="" className="absolute right-5 top-3"
            // onClick={()=>{registerUSer(`sham_2020`,`Sham@92_2020`)}} 
            onClick={()=>{handleSendMssage()}} 
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuickNotes;
