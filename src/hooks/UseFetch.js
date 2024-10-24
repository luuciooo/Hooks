import { useState } from "react"

export const useFetch = () => {

    //Asignamos a la funcion useState la variable y la funcion set correspondinete e incializamos el objeto
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    })

    //Desestructuramos state
    const { data, isLoading, error } = state

    //Funcion asincronica , parametros url y method
    const fetchData = async (url, method, bodyData = null) => {
        //si la url es nula retorna vacio
        if (!url) return
        //abrimos try catch
        try {
            //rmamos variable para fncion fetch
            const options = {
                method: method,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: method == 'GET' || method == 'DELETE' ? null : JSON.stringify(bodyData)
            }
            //desestructuramos la data que recibimos
            const res = await fetch(url, options)
            const data = await res.json()
            //llamos a funcion fetch para actualizar estado
            setState({
                data,
                isLoading: false,
                error: null
            })
        }
        //En caso de error devuelve el error
        catch (error) {
            setState({
                data: null,
                error: error,
                isLoading: false,
            })
        }
    }

    return {
        data,
        isLoading,
        error,
        fetchData
    }
}