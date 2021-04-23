import {Clock} from "./clock";


export default {
    title:'clock',
    component:Clock
}

export const BaseExampleDigital = () => {
    return <Clock mode={'digital'}/>
}

export const BaseExampleAlalog = () => {
    return <Clock mode={'analog'}/>
}