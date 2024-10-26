import Typography from '@mui/material/Typography'
import Increment from './Increment'
import { useCallback, useState } from 'react'
const Callback = () => {
    const [counter, setCounter] = useState(0)

    const increment = useCallback(
        (val) => {
            setCounter(c => c + val)
        },[],)
    
    
    return (
        <>
            <Typography variant="h2" color="initial">Contador : {counter}</Typography>
            <Increment incrementPadre={increment}></Increment>
        </>
    )
}

export default Callback
