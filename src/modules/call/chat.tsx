// import React, { useState } from "react";
// import AC, { AgoraChat } from "agora-chat"; // Assuming agora-chat-uikit provides a package named 'agora-chat'

// const ChatComponent = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [peerId, setPeerId] = useState("");
//   const [peerMessage, setPeerMessage] = useState("");
//   const [log, setLog] = useState<any>([]);

//   const appKey = "611133403#1318161";
//   // Initializes the Web client.
//   const conn: any = new AC.connection({
//     appKey: appKey,
//   });

//   conn.addEventHandler("connection&message", {
//     // Occurs when the app is connected to Agora Chat.
//     onConnected: () => {
//       setLog((prevLog: any) => [...prevLog, "Connect success !"]);
//     },
//     // Occurs when the app is disconnected from Agora Chat.
//     onDisconnected: () => {
//       setLog((prevLog: any) => [...prevLog, "Logout success !"]);
//     },
//     // Occurs when a text message is received.
//     onTextMessage: (message: any) => {
//       setLog((prevLog: any) => [
//         ...prevLog,
//         "Message from: " + message.from + " Message: " + message.msg,
//       ]);
//     },
//     // Occurs when the token is about to expire.
//     onTokenWillExpire: (params: any) => {
//       setLog((prevLog: any) => [...prevLog, "Token is about to expire"]);
//     },
//     // Occurs when the token has expired.
//     onTokenExpired: (params: any) => {
//       setLog((prevLog: any) => [...prevLog, "The token has expired"]);
//     },
//     onError: (error: any) => {
//       console.log("on error", error);
//     },
//   });

//   const postData = (url: any, data: any) => {
//     return fetch(url, {
//       body: JSON.stringify(data),
//       cache: "no-cache",
//       headers: {
//         "content-type": "application/json",
//       },
//       method: "POST",
//       mode: "cors",
//       redirect: "follow",
//       referrer: "no-referrer",
//     }).then((response) => response.json());
//   };

//   const onRegisterClick = () => {
//     postData("https://a41.chat.agora.io/app/chat/user/register", {
//       userAccount: username,
//       userPassword: password,
//     })
//       .then((res) => {
//         setLog((prevLog: any) => [
//           ...prevLog,
//           `Registered user ${username} successfully`,
//         ]);
//       })
//       .catch(() => {
//         setLog((prevLog: any) => [...prevLog, `${username} already exists`]);
//       });
//   };

//   const onLoginClick = () => {
//     setLog((prevLog: any) => [...prevLog, "Logging in..."]);
//     // postData("https://a41.chat.agora.io/app/chat/user/login", {
//     //   userAccount: username,
//     //   userPassword: password,
//     // })
//     //   .then((res: any) => {
//     //     const agoraToken = res.accessToken;
//     //     const easemobUserName = res.chatUserName;
//     conn.open({
//       user: "ShubhuFlashy",
//       agoraToken:
//         "007eJxSYChYw73beJ9dd/0X1f6fXpO9FrSt2T3zrnzd9HPrC66dY+tVYEi1SLJMMTK2NDFKNjMxNzFPMk5MMTFLTDNNNLVMTEsxSubRTBPgY2CYuzKBkZGBlYGRgZEBxOdhCM4oTcoodctJLM6oBAQAAP//YgoiRQ==",
//     });
//     //   })
//     //   .catch((error) => {
//     //     setLog((prevLog: any) => [...prevLog, `Login failed`]);
//     //     console.log("login Failed=>", error);
//     //   });
//   };

//   const onLogoutClick = () => {
//     conn.close();
//     setLog((prevLog: any) => [...prevLog, "Logout"]);
//   };

//   const onSendMessageClick = () => {
//     const option: any = {
//       chatType: "singleChat",
//       type: "txt",
//       to: peerId,
//       msg: peerMessage,
//     };
//     let msg = AC.message.create(option);
//     conn
//       .send(msg)
//       .then(() => {
//         setLog((prevLog: any) => [
//           ...prevLog,
//           `Message sent to: ${peerId} Message: ${peerMessage}`,
//         ]);
//       })
//       .catch((err: any) => {
//         console.log("send private text fail", err);
//       });
//   };

//   return (
//     <div className="flex flex-col space-y-4">
//       <div id="log">
//         {log.map((entry: any, index: number) => (
//           <div key={index}>{entry}</div>
//         ))}
//       </div>
//       <div className="flex space-x-8">
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <div className="flex space-x-4">
//         <button onClick={onRegisterClick}>Register</button>
//         <button onClick={onLoginClick}>Login</button>
//         <button onClick={onLogoutClick}>Logout</button>
//       </div>
//       <div className="flex space-x-4">
//         <input
//           type="text"
//           placeholder="Peer ID"
//           value={peerId}
//           onChange={(e) => setPeerId(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Peer Message"
//           value={peerMessage}
//           onChange={(e) => setPeerMessage(e.target.value)}
//         />
//       </div>
//       <div className="flex space-x-4">
//         <button onClick={onSendMessageClick}>Send Message</button>
//       </div>
//     </div>
//   );
// };

