import { useSelector } from "react-redux";
import { GlobalState } from "../definitions/GlobalState";

const useAppAccessor = () => {
  const getAuth = useSelector((state: GlobalState) => {
    return state.auth;
  });

  return {
    getAuth: () => getAuth,
  };
};

export default useAppAccessor;
