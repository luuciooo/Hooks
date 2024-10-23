import { useState } from "react"

export const useForm = (initialForm = {}) => {
    //Seteamos la variable y la funcion al useState
    const [formState, setFormState] = useState(initialForm) 

    //Generamos la funcion que pasaremos al componente las misma recibe el target (conjunto de datos) los desestructura y agrega para generr el nuevo array
    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    //retornamos el array y la funcion 
    return {
        ...formState,
        onInputChange
    }
}