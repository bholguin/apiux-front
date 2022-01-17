import { FC } from "react"
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import TaskIcon from '@mui/icons-material/Task';
import DeleteIcon from '@mui/icons-material/Delete';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { Edit } from "@mui/icons-material";
import { useTask } from './hook'
import { ITask } from "../../models/interfaces/task";
import { StyledContainer, StyledTitle, StyledButton } from './Task.styles'
import { Button } from "@mui/material";
import dayjs from 'dayjs'
import Divider from '@mui/material/Divider';
import TimerIcon from '@mui/icons-material/Timer';
import TimerOffIcon from '@mui/icons-material/TimerOff';
import Modal from "../../components/Modal";
const Task: FC = (): JSX.Element => {
    const {
        tasks,
        openModal,
        deleteTask,
        handleModal,
        handleCloseModal,
        postTask,
    } = useTask();

    return (
        <StyledContainer>
            <StyledTitle>
                <Typography style={{ fontWeight: 'bold' }} variant="h5" component="div">
                    TASKS LIST
                </Typography>
            </StyledTitle>
            <StyledButton>
                <Button startIcon={<AddTaskIcon />} onClick={() => handleModal(undefined)} color="success" variant="contained">Add Task</Button>
            </StyledButton>

            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    {
                        tasks.length > 0
                            ? <List dense={true}>
                                {tasks.map((item: ITask, index: number) =>
                                    <div key={index}>
                                        <ListItem
                                            secondaryAction={
                                                <div>
                                                    <IconButton edge="end" aria-label="edit" onClick={() => handleModal(item)} >
                                                        <Edit />
                                                    </IconButton>
                                                    <IconButton edge="end" aria-label="current task" >
                                                        {item.vigente ? <TimerIcon color="success" /> : <TimerOffIcon color="error" />}
                                                    </IconButton>
                                                    <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(item.id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </div>
                                            }
                                        >
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <TaskIcon color={item.vigente ? 'success' : 'error'} />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={item.title}
                                                secondary={`${item.descripcion} - ${dayjs(item.fechaCreacion).format('DD/MM/YYYY')}`}
                                            />
                                        </ListItem>
                                        <Divider />
                                    </div>
                                )}
                            </List>
                            : "No tienes tareas disponibles"
                    }
                </Grid>
            </Grid>
            <Modal open={openModal.open} model={openModal.model} handleClose={handleCloseModal} maxWidth={"md"} fullWidth submit={postTask} />
        </StyledContainer>
    )
}

export default Task