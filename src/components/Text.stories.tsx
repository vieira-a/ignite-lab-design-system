import { Meta, StoryObj} from '@storybook/react';
import { Text, TextProps } from "./Text";

export default {
    title: 'Component/Text',
    component: Text,
    args: {
        children: 'Component Text',
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
    
} as Meta<TextProps>

export const Default: StoryObj = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Test custom component Text</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
}