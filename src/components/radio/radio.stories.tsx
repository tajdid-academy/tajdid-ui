import { Meta } from '@storybook/react';
import Radio from './radio';
import { useState } from 'react';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      defaultValue: '1',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;

export const Default = {
  args: {},
  render: function Render() {
    const [value, setValue] = useState('1');

    return (
      <Radio
        options={[
          {
            label: 'One',
            value: '1',
          },
          {
            label: 'Two',
            value: '2',
          },
        ]}
        value={value}
        onChange={setValue}
      />
    );
  },
};
