import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from './Acordion'
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react/types-6-0";



export default {
    title: 'Accordion ',
    component: Accordion,
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')



export const MenuCollapsedMode = () => <Accordion
    titleValue={'Menu'}
    collapsed={true}
    onChange={callback}
    items={[]}
    onClick={onClickCallback}
/>
export const UsersUnCollapsedMode = () => <Accordion
    titleValue={'Users'}
    collapsed={false}
    onChange={callback}
    items={[{title:'Valentine',value:1},{title:'Natasha',value:2},{title:'Misha',value:3},]}
    onClick={onClickCallback}/>
export const ModeChanging = () => {
    const [value,setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      items={
                          [
                              {title:'Valentine',value:1},
                              {title:'Natasha',value:2},
                              {title:'Misha',value:3},
                          ]
                      }
                      onClick={id => alert(`user with id ${id}`)}/>
}

