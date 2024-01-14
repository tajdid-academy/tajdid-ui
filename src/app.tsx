import './styles/app.css';
import { Progress } from '.';

export default function App() {
  return (
    <div className="container">
      <h1 className="py-4 text-center text-md">
        Use this to run a local development environment of the library for
        testing.
      </h1>
      <div id="playground">
        <Progress className="" value={40} />
      </div>
    </div>
  );
}
