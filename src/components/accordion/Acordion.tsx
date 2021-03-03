import React from "react";



export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange:() => void
    items:string[]
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}
                            />
            {!props.collapsed && <AccordionBody items={props.items}/>}
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
type AccordionBodyType = {
    items:string[]
}

function AccordionBody(props:AccordionBodyType) {
    console.log('rendering AccBody')
    return (
        <ul>
            {props.items}
        </ul>)

}



