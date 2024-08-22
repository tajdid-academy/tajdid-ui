import { ButtonPreview, DropdownMenuPreview, StepperPreview } from './previews';
import CheckPreview from './previews/checkbox/checkbox-preview';
import DatePickerPreview from './previews/date-picker/date-picker-preview';
import InputPreview from './previews/input/input-preview';
import MultiSelectPreview from './previews/multi-select/multi-select-preview';
import RadioPreview from './previews/radio/radio-preview';
import SelectPreview from './previews/select/select';
import TagBuilderPreview from './previews/tag-builder/tag-builder-preview';
import './styles/app.css';

export default function App() {
  return (
    <div className="container min-h-screen">
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
          <div>
            <DropdownMenuPreview />
          </div>
          <div>
            <InputPreview />
          </div>
          <div>
            <SelectPreview />
          </div>
          <div className="flex gap-8">
            <RadioPreview />
            <CheckPreview />
          </div>
          <div>
            <DatePickerPreview />
          </div>
          <div>
            <MultiSelectPreview />
          </div>
          <div>
            <TagBuilderPreview />
          </div>
        </div>
      </div>
    </div>
  );
}
