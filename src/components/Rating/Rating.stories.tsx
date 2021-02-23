import React, {useState} from 'react';

import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating,
}

export const EmptyRating = () => <Rating value={0} clickOnStar={x=>x}/>
export const Rating1 = () => <Rating value={1} clickOnStar={x=>x}/>
export const Rating2 = () => <Rating value={2} clickOnStar={x=>x}/>
export const Rating3 = () => <Rating value={3} clickOnStar={x=>x}/>
export const Rating4 = () => <Rating value={4} clickOnStar={x=>x}/>
export const Rating5 = () => <Rating value={5} clickOnStar={x=>x}/>
export const RatingChanging = () => {
    const [rating,setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} clickOnStar={setRating}/>
}

