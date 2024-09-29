import Avatar from './avatar';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    src: {
      control: 'text',
      defaultValue:
        'https://img.freepik.com/free-photo/3d-illustration-business-man-with-glasses-grey-background-clipping-path_1142-58140.jpg',
    },
    alt: { control: 'text', defaultValue: 'Avatar' },
    elevation: { control: { type: 'radio' }, options: [0, 1], defaultValue: 0 },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'sm',
    },
    border: { control: { type: 'radio' }, options: [0, 1, 2], defaultValue: 0 },
  },
};

type AvatarStory = StoryObj<typeof meta>;

export default meta;

export const Small: AvatarStory = {
  args: {
    src: 'https://img.freepik.com/free-photo/3d-illustration-business-man-with-glasses-grey-background-clipping-path_1142-58140.jpg',
    alt: 'Small Avatar',
    size: 'sm',
    elevation: 0,
    border: 0,
  },
};

export const Medium: AvatarStory = {
  args: {
    src: 'https://img.freepik.com/free-photo/3d-illustration-business-man-with-glasses-grey-background-clipping-path_1142-58140.jpg',
    alt: 'Medium Avatar',
    size: 'md',
    elevation: 1,
    border: 1,
  },
};

export const Large: AvatarStory = {
  args: {
    src: 'https://img.freepik.com/free-photo/3d-illustration-business-man-with-glasses-grey-background-clipping-path_1142-58140.jpg',
    alt: 'Large Avatar',
    size: 'lg',
    elevation: 0,
    border: 2,
  },
};
