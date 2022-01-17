import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Switch, Typography } from "@mui/material"
import { FC, useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { IModal } from "./Modal.interfaces"
import { StyledField } from "./Modal.styled"


const Modal: FC<IModal> = (props): JSX.Element => {
    const { handleSubmit, reset, control, formState: { isValid } } = useForm({
        mode: 'onChange'
    });
    const {
        fullWidth,
        maxWidth,
        open,
        handleClose,
        submit,
        model
    } = props

    useEffect(() => {
        if (model) {
            reset({
                id: model.id,
                title: model.title,
                descripcion: model.descripcion,
                vigente: model.vigente
            })
        } else {
            reset({
                title: "",
                descripcion: "",
                vigente: true
            })
        }
    }, [reset, model])

    return (
        <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>{`${model?.id ? "Edit" : "Create"} Task`}</DialogTitle>
            <form onSubmit={handleSubmit(submit)}>
                <DialogContent>
                    <StyledField>

                        <Controller
                            control={control}
                            name='vigente'
                            defaultValue={false}
                            render={({ field }) => {
                                return (
                                    <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>

                                        <Switch
                                            checked={field.value}
                                            name={field.name}
                                            onChange={(e: any) => {
                                                field.onChange(e)
                                            }}
                                        />
                                        <Typography>Current Task</Typography>
                                    </div>

                                )
                            }}
                        />
                    </StyledField>
                    <StyledField>
                        <Controller
                            control={control}
                            name='title'
                            defaultValue={""}
                            rules={{ required: "Campo requerido" }}
                            render={({ field }) => {
                                return <TextField
                                    fullWidth
                                    value={field.value}
                                    id="title"
                                    label="Title"
                                    variant="outlined"
                                    onChange={(e: any) => {
                                        field.onChange(e)
                                    }}
                                />
                            }}
                        />
                    </StyledField>
                    <StyledField>
                        <Controller
                            control={control}
                            name='descripcion'
                            defaultValue={""}
                            rules={{ required: "Campo requerido" }}
                            render={({ field }) => {
                                return <TextField
                                    fullWidth
                                    value={field.value}
                                    id="descripcion"
                                    label="Description"
                                    variant="outlined"
                                    multiline
                                    rows={3}
                                    onChange={(e: any) => {
                                        field.onChange(e)
                                    }}
                                />
                            }}
                        />
                    </StyledField>

                </DialogContent>
                <DialogActions>
                    <Button type="submit" disabled={!isValid} color="success" variant="contained">Save</Button>
                    <Button type="button" onClick={handleClose} color="error" variant="outlined">Close</Button>
                </DialogActions>
            </form>

        </Dialog>
    )
}

export default Modal