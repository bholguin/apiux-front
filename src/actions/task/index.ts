import { Dispatch } from "@reduxjs/toolkit";
import { IActionId, IActionTask } from "../../models/interfaces/task";
import useServices from "../../services";
import useStrings from "../../strings";

export const useTaskActions = () => {
  const { useTaskServices } = useServices();
  const { getTaskServices, deleteTaskServices, postTaskServices } =
    useTaskServices();

  const { useTaskTypes } = useStrings();
  const { GET_TASKS } = useTaskTypes();

  const actGetTask = () => async (dispatch: Dispatch) => {
    try {
      const res = await getTaskServices();
      dispatch({
        type: GET_TASKS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const actDeleteTask = (data: IActionId) => async (dispatch: Dispatch) => {
    const { id, onSuccess, onError } = data;
    try {
      await deleteTaskServices(id);
      onSuccess && onSuccess();
    } catch (error) {
      console.log(error);
      onError && onError();
    }
  };

  const actPostTask = (rq: IActionTask) => async (dispatch: Dispatch) => {
    const { data, onSuccess, onError } = rq;
    try {
      await postTaskServices(data);
      onSuccess && onSuccess();
    } catch (error) {
      console.log(error);
      onError && onError();
    }
  };

  return {
    actGetTask,
    actDeleteTask,
    actPostTask,
  };
};
