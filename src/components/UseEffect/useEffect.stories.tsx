import {ChangeEvent, useEffect, useState} from "react";

export default {
    title:'use effect',
}

export const UseEffectExample = () => {
    const [counter,setCounter] = useState(1)
    // effect only when component render at first time useEffect(,[])
    console.log('component render')
    useEffect(() => {
        console.log('Use effect occurred')
    },[])
    return (
        <div>
            <span>Hello,conter {counter}</span>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    )
}
export const UseEffectExample2 = () => {
    const [counter,setCounter] = useState(1)
    // effect when component render every time useEffect()
    console.log('component render')
    useEffect(() => {
        console.log('Use effect occurred')
    })
    return (
        <div>
            <span>Hello,conter {counter}</span>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    )
}
export const UseEffectExample3 = () => {
    const [counter,setCounter] = useState(1)
    // effect when dependencies changed useEffect(,[counter])
    console.log('component render')
    useEffect(() => {
        console.log('Use effect occurred')
    },[counter])
    return (
        <div>
            <span>Hello,conter {counter}</span>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    )
}

export const UseEffectExample4 = () => {
    const [counter,setCounter] = useState(1)
    // reset useEffect . return function useEffect(return () => {},[])
    // before component will die (unmount) or before next call useEffect
    //  1 - component render . 2- reset effect . 3- use effect
    console.log('component render')
    useEffect(() => {
        console.log('Use effect occurred' + counter)
        return () => {
            console.log('reset effect' + counter)
        }   },[counter])
    return (
        <div>
            <span>Hello,conter {counter}</span>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    )
}
export const KeysTrackerExample = () => {
    const [text,setText] = useState('')

    console.log('component render')


    useEffect(() => {
        const handler = (e:KeyboardEvent) => {
            console.log(e.key)
            setText(text  => text + e.key)
        }
       window.addEventListener('keypress',handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }},[text])

    return (
        <>
            {text}
        </>
    )
}
