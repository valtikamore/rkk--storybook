import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from './Acordion'
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react/types-6-0";



export default {
    title: 'Accordion ',
    component: Accordion,
}

const callback = action('accordion mode change event fired')

const Template:Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const MenuCollapsedMode2 = Template.bind({})
MenuCollapsedMode2.args = {
    titleValue:'Menu',
    collapsed:true,
    onChange:callback,
}
export const UsersUnCollapsedMode2 = Template.bind({})
UsersUnCollapsedMode2.args = {
    titleValue:'Users',
    collapsed:false,
    onChange:callback,
}

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback}/>
export const UsersUnCollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callback}/>
export const ModeChanging = () => {
    const [value,setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)}/>
}

