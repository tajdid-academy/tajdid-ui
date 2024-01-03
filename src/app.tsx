import { TextArea } from '@/components';
import './styles/app.css';

export default function App() {
  return (
    <div className="container">
      <h1 className="py-4 text-center text-md">
        Use this to run a local development environment of the library for
        testing.
      </h1>
      <div id="playground">
        {/* Play inside this div */}
        <TextArea placeholder="Enter a description..."></TextArea>
      </div>
    </div>
  );
}
