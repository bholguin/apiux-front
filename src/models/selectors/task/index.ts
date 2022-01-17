import { createSelector } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";
import { ITask, ITaskInitialState } from "../../interfaces/task";
export const useTaskSelectors = () => {
  const tasksSelector = createSelector(
    (state: RootStateOrAny) => state.task,
    (task: ITaskInitialState): Array<ITask> => task.list
  );

  return { tasksSelector };
};
