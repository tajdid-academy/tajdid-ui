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
          <Dialog.Main>
            <Dialog.Icon color="error">
              <EmailIcon />
            </Dialog.Icon>
            <Dialog.Title>Logout</Dialog.Title>
            <Dialog.Subtitle>Are you sure you want to logout?</Dialog.Subtitle>
            <Dialog.Divider className="mt-6" />
            <Dialog.Content>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                consectetur facere voluptatum sit at, iure eum corrupti, quia
                libero, consequatur cum magnam! Delectus sunt eius dignissimos
                at eaque rem numquam.
              </p>
            </Dialog.Content>
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
          </Dialog.Main>
        </Dialog.Root>
      </div>
    </div>
  );
}
