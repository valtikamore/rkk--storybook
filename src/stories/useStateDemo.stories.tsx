import {useState} from "react";

export default {
    title:'useStateDemo'
}
export const Example1 = () => {
    console.log('example1')
    const [counter,setCounter] = useState(0)

    return (
        <>
            <button onClick={()=>{setCounter(counter+1)}}></button>
        </>
    )
}