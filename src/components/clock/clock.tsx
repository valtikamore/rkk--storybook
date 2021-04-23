import React, {FC, useEffect, useState} from 'react'
import {DigitalClockView} from "./digitalClock.clock";
import {AnalogClockView} from "./analogClock";

type PropsType = {
    mode?: 'digital'|'analog'
}
export type DigitalClockType  = {
    date:Date
}
export const Clock:FC<PropsType> = props => {
    const {mode} = props
    const [date,setDate] = useState(new Date())
    useEffect(()=> {
        const intervalId = setInterval(()=> {setDate(new Date())},1000)
        return () => {
            clearInterval(intervalId)
        }
    },[])
    let view
    switch (mode) {
        case "analog": {
            view = <AnalogClockView date={date}/>
            break
        }
        case "digital":
        default:  view =  <DigitalClockView date={date}/>
    }
    return (
        <>
            {view}
        </>
    )
}


