import { Input, Select } from '.';
import './styles/app.css';

export const categoryOptions = [
  { value: 'QURAN', label: 'Quran' },
  { value: 'HADITH', label: 'Hadith' },
];
export default function App() {
  return (
    <div className="container min-h-screen bg-gray-100">
      <h1 className="py-4 text-center text-md">
        Use this to run a local development environment of the library for
        testing.
      </h1>
      <div id="playground" className="flex gap-6">
        <Select className="w-full" options={categoryOptions} label="Select" />
        <Input placeholder="place" label="Input" />
      </div>
    </div>
  );
}
