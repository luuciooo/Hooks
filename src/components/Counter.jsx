import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useCounter } from '../hooks/UseCounter'
const Counter = () => {

    const { counter, increment, reset, decrement } = useCounter(0)

    return (
        <>
            <Box
                sx={{
                    width: '100vw',
                    height: '20vh',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Box
                    sx={{
                        height: '10vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        margin:"20px"
                    }}
                >
                    <Typography variant="h2" color="initial">Contador :</Typography>
                    <Typography variant="h4" color="initial">{counter}</Typography>
                </Box>
                <Box
                    sx={{
                        height: '10vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                <Button variant="text" onClick={() => decrement()} color="primary">-1</Button>
                <Button variant="text" onClick={() => reset()} color="primary">reset</Button>
                <Button variant="text" onClick={() => increment()} color="primary">+1</Button>
                </Box>
            </Box>
        </>
    )
}


export default Counter
