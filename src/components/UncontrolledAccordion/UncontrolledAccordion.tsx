import React, {useReducer} from "react";
import {reducer, TOOGLE_COLLASED} from "./reducer";


type AccordionPropsType = {
    titleValue: string,
}
export function UncontrolledAccordion(props: AccordionPropsType) {
    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer,{collapsed:false})
    // const toogle = () => setCollapsed(!collapsed)
    const toogle = () => {
        debugger
        dispatch({type: TOOGLE_COLLASED})
    }
    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={toogle}/>*/}
            <AccordionTitle title={props.titleValue} onClick={toogle}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}
type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('rendering AccTitle')
    return (
        <h3 onClick={ props.onClick}>{props.title}
        </h3>
    )
}
function AccordionBody() {
    console.log('rendering AccBody')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>

        </ul>)
}



