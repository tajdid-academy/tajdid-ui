import './styles/app.css';
import { useState } from 'react';
import Search from './components/search/search';

export default function App() {
  const [value, setValue] = useState<string>('');

  return (
    <div className="container">
      <h1 className="py-4 text-center text-md">
        Use this to run a local development environment of the library for
        testing.
      </h1>
      <div id="playground">
        <Search
          value={value}
          onChange={e => setValue(e.target.value)}
          onClick={() => {
            console.log('clicked:', value);
          }}
        />
      </div>
    </div>
  );
}
