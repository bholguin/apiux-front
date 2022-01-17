import axios from "axios";
import { ITask } from "../../models/interfaces/task";

export const useTaskProvider = () => {
  const axiosTask = axios.create({
    baseURL: process.env.REACT_APP_API,
  });

  const getTasks = () => {
    return axiosTask({
      method: "get",
      url: "/task",
    });
  };

  const deleteTask = (id: number) => {
    return axiosTask({
      method: "delete",
      url: `/task/${id}`,
    });
  };

  const postTask = (data: ITask) => {
    return axiosTask({
      method: "post",
      url: `/task`,
      data,
    });
  };

  return {
    getTasks,
    deleteTask,
    postTask,
  };
};
