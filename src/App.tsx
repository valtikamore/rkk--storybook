import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on,setOn] = useState<boolean>(false)
    return (
        <div className={'App'}>
            {/*<Rating value={ratingValue} clickOnStar={setRatingValue}/>*/}
            {/*<Accordion*/}
            {/*    titleValue={'Accordion title 1 '}*/}
            {/*    collapsed={accordionCollapsed}*/}
            {/*    onChange={() => {*/}
            {/*        setAccordionCollapsed(!accordionCollapsed)*/}
            {/*    }}/>*/}
            {/*<OnOff*/}
            {/*    on={on}*/}
            {/*    onChange={setOn}/>*/}
            {/*<UncontrolledOnOff /> {on.toString()}*/}
            {/*<UncontrolledAccordion titleValue={'bla'}/>*/}
            {/*<UncontrolledRating />*/}

        </div>
    )
}


export default App;
