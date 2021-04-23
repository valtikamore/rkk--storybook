import React from "react";
import {DigitalClockType} from "./clock";

export const getTimeInTwoDigits = (time:number) => time < 10 ? '0'+time:time
export const DigitalClockView: React.FC<DigitalClockType> = ({date}) => {
    return <div>
        <span>{getTimeInTwoDigits(date.getHours())}</span>
        :
        <span>{getTimeInTwoDigits(date.getMinutes())}</span>
        :
        <span>{getTimeInTwoDigits(date.getSeconds())}</span>
    </div>
}