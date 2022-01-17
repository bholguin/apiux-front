import { useProviders } from "../../providers";
import { trackPromise } from "react-promise-tracker";
import { ITask } from "../../models/interfaces/task";

export const useTaskServices = () => {
  const { useTaskProvider } = useProviders();
  const { getTasks, deleteTask, postTask } = useTaskProvider();

  const getTaskServices = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getTasks()));
      } catch (error) {
        reject(error);
      }
    });
  };

  const deleteTaskServices = (id: number): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(deleteTask(id)));
      } catch (error) {
        reject(error);
      }
    });
  };

  const postTaskServices = (data: ITask): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(postTask(data)));
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    getTaskServices,
    deleteTaskServices,
    postTaskServices,
  };
};
