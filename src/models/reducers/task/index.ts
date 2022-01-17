import useHelpers from "../../../helpers";
import useStrings from "../../../strings";
import useInitialStates from "../../initialStates";
import { ITask } from "../../interfaces/task";
export const useTaskReducers = () => {
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  const { useTaskInitialState } = useInitialStates();
  const { initialStateTasks } = useTaskInitialState();
  const { useTaskTypes } = useStrings();
  const { GET_TASKS } = useTaskTypes();

  const task = createReducer(initialStateTasks, {
    [GET_TASKS](state: Array<ITask>, action: { payload: Array<ITask> }) {
      return {
        ...state,
        list: action.payload,
      };
    },
  });

  return {
    task,
  };
};
