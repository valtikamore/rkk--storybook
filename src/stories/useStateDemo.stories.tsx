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

    const changer = (state:number) => state + 1


    return (
        <>
            <button onClick={()=>setCounter(changer)}></button>
            {counter}
        </>
    )
}