import React, {useState} from "react";


type AccordionPropsType = {
    titleValue: string,
}

function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false)
    const toogle = () => setCollapsed(!collapsed)
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={toogle}/>
            {!collapsed && <AccordionBody/>}
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


export default UncontrolledAccordion;
