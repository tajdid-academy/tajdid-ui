import { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: 'text', defaultValue: 'Button' },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['default', 'outlined', 'ghost'],
      control: { type: 'radio' },
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    isLoading: { control: 'boolean', defaultValue: false },
    loadingText: { control: 'text' },
    icon: { control: 'object' },
    iconPosition: {
      options: ['start', 'end'],
      control: { type: 'radio' },
    },
    className: { control: 'text' },
    type: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Contained: Story = {
  args: {
    variant: 'error',
    children: 'Button',
  },
};
