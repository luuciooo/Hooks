import { Box, Button, Typography } from "@mui/material"
import { useState , useMemo } from "react"

const CalculoPesado = () => {

  const [show, setShow] = useState(true)
  const [numList, setnumList] = useState([2, 3, 4, 5, 6, 7, 8, 9])

  const getCalculo = (numList) => {
    console.log('Calculando...')
    return numList.reduce((a, b) => a * b)
  }

  const addNumber = () => {
    setnumList([...numList,numList[numList.length-1]+1])
  }
  const memorizedValue = useMemo(() => getCalculo(numList), [numList]);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        p={2}
      >
        <Typography variant="h4">Calculo pesado con UsarMemo</Typography>
        {show && <Typography variant="h6">El calculo es : {memorizedValue}</Typography>}
      </Box>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        p={2}
      >
        <Button variant="outlined" onClick={() => setShow(!show)}>{show ? 'Ocultar Calculo' : 'Mostrar Calculo'}</Button>
        <Button variant='contained' onClick={() => addNumber()}>Añadir Numero</Button>
      </Box>
    </>
  )
}

export default CalculoPesado
