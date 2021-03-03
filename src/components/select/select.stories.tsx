import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Select} from "./select";


export default {
    title: 'Select ',
    component: Select,
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')


export const WithValue = () => {
    const [value, setValue] = useState('2')
    return <>
        <Select
            onChange={setValue}
            value={value}
            items={[
            {title: 'Valentine', value: '1'},
            {title: 'Natasha', value: '2'},
            {title: 'Sveta', value: '3'},
        ]}  />
    </>
}


export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <>
            <Select value={value}
                    onChange={setValue}
                    items={[
                {title: 'Valentine', value: '1'},
                {title: 'Natasha', value: '2'},
                {title: 'Sveta', value: '3'},
            ]} />
        </>

}


