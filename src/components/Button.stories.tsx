import { Meta, StoryObj} from '@storybook/react';
import { Button, ButtonProps } from "./Button";

export default {
    title: 'Component/Button',
    component: Button,
    args: {
        children: 'Component Button',
    },
    argTypes: {}
    
} as Meta<ButtonProps>

export const Default: StoryObj = {}