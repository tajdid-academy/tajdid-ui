import { Meta, StoryObj } from '@storybook/react';
import { CircularProgress } from '.';

const meta = {
  title: 'Components/CircularProgress',
  component: CircularProgress,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    percentage: {
      control: 'range',
      min: 0,
      max: 100,
      defaultValue: 40,
    },
    size: {
      control: 'number',
      defaultValue: 100,
    },
    fontSize: {
      control: 'number',
      defaultValue: 100,
    },
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof CircularProgress>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    percentage: 40,
  },
};
