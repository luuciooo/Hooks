import { useState } from "react"

export const useCounter = (initialValue = 0) => {

    //Seteamos la variable y la funcion al useState
    const [counter, setCounter] = useState(initialValue)

    //Funcion que utilizara para incrementar
    const increment = (val = 1) => {
        setCounter(counter + val)
    }
    //Funcion que utilizara para resetear
    const reset = () => {
        setCounter(initialValue)
    }
    //Funcion que utilizara para decrementar
    const decrement = (val = 1, allowNegative = true) => {
        if (!allowNegative && counter < 1) return
        setCounter(counter - val)
    }

    //Retornamos la variable y las funciones
    return {
        counter,
        increment,
        reset,
        decrement
    }
}