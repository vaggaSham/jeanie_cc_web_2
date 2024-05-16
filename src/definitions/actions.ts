import { GlobalState } from "./GlobalState";

export type GetStateFunc = () => GlobalState;
export type GenericAction = {
  type: string;
  data?: any;
  meta?: any;
  error?: any;
  index?: number;
  displayable?: boolean;
  postId?: string;
  sessionId?: string;
  currentUserId?: string;
  remove?: Function | string[];
  timestamp?: number;
  [extraProps: string]: any;
};

export type ActionResult = {
  data?: any;
  error?: any;
};

export type Thunk = (
  b: DispatchFunc,
  a: GetStateFunc
) => Promise<ActionResult> | ActionResult;

export type Action = GenericAction | Thunk | ActionFunc;

export type DispatchFunc = (
  action: Action,
  getState?: GetStateFunc | null
) => Promise<void>;
export type ActionFunc = (
  dispatch: DispatchFunc,
  getState: GetStateFunc
) => Promise<ActionResult> | ActionResult | Promise<void> | void;
