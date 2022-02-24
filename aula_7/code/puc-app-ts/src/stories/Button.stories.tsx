import { Meta, Story } from '@storybook/react';
import Button from '../components/Button';

const meta: Meta = {
    title: "Button",
    component: Button,
    argTypes: {handleClick:  {action: "handleClick"}}
}

export default meta;

const Template: Story<{
    label: string,
    backgroundColor?: string,
    size?: 'sm' | 'md' | 'lg',
    handleClick?: () => {},
}> = (args) => <Button {...args}/>

export const Main = Template.bind({});

Main.args = {
    label:'Default Button',
    size: 'md'
}

export const Small = Template.bind({})
Small.args = {
    size: 'sm',
    label: 'Small Button'
}

export const Large = Template.bind({})
Large.args = {
    size: 'lg',
    label: 'Large Button'
}