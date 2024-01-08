import { Meta, StoryObj } from '@storybook/react';
import Search from './search';
import { useState } from 'react';
import { useArgs } from '@storybook/preview-api';

const meta = {
  title: 'Components/Search',
  component: Search,
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
    value: {
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
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Search>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    label: 'Search phone/email/name',
    placeholder: 'Search...',
    error: '',
    disabled: false,
    value: '',
  },
  render: function Render() {
    const [args] = useArgs();
    const [value, setValue] = useState<string>(args.value);

    return (
      <Search
        value={value}
        error={args.error}
        disabled={args.disabled}
        onChange={e => {
          setValue(e.target.value);
        }}
        label={args.label}
        onClick={() => {
          alert(value);
        }}
      />
    );
  },
};
