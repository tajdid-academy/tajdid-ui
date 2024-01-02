import { Checkbox } from '@/components';
import './styles/app.css';
import { useState } from 'react';
import MinusIcon from './icons/minus-icon';

export default function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="container">
      <h1 className="py-4 text-center text-md">
        Use this to run a local development environment of the library for
        testing.
      </h1>
      <div id="playground">
        {/* Play inside this div */}
        <Checkbox
          checked={checked}
          color={checked ? 'primary' : 'gray'}
          icon={<MinusIcon />}
          onChange={value => {
            setChecked(value);
          }}
        />
      </div>
    </div>
  );
}
