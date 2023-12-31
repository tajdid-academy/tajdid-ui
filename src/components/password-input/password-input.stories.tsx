import { Meta, StoryObj } from '@storybook/react';
import PasswordInput from './password-input';

const meta = {
  title: 'Components/Input',
  component: PasswordInput,
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
    placeholder: {
      control: 'text',
      defaultValue: 'Placeholder',
    },
    error: {
      control: 'text',
      defaultValue: '',
    },
    warning: {
      control: 'text',
      defaultValue: '',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof PasswordInput>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Password: Story = {
  args: {},
};
