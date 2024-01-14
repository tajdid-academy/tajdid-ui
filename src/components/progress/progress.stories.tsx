import { Meta, StoryObj } from '@storybook/react';
import { Progress } from './';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    // range control
    value: {
      control: 'range',
      min: 0,
      max: 100,
      defaultValue: 40,
    },
  },
} satisfies Meta<typeof Progress>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    value: 40,
  },
};
