import { Button, Dialog } from './components';
import './styles/app.css';
import { EmailIcon } from '@/icons';

export default function App() {
  return (
    <div className="container">
      <h1 className="py-4 text-center text-md">
        Use this to run a local development environment of the library for
        testing.
      </h1>
      <div id="playground">
        {/* Play inside this div */}

        <Dialog.Root>
          <Dialog.Trigger>
            <Button>Open</Button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Icon>
              <EmailIcon className="text-error-600" />
            </Dialog.Icon>
            <Dialog.Title>Logout</Dialog.Title>
            <Dialog.Subtitle>Are you sure you want to logout?</Dialog.Subtitle>

            <Dialog.CloseButton />
            <Dialog.Action>
              <Dialog.Close asChild>
                <Button fullWidth variant="outlined" color="gray">
                  No
                </Button>
              </Dialog.Close>
              <Button
                variant="contained"
                fullWidth
                color="error"
                onClick={() => {
                  console.log('Yes');
                }}
              >
                Yes
              </Button>
            </Dialog.Action>
          </Dialog.Content>
        </Dialog.Root>
      </div>
    </div>
  );
}
