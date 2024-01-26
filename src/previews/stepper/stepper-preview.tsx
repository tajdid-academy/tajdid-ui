import { Stepper } from '@/components';

const steps = [
  {
    label: 'Course Details',
    content: 'I am one',
    isCompleted: true,
  },
  {
    label: 'Course Curriculum',
    content: 'I am step two',
    isCompleted: true,
  },
  {
    label: 'Other Details',
    content: 'I am step three',
    isCompleted: true,
  },
  {
    label: 'Publish request',
    content: 'I am step four',
    isCompleted: true,
    disabled: true,
  },
];

export default function StepperPreview() {
  return (
    <div>
      <p
        className="mb-2
      "
      >
        Stepper
      </p>
      <Stepper steps={steps} />
    </div>
  );
}
