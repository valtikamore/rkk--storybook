import {useState} from "react";

export default {
    title:'useStateDemo'
}
function generateData () {
    //....
    console.log('generate data')
    return 202020202020
}
export const Example1 = () => {
    console.log('example1')



    const [counter,setCounter] = useState(generateData) // [0,function(newValue)()]

    return (
        <>
            <button onClick={()=>{setCounter(counter+1)}}></button>
            {counter}
        </>
    )
}