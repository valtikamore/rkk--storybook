import React, {useMemo, useState} from "react";
import {Select} from "../components/select/select";

export default {
    title: 'useMemo'
}
export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resA = 1
    let resB = 1
    resA = useMemo(() => {
        let tempResulltA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const mathfake = Math.random()
            }

            tempResulltA = tempResulltA * i
        }
        return tempResulltA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resB *= i
    }
    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            value A : {resA}
        </div>
        <div>
            value B : {resB}
        </div>
    </>
}


export const HelpToReactMemo = () => {
    const UsersSecret = (props: { users: string[] }) => {
        return (
            <div>
                {props.users.map((u, i) => <div key={i}>{u}</div>)}
            </div>
        )
    }
    const Users = React.memo(UsersSecret)
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState(Array(10).fill('Valentine'));
    const addUser = () => {
        const newUser = [...users, 'Natasha' + new Date().getTime()]
        setUsers(newUser)
    }

    const newUsers = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])
    return (
        <>
            <button onClick={() => setCount(count + 1)}> +</button>
            <button onClick={() => addUser()}> addUser</button>
            {count}
            <Users users={newUsers}/>
        </>
    )
}

export const MemoSelect = () => {
    const SelectedCountry = React.memo(Select)
    const newSelectWithCountry = useMemo(() => {

    },[])
    return (
        <Select onChange={} items={}/>
    )
}