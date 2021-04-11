import {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}
export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('Simple exampl')
    useEffect(() => {
        console.log('useEffect')
    })
    return (
        <div>
            Hello , {counter}
            <button onClick={() => {
                setCounter(counter => counter + 1)
            }}> +
            </button>
        </div>
    )
}