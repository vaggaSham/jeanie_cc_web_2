import { useDispatch } from "react-redux";
import type { AppDispatch } from "../lib/createStore";

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
