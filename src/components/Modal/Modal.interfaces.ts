import { Breakpoint } from "@mui/material";
import { ITask } from "../../models/interfaces/task";

export interface IModal {
  fullWidth?: boolean;
  maxWidth: false | undefined | Breakpoint;
  open: boolean;
  model: ITask | undefined;
  handleClose: () => void;
  submit: (data: any) => void;
}
