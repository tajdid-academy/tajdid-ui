import { Meta, StoryObj } from '@storybook/react';
import { Input as InputComponent } from './index';

const meta = {
  title: 'Components/Input',
  component: InputComponent,
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
} satisfies Meta<typeof InputComponent>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    type: 'text',
  },
};
