import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./uncontrolledOnOff";



export default {
    title: 'UncontrolledOnOff ',
    component: UncontrolledOnOff,
}
const callback = action('on or off clicked')


export const MadeChanging = () => {
    return <UncontrolledOnOff />
}

