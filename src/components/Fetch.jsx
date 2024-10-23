import { useEffect } from "react"
import { useFetch } from "../hooks/UseFetch"
import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"

const Fetch = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'

    const { data, isLoading, error, fetchData } = useFetch()

    useEffect(() => {
        fetchData(url, 'GET')
    }, [])

    return (
        <>
            <Typography variant="h5" gutterBottom>
                Lista de Usuarios:
            </Typography>
            {isLoading ? (
                <Typography variant="h6">
                    Cargando... <CircularProgress size={24} />
                </Typography>
            ) : error ? (
                <Typography variant="h6" color="error">
                    Ha ocurrido un error: {error}
                </Typography>
            ) : (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Website</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.website}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </>
    )
}

export default Fetch
