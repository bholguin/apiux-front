import { combineReducers } from "redux";
import { useTaskReducers } from "./task";

export const useReducers = () => {
  const { task } = useTaskReducers();

  return combineReducers({ task });
};
