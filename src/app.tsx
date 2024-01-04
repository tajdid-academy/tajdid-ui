import './styles/app.css';
import { Select } from './components/select';
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

export default function App() {
  const [value, setValue] = useState<string>('LEARNER');

  return (
    <div className="container">
      <h1 className="py-4 text-center text-md">
        Use this to run a local development environment of the library for
        testing.
      </h1>
      <div id="playground">
        {/* Play inside this div */}
        <Select
          value={value}
          onChange={e => {
            console.log(e);
            setValue(e);
          }}
          label="Role"
          options={roleOptions}
        />
      </div>
    </div>
  );
}
