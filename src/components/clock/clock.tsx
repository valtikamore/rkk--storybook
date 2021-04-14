import React, {FC, useEffect, useState} from 'react'
import internal from "stream";

interface PropsType {

}
const getTimeInTwoDigits = (time:number) => time < 10 ? '0'+time:time
export const Clock:FC<PropsType> = props => {
    const {} = props
    const [date,setDate] = useState(new Date())
    useEffect(()=> {
        const intervalId = setInterval(()=> {setDate(new Date())},1000)
        return () => {
            clearInterval(intervalId)
        }
    },[])


    return (
        <div>
            <span>{getTimeInTwoDigits(date.getHours())}</span>
            :
            <span>{getTimeInTwoDigits(date.getMinutes())}</span>
            :
            <span>{getTimeInTwoDigits(date.getSeconds())}</span>
        </div>
    )
}