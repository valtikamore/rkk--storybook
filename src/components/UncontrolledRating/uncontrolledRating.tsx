import React, {useState} from "react";

export type RatingValueType = 0|1|2|3|4|5

type  RatingPropsType = {
    defaultValue?:RatingValueType
    onChange:(value:RatingValueType) => void
}

export function UncontrolledRating(props:RatingPropsType) {
    let [stars,setStars]=useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)
    return (
        <div>
            <Star selected={stars > 0} setStars={()=>{setStars(1); props.onChange(1)}} />
            <Star selected={stars > 1} setStars={()=>{setStars(2); props.onChange(2)}} />
            <Star selected={stars > 2} setStars={()=>{setStars(3); props.onChange(3)}} />
            <Star selected={stars > 3} setStars={()=>{setStars(4); props.onChange(4)}} />
            <Star selected={stars > 4} setStars={()=>{setStars(5); props.onChange(5)}} />
        </div>)
}

type StarPropsType = {
    selected: boolean
    setStars: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={() => props.setStars()}>
        {props.selected ? <b>star</b> : 'star' }
    </span>

}