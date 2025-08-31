import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Select from './select';

const roles = {
  superAdmin: 'SUPER_ADMIN',
  admin: 'ADMIN',
  learner: 'LEARNER',
  instructor: 'INSTRUCTOR',
  supportInstructor: 'SUPPORT_INSTRUCTOR',
  moderator: 'MODERATOR',
  batchCoordinator: 'BATCH_COORDINATOR',
};

const roleOptions = [
  { label: 'Super Admin', value: roles.superAdmin },
  { label: 'Admin', value: roles.admin },
  { label: 'Learner', value: roles.learner },
  { label: 'Instructor', value: roles.instructor },
  { label: 'Support Instructor', value: roles.supportInstructor },
  { label: 'Moderator', value: roles.moderator },
  { label: 'Batch Coordinator', value: roles.batchCoordinator },
];

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof meta>;
export default meta;

const SelectWrapper = args => {
  const [value, setValue] = useState<string>(args.value);

  return (
    <Select
      {...args}
      className="w-[300px] p-4"
      value={value}
      onChange={(val: string) => {
        setValue(val);
        args.onChange?.(val);
      }}
    />
  );
};

export const Default: Story = {
  args: {
    label: 'Role',
    placeholder: 'Select...',
    error: '',
    disabled: false,
    value: '',
    onChange: (value: string) => console.log(value),
    options: roleOptions,
  },
  render: args => <SelectWrapper {...args} />,
};
