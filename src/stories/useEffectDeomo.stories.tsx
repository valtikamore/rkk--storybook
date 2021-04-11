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
    useEffect(() => {
        console.log('useEffect')
    }, [])
    useEffect(() => {
        console.log('useEffect')
    }, [counter])
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


export const SetTimeoutExample = () => {
    const [seconds, setSeconds] = useState<number>()
    const [minuts, setMinuts] = useState<number>()
    const [hours, setHours] = useState<number>()

    useEffect(() => {
        setInterval(() => {
            let date = new Date()
            setSeconds(date.getUTCSeconds())
            setMinuts(date.getMinutes())
            setHours(date.getHours())
        },1000)
    }, [])
    return (
        <div>
            <div>{`${hours} ${minuts} ${seconds}`}</div>
        </div>
    )
}

export const Clocks = () => {
    const [clocks, setClocks] = useState<Date>(new Date())

    useEffect(() => {
        setInterval(() => {
            setClocks(new Date())
        }, 1000)
    }, [])
    return (
        <div>
            <div>{clocks.toLocaleTimeString()}</div>
        </div>
    )
}