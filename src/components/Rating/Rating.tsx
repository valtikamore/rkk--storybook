import React from "react";



export type RatingValueType = 0|1|2|3|4|5

type RatingPropsType = {
    value:RatingValueType
    clickOnStar:(value:RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    return (<div>
        <Star selected={props.value > 0} clickOnStar={props.clickOnStar} value={1}/>
        <Star selected={props.value > 1} clickOnStar={props.clickOnStar} value={2}/>
        <Star selected={props.value > 2} clickOnStar={props.clickOnStar} value={3}/>
        <Star selected={props.value > 3} clickOnStar={props.clickOnStar} value={4}/>
        <Star selected={props.value > 4} clickOnStar={props.clickOnStar} value={5}/>

    </div>)
}

type StarPropsType = {
    selected: boolean
    clickOnStar:(value:RatingValueType) => void
    value:RatingValueType
}

function Star(props: StarPropsType) {
    return <span onClick={() => {props.clickOnStar(props.value)}}>
        {props.selected ? <b>star</b> : 'star'}
    </span>
}