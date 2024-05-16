import { UID, SDK_MODE } from "agora-rtc-sdk-ng";

const config: configType = {
  uid: 0,
  appId: "05cdc04bc2774d0c9fe13245d181bd2c",
  channelName: "JeanieCCDesktop",
  rtcToken:
    "007eJxTYOjteXUsl1Hnztcbl5K3V31s2CVZkbft1l07F5VgM8enDf0KDAamySnJBiZJyUbm5iYpBsmWaamGxkYmpimGFoZJKUbJh5zV0hoCGRnWcoUzMzJAIIjPz+CVmpiXmers7JJanF2SX8DAAABocCSS",
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
