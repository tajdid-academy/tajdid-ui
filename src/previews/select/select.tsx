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

const categories = [
  {
    id: 34,
    name: 'রমাদান',
    slug: 'রমাদান',
  },
  {
    id: 33,
    name: 'Dawah course',
    slug: 'dawah-course',
  },
  {
    id: 32,
    name: 'Hadith-100',
    slug: 'hadith-100',
  },
  {
    id: 31,
    name: 'Takhassus fid Dawah',
    slug: 'takhassus-fid-dawah',
  },
  {
    id: 30,
    name: 'Hadith-test',
    slug: 'hadith-test',
  },
  {
    id: 29,
    name: 'New dawah live course',
    slug: 'new-dawah-live-course-01',
  },
  {
    id: 28,
    name: 'New dawah live course',
    slug: 'new-dawah-live-course',
  },
  {
    id: 27,
    name: 'new dawah course 2024',
    slug: 'new-dawah-course-2024-01',
  },
  {
    id: 26,
    name: 'new dawah course 2024',
    slug: 'new-dawah-course-2024',
  },
  {
    id: 25,
    name: 'Complete Salat Course',
    slug: 'complete-salat-course4',
  },
  {
    id: 24,
    name: 'New category',
    slug: 'new-category',
  },
  {
    id: 23,
    name: 'Complete Salat Course',
    slug: 'complete-salat-course23',
  },
  {
    id: 22,
    name: 'Complete Salat Course',
    slug: 'complete-salat-course2',
  },
  {
    id: 21,
    name: 'Complete Salat Course',
    slug: 'complete-salat-course',
  },
  {
    id: 20,
    name: 'Comparatives Dawah',
    slug: 'comparatives-dawah',
  },
  {
    id: 19,
    name: 'Dawah',
    slug: 'dawah-2024',
  },
  {
    id: 18,
    name: 'Islamic3',
    slug: 'islamic3',
  },
  {
    id: 17,
    name: 'Zakat',
    slug: 'zakat',
  },
  {
    id: 16,
    name: 'Hajj',
    slug: 'hajj',
  },
  {
    id: 15,
    name: 'Salat',
    slug: 'salat',
  },
  {
    id: 14,
    name: 'Math',
    slug: 'math',
  },
  {
    id: 13,
    name: 'Hello',
    slug: 'hello',
  },
  {
    id: 12,
    name: 'Test',
    slug: 'test',
  },
  {
    id: 11,
    name: 'Islamic Education',
    slug: 'islamic-education',
  },
  {
    id: 10,
    name: 'Tech',
    slug: 'tech',
  },
  {
    id: 9,
    name: 'Quran',
    slug: 'quran',
  },
  {
    id: 8,
    name: 'sm',
    slug: 'sm',
  },
  {
    id: 7,
    name: 'course',
    slug: 'hadith3',
  },
  {
    id: 6,
    name: 'Hadith',
    slug: 'hadith2',
  },
  {
    id: 5,
    name: 'Islamic',
    slug: 'islamic',
  },
  {
    id: 4,
    name: 'Prophet',
    slug: 'prophet',
  },
  {
    id: 3,
    name: 'Hadith',
    slug: 'hadith',
  },
  {
    id: 2,
    name: 'Islam',
    slug: 'sadafd',
  },
  {
    id: 1,
    name: 'কুরআন',
    slug: 'কুরআন',
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
      options={categories.map(item => ({
        label: item.name,
        value: item.id.toString(),
      }))}
    />
  );
}
