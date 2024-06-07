import { startOfDay } from 'date-fns';
import { useState } from 'react';
import DatePicker from './date-picker';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    defaultValue: {
      control: { type: 'string' },
      defaultValue: '',
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {},
  render: function Render() {
    const [date, setDate] = useState<Date>();
    const currentDate = startOfDay(new Date());

    return (
      <DatePicker
        value={date}
        onChange={setDate}
        disabled={date => date < currentDate}
      />
    );
  },
};
