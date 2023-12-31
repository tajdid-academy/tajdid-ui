import { Meta, StoryObj } from '@storybook/react';
import Button from './button';
// import { XCloseIcon } from '../../../icons';

const meta = {
  title: 'Components/Button',
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
      options: ['contained', 'outlined', 'ghost', 'link', 'icon'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'gray', 'warning', 'error'],
      control: { type: 'radio' },
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    fullWidth: {
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
    variant: 'contained',
    color: 'primary',
    children: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    children: 'Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    color: 'primary',
    children: 'Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    color: 'primary',
    children: 'Button',
  },
};

// export const Icon: Story = {
//   args: {
//     variant: 'icon',
//     color: 'primary',
//     children: <XCloseIcon />,
//   },
// };
