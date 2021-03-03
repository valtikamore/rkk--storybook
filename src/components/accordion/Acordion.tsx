import React from "react";

type itemType = {
    title:string
    value:any
}

export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange:() => void
    items:itemType[]
    onClick:(value:any) => void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}
                            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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
    items:itemType[]
    onClick:(value:any) => void
}

function AccordionBody(props:AccordionBodyType) {
    console.log('rendering AccBody')
    return (
        <ul>
            {props.items.map((i,index) => <li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>)

}



