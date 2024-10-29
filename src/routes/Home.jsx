import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import { useContext } from "react"
import { UserContext } from "../context/UseContext"


const Home = () => {
    const  { user } = useContext(UserContext);

    return (
        <>
        <Typography variant="h4" color="initial">Lista de Usuarios</Typography>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Tecnologia</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {user.map((user) => (
                    <TableRow key={user.name}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.tecnhology}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.networks}</TableCell>
                    </TableRow>
            ))}
            </TableBody>
        </Table>
        </>
    )
}

export default Home
