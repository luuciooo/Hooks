import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom'

const AppNav = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                    <NavLink to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</NavLink>
                        <NavLink to="/counters" style={{ color: 'inherit', textDecoration: 'none' }}>Contadores</NavLink>
                        <NavLink to="/calculo" style={{ color: 'inherit', textDecoration: 'none' }}>Calculo</NavLink>
                        <NavLink to="/fetchs" style={{ color: 'inherit', textDecoration: 'none' }}>Fetchs</NavLink>
                        <NavLink to="/form" style={{ color: 'inherit', textDecoration: 'none' }}>Form</NavLink>
                        <NavLink to="/tareas" style={{ color: 'inherit', textDecoration: 'none' }}>Tasks</NavLink>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default AppNav
