import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../modules/login/auth.reducer";
import telehealthReducer from "../modules/telehealth/telehealth.reducer";
import commonReducer from "./common.reducer";

export default combineReducers({
  auth: authReducer,
  telehealth: telehealthReducer,
  common: commonReducer,
});
