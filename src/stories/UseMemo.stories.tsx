import {useState} from "react";

export default {
    title: 'useMemo'
}
export const Example1 = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resA = 1
    let resB = 1
    for (let i = 1; i <= a; i++) {
        resA *= i
    }
    for (let i = 1; i <= b; i++) {
        resB *= i
    }
    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            value A : {resA}
        </div>
        <div>
            value B : {resB}
        </div>
    </>
}