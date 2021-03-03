import React, {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

export default {
    title:'input',

}

export const UncontrolledInput = () => <input/>


export const TrackValueOfUncontrolledInput = () => {
    const [value,setValue]=useState('')
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        const actialValue = e.currentTarget.value
        setValue(actialValue)
    }

    return (
        <>
            <input onChange={onChange}/> {value}
        </>
    )
}
export const GetTrackValueOfUncontrolledInputByButtonPress = () => {
    const [value,setValue]=useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = ()=> {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (
        <>
            <input ref={inputRef}/> <button onClick={save}>save</button> - actual value - {value}
        </>
    )
}
export const ControlledInput = () => {
    const [parentValue,setParentValue]=useState(' ')

    return (
        <input value={parentValue} onChange={action('want to change')}/>
    )
}
export const ControlledCheckBox = () => {

}
export const ControlledCheckSelect = () => {

}



export const ControlledInputWithFixedValue = () => <input value={'kkkkk'}/>