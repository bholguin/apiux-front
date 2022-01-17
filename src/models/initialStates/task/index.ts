import { ITaskInitialState } from "../../interfaces/task";

export const useTaskInitialState = () => {
  const initialStateTasks: ITaskInitialState = {
    list: [],
  };

  return {
    initialStateTasks,
  };
};