// export default ChatComponent;

// import React, { useState, useEffect } from "react";
// import AgoraRTM from "agora-rtm-sdk";

// const ChatComponent = () => {
//   const [client, setClient] = useState<any>(null);
//   const [channel, setChannel] = useState<any>(null);
//   const [userID, setUserID] = useState(null);
//   const [token, setToken] = useState(null);
//   const [messages, setMessages] = useState<any>([]);
//   const [inputMessage, setInputMessage] = useState("");

//   useEffect(() => {
//     async function initializeRTM() {
//       const appID = "e8b9d23942c64747b3ad46af5a59afd2";
//       // Generate a random alphanumeric user ID
//       const userID: any = Math.random().toString(36).substring(2, 10);
//       setUserID(userID);

//       // Fetch the token from your backend
//       const token: any =
//         "007eJxSYMh+cPTIne1y1nJnRMP7T8w7lL/ejCXSoW2SxYkb+9sNz8gpMKRaJFmmGBlbmhglm5mYm5gnGSemmJglppkmmlompqUYvefSTGsIZGRIm/OdhZGBiYGRgZEBxGdgAAQAAP//wx0eeQ==";
//       setToken(token);

//       // Initialize Agora RTM Client
//       const agoraClient = new AgoraRTM.RTM(appID, userID, {
//         token: token,
//       });
//       setClient(agoraClient);

//       // Listen for events
//       agoraClient.addEventListener("message", (eventArgs) => {
//         console.log(
//           "Message from",
//           eventArgs.publisher,
//           ":",
//           eventArgs.message
//         );
//         setMessages((prevMessages: any) => [
//           ...prevMessages,
//           { sender: eventArgs.publisher, text: eventArgs.message },
//         ]);
//       });

//       // Connect to Agora RTM using the generated token
//       await agoraClient.login();

//       try {
//         await agoraClient.publish("JeanieCCDesktop", "hello world");
//       } catch (err) {
//         console.log({ err }, "error occurs at publish message");
//       }
//     }

//     initializeRTM();
//   }, []);

//   //   const fetchToken = async (userID: any) => {
//   //     try {
//   //       // Make a request to your backend to fetch the token
//   //       const response = await fetch("https://api.agora.io/dev/v1/rtm/token", {
//   //         method: "POST",
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //         },
//   //         body: JSON.stringify({
//   //           appId: appID,
//   //           userId: userID,
//   //           expirationTimeInSeconds: expirationTimeInSeconds,
//   //         }),
//   //       });
//   //       const data = await response.json();
//   //       return data.token;
//   //     } catch (error) {
//   //       console.error("Failed to fetch token:", error);
//   //       return null;
//   //     }
//   //   };

//   const sendMessage = async (channelName:any, message:any) => {
//     const payload = { type: "text", message };
//     const publishMessage = JSON.stringify(payload);
//     try {
//         const sendResult = await agoraClient.publish(
//         channelName,
//         publishMessage
//         );
//         messageCallback(`Message sent to channel ${channelName}: ${message}`);
//     } catch (error) {
//         console.log(error);
//     }
//     };

//   return (
//     <div>
//       <h1>Agora RTM Chat</h1>
//       <div>
//         {messages.map((message: any, index: number) => (
//           <div key={index}>
//             <strong>{message.sender}: </strong>
//             <span>{message.text}</span>
//           </div>
//         ))}
//       </div>
//       <div>
//         <input
//           type="text"
//           value={inputMessage}
//           onChange={(e) => setInputMessage(e.target.value)}
//           placeholder="Type your message..."
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default ChatComponent;

// import React, { useState, useEffect } from "react";
// import AgoraRTM from "agora-rtm-react";

// const ChatComponent = () => {
//   const [client, setClient] = useState<any>(null);
//   const appID = "e8b9d23942c64747b3ad46af5a59afd2";
//   // Generate a random alphanumeric user ID
//   const userID: any = Math.random().toString(36).substring(2, 10);

//   // Fetch the token from your backend
//   const token: any =
//     "007eJxSYMh+cPTIne1y1nJnRMP7T8w7lL/ejCXSoW2SxYkb+9sNz8gpMKRaJFmmGBlbmhglm5mYm5gnGSemmJglppkmmlompqUYvefSTGsIZGRIm/OdhZGBiYGRgZEBxGdgAAQAAP//wx0eeQ==";
//   useEffect(() => {
//     const agoraClient = AgoraRTM.createInstance(appID);

