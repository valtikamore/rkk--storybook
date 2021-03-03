import React, {useState} from "react";

type PropsType = {
    onChange:(on:boolean) => void
    defaultOn?:boolean
}

export function UncontrolledOnOff(props:PropsType) {
    const [on,setOn] = useState(props.defaultOn ? props.defaultOn : false)

    let styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
    let OnStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        backgroundColor:on ? 'green' : 'white'
    }
    let OffStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        backgroundColor:on ? 'white' : 'red'
    }
    let IndicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        alignSelf: 'center',
        backgroundColor:on ? 'green' : 'red'
    }

    const onMode = () => {
        setOn(true)
    }

    const offMode = () => {
        setOn(false)
    }
    return (
        <div style={styles}>
            <div style={OnStyle}
                 onClick={onMode}>on</div>
            <div style={OffStyle}
                 onClick={ offMode}>off</div>
            <div style={IndicatorStyle}></div>
        </div>
    )
}
