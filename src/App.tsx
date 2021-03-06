import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/accordion/Acordion";
import { OnOff } from './components/onOff/onOff';
import { UncontrolledOnOff } from './components/UncontrolledOnOff/uncontrolledOnOff';
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from './components/UncontrolledRating/uncontrolledRating';


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on,setOn] = useState<boolean>(false)
    return (
        <div className={'App'}>
            <Rating value={ratingValue} clickOnStar={setRatingValue}/>
            {/*<Accordion onClick={} items={}*/}
            {/*    titleValue={'Accordion title 1 '}*/}
            {/*    collapsed={accordionCollapsed}*/}
            {/*    onChange={() => {*/}
            {/*        setAccordionCollapsed(!accordionCollapsed)*/}
            {/*    }}/>*/}
            <OnOff
                on={on}
                onChange={setOn}/>
            {/*<UncontrolledOnOff /> {on.toString()}*/}
            <UncontrolledAccordion titleValue={'bla'}/>
            {/*<UncontrolledRating />*/}

        </div>
    )
}


export default App;
