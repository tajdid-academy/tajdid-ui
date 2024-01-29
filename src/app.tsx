import { Tooltip } from '.';
import InfoCircleIcon from './icons/info-circle-icon';
import './styles/app.css';

export default function App() {
  return (
    <div className="container min-h-screen bg-gray-100">
      <h1 className="py-4 text-center text-md">
        Use this to run a local development environment of the library for
        testing.
      </h1>
      <div
        id="playground"
        className="flex items-center justify-center min-h-screen gap-6"
      >
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button className="unset" type="button">
              <InfoCircleIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
            </button>
          </Tooltip.Trigger>
          <div>
            <Tooltip.Content>
              Module includes a structured sequence of lessons, quizzes allowing
              to create a systematic learning experience for course.
            </Tooltip.Content>
          </div>
        </Tooltip.Root>
      </div>
    </div>
  );
}
