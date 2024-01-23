import Badge from './badge';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text', defaultValue: 'Badge' },
    variant: {
      options: ['contained', 'outlined'],
      control: { type: 'radio' },
    },
    color: {
      options: [
        'moss',
        'blueLight',
        'purple',
        'indigo',
        'fuchsia',
        'orange',
        'blue',
        'success',
        'gray',
        'warning',
      ],
      control: { type: 'radio' },
    },
    className: { control: 'text' },
  },
};

type BadgeStory = StoryObj<typeof meta>;

export default meta;

export const Contained: BadgeStory = {
  args: {
    variant: 'contained',
    color: 'moss',
    children: 'Badge',
  },
};

export const Outlined: BadgeStory = {
  args: {
    variant: 'outlined',
    color: 'success',
    children: 'Badge',
  },
};
