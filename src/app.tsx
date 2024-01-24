import { Stepper } from '.';
import './styles/app.css';

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

export default function App() {
  return (
    <div className="container min-h-screen bg-gray-100">
      <h1 className="py-4 text-center text-md">
        Use this to run a local development environment of the library for
        testing.
      </h1>
      <div id="playground" className="flex gap-6">
        <Stepper steps={steps} />
      </div>
    </div>
  );
}
