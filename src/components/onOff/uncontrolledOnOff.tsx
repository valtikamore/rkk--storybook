import React, {useState} from "react";



function UncontrolledOnOff() {
    const [on,setOn] = useState(true)

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

    const onClickedOn = () => {
        setOn(true)
    }

    const onClickedOff = () => {
        setOn(false)
    }
    return (
        <div style={styles}>
            <div style={OnStyle}
                 onClick={onClickedOn}>on</div>
            <div style={OffStyle}
                 onClick={ onClickedOff}>off</div>
            <div style={IndicatorStyle}></div>
        </div>
    )
}

export default UncontrolledOnOff