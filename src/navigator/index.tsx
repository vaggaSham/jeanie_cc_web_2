import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./protected";
import PublicRoute from "./public";
import Login from "../modules/login";
import Alerts from "../modules/alerts";
import Patients from "../modules/patients";
import AgoraCallTemp from "../modules/call";
import AgoraCall from "../modules/telehealth/Components/AgoraChatAndCall/agoraCall";
import TeleHealth from "../modules/telehealth";
import { useSelector } from "react-redux";
import { AgoraRTCProvider } from "agora-rtc-react";
import AgoraRTC from "agora-rtc-sdk-ng";
import config from "../modules/telehealth/config";
import TeleHealthProvider from "../modules/telehealth/Components/AgoraChatAndCall";

export const AppRoutes = () => {
  const client: any = AgoraRTC.createClient({
    codec: "vp8",
    mode: config.selectedProduct,
  });
  const { isStarted } = useSelector((state: any) => state.telehealth);
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute component={Login} />} />
        <Route path="/login" element={<PublicRoute component={Login} />} />
        <Route path="/alerts" element={<PrivateRoute component={Alerts} />} />
        <Route
          path="/patients"
          element={<PrivateRoute component={Patients} />}
        />
        <Route
          path="/call"
          element={<PrivateRoute component={AgoraCallTemp} />}
        />
        <Route
          path="/telehealth"
          element={<PrivateRoute component={TeleHealth} client={client} />}
        />
      </Routes>
      {isStarted && (
        <>
          <AgoraRTCProvider client={client}>
            <TeleHealthProvider client={client}>
              <AgoraCall />
            </TeleHealthProvider>
          </AgoraRTCProvider>
        </>
      )}
    </>
  );
};
