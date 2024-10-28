import { Box, Button, Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography,} from "@mui/material"
import { useForm } from "../hooks/UseForm"
import { useDispatch, useSelector } from "react-redux"

const ListadeTareas = () => {

    const tareas = useSelector(state => state)
    const dispatch = useDispatch()
    
    const addTask = (event) => {
        event.preventDefault();
        const nuevaTarea = {
            id: new Date().getTime(),
            name: tarea,
            finalizada: false
        }
        const action = {
            type: '[TAREAS] Agregar Tarea',
            payload: nuevaTarea
        }
        dispatch(action)
    }

    const endTask = (id) => {
        const action = {
            type: '[TAREAS] Finalizar Tarea',
            payload: id
        }
        dispatch(action)
    }

    const deleteTask = (id) => {
        const action = {
            type: '[TAREAS] Eliminar Tarea',
            payload: id
        }
        dispatch(action)
    }

    const deleteAll = () => {
        const action = {
            type: '[TAREAS] Borrar Tareas',
        }
        dispatch(action)
    }

    const { tarea, onInputChange } = useForm({ tarea: '' })
    return (
        <>
            <Box
                sx={{
                    width: '400px',
                    margin: '0 auto',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#fff',
                }}
            >
                <Typography variant="h5" color="primary" gutterBottom align="center">
                    Agregar tarea
                </Typography>
                <form onSubmit={addTask}>
                    <TextField
                        fullWidth
                        label="Nueva Tarea"
                        name="tarea"
                        variant="outlined"
                        margin="normal"
                        onChange={onInputChange}
                        sx={{ marginBottom: '20px' }}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit"
                        sx={{
                            padding: '10px',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            backgroundColor: '#1976d2',
                            '&:hover': {
                                backgroundColor: '#1565c0',
                            },
                        }}
                    >
                        Agregar
                    </Button>
                    <Button
                        variant="contained"
                        color="warning"
                        fullWidth
                        sx={{
                            padding: '10px',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                        }}
                        onClick={deleteAll}
                    >
                        Borrar todas
                    </Button>
                </form>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Finalizada</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tareas.map((tarea) => (
                            <TableRow key={tarea.id}>
                                <TableCell>{tarea.id}</TableCell>
                                <TableCell>{tarea.name}</TableCell>
                                <TableCell>{tarea.finalizada ? "Completado" : "Pendiente"}</TableCell>
                                <TableCell><Checkbox
                                    checked={tarea.finalizada}
                                    onChange={() => endTask(tarea.id)}
                                    color="primary"
                                /></TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="warning" onClick={() => deleteTask(tarea.id)}>
                                        Eliminar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ListadeTareas
