import { Select } from '@/components';
import { useState } from 'react';

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

export default function SelectPreview() {
  const [value, setValue] = useState<string>();

  return (
    <Select
      value={value}
      onChange={e => {
        console.log(e);
        setValue(e);
      }}
      placeholder="Select Role"
      label="Role"
      options={roleOptions}
    />
  );
}
