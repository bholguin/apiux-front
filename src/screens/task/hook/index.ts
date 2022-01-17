import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import useActions from "../../../actions";
import useSelectors from "../../../models/selectors";
import { IActionId, IActionTask, ITask } from "../../../models/interfaces/task";
export const useTask = () => {
  const dispatch = useDispatch();
  const { useTaskActions } = useActions();
  const { actGetTask, actDeleteTask, actPostTask } = useTaskActions();

  const { useTaskSelectors } = useSelectors();
  const { tasksSelector } = useTaskSelectors();

  const tasks: Array<ITask> = useSelector(tasksSelector);

  const [openModal, setOpenModal] = useState<{
    open: boolean;
    model: ITask | undefined;
  }>({
    open: false,
    model: undefined,
  });

  const handleModal = (model?: ITask) =>
    setOpenModal({
      open: true,
      model,
    });

  const handleCloseModal = () =>
    setOpenModal({
      open: false,
      model: undefined,
    });

  const deleteTask = useCallback(
    (id: number) => {
      const rq: IActionId = {
        id: id,
        onSuccess: () => dispatch(actGetTask()),
      };
      dispatch(actDeleteTask(rq));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  const postTask = (data: ITask) => {
    const rq: IActionTask = {
      data,
      onSuccess: () => {
        dispatch(actGetTask());
        handleCloseModal();
      },
    };
    dispatch(actPostTask(rq));
  };

  useEffect(() => {
    dispatch(actGetTask());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return {
    tasks,
    openModal,
    deleteTask,
    handleModal,
    handleCloseModal,
    postTask,
  };
};
