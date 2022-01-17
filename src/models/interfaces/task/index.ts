export interface ITask {
  id: number;
  descripcion: string;
  vigente: boolean;
  title: string;
  fechaCreacion: string;
}

export interface ITaskInitialState {
  list: Array<ITask>;
}

interface ICallback {
  onSuccess?: () => void;
  onError?: () => void;
}

export interface IActionId extends ICallback {
  id: number;
}

export interface IActionTask extends ICallback {
  data: ITask;
}
