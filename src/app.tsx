import { Stepper } from '.';
import { Step } from './components/stepper/stepper';
import './styles/app.css';

function Content() {
  return (
    <div>
      <p className="mb-5 text-mauve11 text-[15px] leading-normal">
        Change your password here. After saving, youll be logged out.
      </p>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label
          className="text-[13px] leading-none mb-2.5 text-violet12 block"
          htmlFor="currentPassword"
        >
          Current password
        </label>
        <input
          className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="currentPassword"
          type="password"
        />
      </fieldset>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label
          className="text-[13px] leading-none mb-2.5 text-violet12 block"
          htmlFor="newPassword"
        >
          New password
        </label>
        <input
          className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="newPassword"
          type="password"
        />
      </fieldset>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label
          className="text-[13px] leading-none mb-2.5 text-violet12 block"
          htmlFor="confirmPassword"
        >
          Confirm password
        </label>
        <input
          className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="confirmPassword"
          type="password"
        />
      </fieldset>
      <div className="flex justify-end mt-5">
        <button className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
          Change password
        </button>
      </div>
    </div>
  );
}

const steps: Step[] = [
  {
    label: 'Course Details',
    content: 'I am step one',
    isCompleted: true,
  },
  {
    label: 'Course Curriculum',
    content: <Content />,
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
    disabled: true,
  },
];

export default function App() {
  return (
    <div className="container">
      <h1 className="py-4 text-center text-md">
        Use this to run a local development environment of the library for
        testing.
      </h1>
      <div id="playground">
        <Stepper steps={steps} />
      </div>
    </div>
  );
}
