import Button from '@mui/material/Button'
import React from 'react'
const Increment = React.memo(({ incrementPadre }) => {
    return (
        <>
            <Button variant="outlined" onClick={() => incrementPadre(1  )} color="secondary">Incrementar + 1</Button>
        </>
    )
})

export default Increment
