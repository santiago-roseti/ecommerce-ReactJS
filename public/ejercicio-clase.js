import React, {useState} from "react"

export const Users = () => {
  const [user, setUser] = useState(""); 
  const [users, setUsers] = useState([]); 
const handlerChange = (event) => {
    setUser(event.targer.value)
}
const handlerClick = () =>{
    setUsers([...users, user])
}


return (
    <>
    <input type="text" onChange={handlerChange}/>
    <button onClick={handlerClick}>Agrega a la lista</button>
    </>
)
}
