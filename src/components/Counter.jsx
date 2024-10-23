import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useCounter } from '../hooks/UseCounter'
const Counter = () => {
    //Desestructura el return
    const { counter, increment, reset, decrement } = useCounter(0)

    return (
        <>
            <Box
                sx={{
                    width: '100vw',
                    height: '30vh',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#f0f4f8',
                    borderRadius: '8px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    padding: '10px'
                }}
            >
                <Box
                    sx={{
                        height: '10vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        margin: '20px',
                        color: '#333',
                    }}
                >
                    <Typography variant="h2" color="textPrimary" fontWeight="bold">
                        Contador:
                    </Typography>
                    <Typography variant="h4" color="secondary" fontWeight="bold">
                        {counter}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        height: '10vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '15px',
                    }}
                >
                    <Button
                        variant="contained"
                        onClick={() => decrement()}
                        color="error"
                        sx={{
                            fontSize: '1.2rem',
                            padding: '10px 20px',
                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        -1
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => reset()}
                        color="secondary"
                        sx={{
                            fontSize: '1.2rem',
                            padding: '10px 20px',
                            borderColor: '#333',
                            color: '#333',
                        }}
                    >
                        reset
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => increment()}
                        color="primary"
                        sx={{
                            fontSize: '1.2rem',
                            padding: '10px 20px',
                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        +1
                    </Button>
                </Box>
            </Box>
        </>
    )
}


export default Counter
