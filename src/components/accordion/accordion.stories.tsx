import Accordion from './accordion';
import { Meta } from '@storybook/react';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    defaultValue: {
      //@ts-ignore
      control: { type: 'string' },
      defaultValue: '',
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;

export const Default = {
  args: {},
  render: function Render() {
    return (
      <div className="w-[600px]">
        <Accordion type="single" collapsible>
          <Accordion.Item
            className="py-2 mb-2 border-gray-100 border-b-1"
            value="item-1"
          >
            <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
            <Accordion.Content className="py-4">
              Yes. It adheres to the WAI-ARIA design pattern.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            value="item-2"
            className="py-2 mb-2 border-gray-100 border-b-1"
          >
            <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
            <Accordion.Content>
              Yes. It adheres to the WAI-ARIA design pattern.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  },
};
