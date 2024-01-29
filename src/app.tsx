import ButtonPreview from './previews/button/button-preview';
import StepperPreview from './previews/stepper/stepper-preview';
import './styles/app.css';

export default function App() {
  return (
    <div className="container min-h-screen bg-gray-100">
      <h1 className="py-4 text-center text-md">
        Use this to run a local development environment of the library for
        testing.
      </h1>
      <div id="playground" className="flex gap-6">
        <div className="grid gap-6">
          <div>
            <ButtonPreview />
          </div>
          <div>
            <StepperPreview />
          </div>
        </div>
      </div>
    </div>
  );
}
