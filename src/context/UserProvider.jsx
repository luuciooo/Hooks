import { useState } from "react"
import { UserContext } from "./UseContext"

const initial = [{
    name: "Lucio Abalos",
    tecnhology: 'React',
    email: 'lucioabalos97@gmail.com',
    networks: '@luuciooo'
}]

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(initial)
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
