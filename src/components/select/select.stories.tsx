import { Meta, StoryObj } from '@storybook/react';
import Select from './select';
import { useState } from 'react';
import { useArgs } from '@storybook/preview-api';

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
  {
    label: 'Super Admin',
    value: roles.superAdmin,
  },
  {
    label: 'Admin',
    value: roles.admin,
  },
  {
    label: 'Learner',
    value: roles.learner,
  },
  {
    label: 'Instructor',
    value: roles.instructor,
  },
  {
    label: 'Support Instructor',
    value: roles.supportInstructor,
  },
  {
    label: 'Moderator',
    value: roles.moderator,
  },
  {
    label: 'Batch Coordinator',
    value: roles.batchCoordinator,
  },
];

const meta = {
  title: 'Components/Select',
  component: Select,
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
    fullWidth: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof meta>;

export default meta;

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
  render: function Render() {
    const [args] = useArgs();
    const [value, setValue] = useState<string>(args.value);

    return (
      <Select
        value={value}
        error={args.error}
        disabled={args.disabled}
        fullWidth={args.fullWidth}
        onChange={e => {
          setValue(e);
        }}
        label={args.label}
        options={args.options}
      />
    );
  },
};
