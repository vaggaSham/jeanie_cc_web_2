import { UID, SDK_MODE } from "agora-rtc-sdk-ng";

const generateRandomUid = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

const config: configType = {
  uid: generateRandomUid(),
  appId: "08d3a58036d1496781b80e372c03495d",
  channelName: "JeanieCCDesktop",
  // rtcToken:
  //   "007eJxTYNhg8+3yHlPZl3kLMxy+LpRNEp858WBBQdp8xhmHYlfPZGZXYDAwTU5JNjBJSjYyNzdJMUi2TEs1NDYyMU0xtDBMSjFKfqtqnNYQyMhw7PwzJkYGCATx+Rm8UhPzMlOdnV1Si7NL8gsYGADidyQQ",
  rtcToken: null,
  selectedProduct: "rtc",
};

export type configType = {
  uid: UID;
  appId: string;
  channelName: string;
  rtcToken: string | null;
  selectedProduct: SDK_MODE;
};

export default config;
