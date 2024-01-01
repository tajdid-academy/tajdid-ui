import Dialog from './dialog';
import { Button } from '..';
import { EmailIcon } from '@/icons';
import { useArgs } from '@storybook/preview-api';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
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
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    size: 'sm',
    children: 'Dialog',
  },
  render: function Render() {
    const [args] = useArgs();

    return (
      <Dialog.Root size={args.size}>
        <Dialog.Trigger>
          <Button>Open Dialog</Button>
        </Dialog.Trigger>
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
      </Dialog.Root>
    );
  },
};

export const WithHeaderIcon = {
  args: {
    size: 'sm',
    color: 'error',
    children: 'Dialog',
  },
  render: function Render() {
    const [args] = useArgs();

    return (
      <Dialog.Root size={args.size}>
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
      </Dialog.Root>
    );
  },
};
