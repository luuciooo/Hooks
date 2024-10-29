import { useContext, useEffect, useRef } from "react";
import { useForm } from "../hooks/UseForm";
import { Box, Button, TextField, Typography } from "@mui/material";
import { UserContext } from "../context/UseContext";

const Formulario = () => {
    const { user, setUser } = useContext(UserContext);

    const { name, tecnhology, email, networks, onInputChange } = useForm({
        name: '',
        technology: '',
        email: '',
        networks: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setUser([...user, { name, tecnhology, email, networks }]);
    };

    const focusRef = useRef();
    useEffect(() => {
        focusRef.current.focus();
    }, []);

    return (
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
                Crear Cuenta
            </Typography>

            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Nombre"
                    name="name"
                    variant="outlined"
                    margin="normal"
                    value={name}
                    onChange={onInputChange}
                    sx={{ marginBottom: '20px' }}
                />

                <TextField
                    inputRef={focusRef}
                    fullWidth
                    label="Tecnología"
                    name="tecnhology"
                    variant="outlined"
                    margin="normal"
                    value={tecnhology}
                    onChange={onInputChange}
                    sx={{ marginBottom: '20px' }}
                />

                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    value={email}
                    onChange={onInputChange}
                    sx={{ marginBottom: '30px' }}
                />

                <TextField
                    fullWidth
                    label="Redes"
                    name="networks"
                    variant="outlined"
                    margin="normal"
                    value={networks}
                    onChange={onInputChange}
                    sx={{ marginBottom: '30px' }}
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
                    Registrarse
                </Button>
            </form>
        </Box>
    );
};

export default Formulario;