//     // Set up event listeners
//     // For example:
//     agoraClient.on("ConnectionStateChanged", (newState, reason) => {
//       console.log("Connection state changed:", newState, reason);
//     });

//     // Connect to Agora RTM
//     agoraClient.login({ token: token, uid: appID });

//     setClient(agoraClient);
//     // return () => {
//     //   // Clean up
//     //   agoraClient.logout();
//     //   agoraClient.release();
//     // };
//   }, []);
//   const sendMessage = async (text: any, peerId: any) => {
//     try {
//       await client.sendMessageToPeer({ text }, peerId);
//     } catch (error) {
//       console.error("Failed to send message:", error);
//     }
//   };
//   return <></>;
// };

// export default ChatComponent;

import React, { CSSProperties, useState } from "react";
import { createChannel, createClient, RtmMessage } from "agora-rtm-react";

export const useClient = createClient("e8b9d23942c64747b3ad46af5a59afd2");
export const useChannel = createChannel("JeanieCCChat");

const ChatComponent = () => {
  const client = useClient();
  const jeanieChannel = useChannel(client);
  const [texts, setTexts] = useState<messageStore[]>([]);
  const [uid, setUid] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [textInput, setTextInput] = useState<string>("");
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

  let login = async () => {
    await client.login({
      uid,
      token: token,
    });
    await jeanieChannel.join();
    client.on("ConnectionStateChanged", async (state, reason) => {
      console.log("ConnectionStateChanged", state, reason);
    });
    jeanieChannel.on("ChannelMessage", (msg, uid) => {
      setTexts((previous) => {
        return [...previous, { msg, uid }];
      });
    });
    jeanieChannel.on("MemberJoined", (memberId) => {
      console.log("New Member: ", memberId);
    });
    setLoggedIn(true);
  };

  let logout = async () => {
    await jeanieChannel.leave();
    await client.logout();
    jeanieChannel.removeAllListeners();
    client.removeAllListeners();
    setLoggedIn(false);
  };

  const sendMsg = async (text: string) => {
    let message = client.createMessage({ text, messageType: "TEXT" });
    await jeanieChannel.sendMessage(message);
    setTexts((previous) => {
      return [...previous, { msg: { text }, uid }];
    });
    setTextInput("");
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        height: "90vh",
        margin: 8,
      }}
    >
      <h1 style={{ textAlign: "center" }}>Agora RTM Wrapper Demo</h1>
      <div style={{ display: "flex", margin: "auto" }}>
        <p style={{ marginRight: 5 }}>Enter a user ID: </p>
        <input
          style={{ marginRight: 5 }}
          type="text"
          disabled={isLoggedIn}
          value={uid}
          onChange={(e) => setUid(e.target.value)}
        />
        <p style={{ marginRight: 5 }}>Token: </p>
        <input
          style={{ marginRight: 5 }}
          type="text"
          disabled={isLoggedIn}
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button
          disabled={!uid}
          style={btnStyle}
          onClick={isLoggedIn ? logout : login}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flex: 10,
          flexDirection: "column",
          margin: 20,
          marginLeft: "10%",
          marginRight: "10%",
          backgroundColor: "#efefef",
          paddingRight: 10,
          paddingLeft: 10,
          overflowY: "scroll",
        }}
      >
        {texts.map((text: any, i) => (
          <div
            key={i}
            style={{
              backgroundColor: text.uid === uid ? "#007bff50" : "#ccc",
              margin: 10,
              width: "50%",
              marginLeft: text.uid === uid ? "auto" : "",
              padding: 12,
              borderRadius: 10,
            }}
          >
            <div style={{ fontSize: 12, opacity: 0.5 }}>{text.uid}</div>
            <div>{text.msg["text"]}</div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          justifySelf: "flex-end",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flex: "1",
            marginRight: "10%",
            marginLeft: "10%",
            height: 40,
          }}
        >
          <input
            style={{ width: "100%", marginRight: 20 }}
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <button
            style={{ ...btnStyle, opacity: isLoggedIn && textInput ? 1 : 0.5 }}
            disabled={!isLoggedIn || !textInput}
            onClick={() => sendMsg(textInput)}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

const btnStyle = {
  backgroundColor: "#007bff",
  borderWidth: 0,
  borderRadius: 10,
  color: "#fff",
  width: 200,
  fontWeight: "bold",
  fontSize: 16,
} as CSSProperties;

export type messageStore = {
  msg: RtmMessage;
  uid: string;
};

export default ChatComponent;
