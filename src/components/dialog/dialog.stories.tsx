import { EmailIcon } from '@/icons';
import { useState } from 'react';
import { Button } from '..';
import Dialog from './dialog';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    open: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    defaultOpen: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    onOpenChange: {
      action: 'onOpenChange',
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
      defaultValue: 'sm',
    },
    color: {
      options: ['error'],
      control: { type: 'radio' },
      defaultValue: 'error',
    },
  },
  tags: ['autodocs'],
};

type DialogArgs = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  size?: 'sm' | 'md';
  color?: 'error';
};

export default meta;

export const Default = {
  args: {
    size: 'sm',
    open: false,
  },
  render: function Render(args: DialogArgs) {
    const [open, setOpen] = useState(args.open);

    return (
      <Dialog onOpenChange={setOpen} open={open} size={args.size}>
        <Button className="p-4" onClick={() => setOpen(true)}>
          Open Dialog
        </Button>

        <Dialog.Main>
          <Dialog.Title>Logout</Dialog.Title>
          <Dialog.Subtitle>Are you sure you want to logout?</Dialog.Subtitle>
          <Dialog.Divider className="mt-6" />
          <Dialog.Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              consectetur facere voluptatum sit at, iure eum corrupti, quia
              libero, consequatur cum magnam! Delectus sunt eius dignissimos at
              eaque rem numquam.
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
      </Dialog>
    );
  },
};

export const WithHeaderIcon = {
  args: {
    size: 'sm',
    color: 'error',
  },
  render: function Render(args: DialogArgs) {
    return (
      <Dialog size={args.size}>
        <Dialog.Trigger>
          <Button>Open Dialog</Button>
        </Dialog.Trigger>
        <Dialog.Main>
          <Dialog.Icon color={args.color}>
            <EmailIcon />
          </Dialog.Icon>
          <Dialog.Title>Logout</Dialog.Title>
          <Dialog.Subtitle>Are you sure you want to logout?</Dialog.Subtitle>
          <Dialog.Divider className="mt-6" />
          <Dialog.Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              consectetur facere voluptatum sit at, iure eum corrupti, quia
              libero, consequatur cum magnam! Delectus sunt eius dignissimos at
              eaque rem numquam.
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
      </Dialog>
    );
  },
};
