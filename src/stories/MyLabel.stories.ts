import { Meta, StoryObj } from '@storybook/react';
import { MyLabel } from '../components/MyLabel';

const meta = {
    title: 'Atoms/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'inline-radio'}
    },
    parameters: {
        layout: 'centered',
    }
} satisfies Meta<typeof MyLabel>;


export default meta;
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args:{
        label: 'Basic label',
    }
};

export const AllCaps: Story = {
    args:{
        label: 'AllCaps',
    }
};

export const Secondary: Story = {
    args:{
        label: 'Secondary',
    }
};

export const CustomColors: Story = {
    args:{
        label: 'CustomColor',
    }
};