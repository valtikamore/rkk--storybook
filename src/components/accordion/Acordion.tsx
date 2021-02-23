import React from "react";



type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange:() => void
}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}
                            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}
type AccordionTitlePropsType = {
    title: string
    onChange:() => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    const toogle = () => {props.onChange()}
    return (
        <h3 onClick={toogle}>{props.title}
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


export default Accordion;
