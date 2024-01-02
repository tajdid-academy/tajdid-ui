import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Label',
    },
    color: {
      options: ['primary', 'gray'],
      control: { type: 'radio' },
      defaultValue: 'gray',
    },
    checked: {
      control: 'boolean',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    label: 'Please accept the terms and conditions',
  },
};
