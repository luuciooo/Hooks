import { legacy_createStore as createStore } from "redux"

const initialState = [{
    id: 1, name: 'Explicar Reducer', finalizada: false
}]

const tareaReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TAREAS] Agregar Tarea':
            return [...state, action.payload]
        case '[TAREAS] Finalizar Tarea':
            return state.map(tarea => {
                if (tarea.id === action.payload) {
                    return { ...tarea, finalizada: true }
                }
                return tarea;
            })
        case '[TAREAS] Eliminar Tarea':
            return state.filter(tarea => tarea.id !== action.payload)
        case '[TAREAS] Borrar Tareas':
            return []
        default:
            return state;
    }
}

export const store = createStore(tareaReducer);