import React, { useState } from "react";
export default {
    title:'React.memo demo',

}
const NewMessagesCounter =(props:{count:number}) => {
    return <div>{props.count}</div>
}
const UsersSecret =(props:{users:string[]}) => {
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}
const Users = React.memo(UsersSecret)
export const Example1 = () => {
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState(Array(10).fill('Valentine'));

    const addUser = () => {
        const newUser = [...users,'Natasha' + new Date().getTime()]
        setUsers(newUser)
    }
    return (
        <>
            <button onClick={()=> setCount(count + 1)}> + </button>
            <button onClick={addUser}> add User </button>
            <NewMessagesCounter count={count}/>
            <Users users={users}/>
        </>
    )
}