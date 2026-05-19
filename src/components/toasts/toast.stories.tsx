import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/button';
import { ToastProvider, useToast } from './toast-context';

function ToastStoryContent() {
  const { showToast } = useToast();

  return (
    <div className="grid gap-2">
      <p className="mb-2">Toast</p>
      <div className="flex gap-2">
        <Button
          onClick={() =>
            showToast({
              variant: 'success',
              title: 'Saved successfully',
              description: 'Your changes have been saved.',
            })
          }
        >
          Success toast
        </Button>
        <Button
          color="gray"
          onClick={() =>
            showToast({
              variant: 'warning',
              title: 'Unsaved changes',
              description: 'You have unsaved changes. Save before leaving.',
            })
          }
        >
          Warning toast
        </Button>
        <Button
          color="error"
          onClick={() =>
            showToast({
              variant: 'error',
              title: 'Something went wrong',
              description: 'Please try again.',
            })
          }
        >
          Error toast
        </Button>
      </div>
    </div>
  );
}

const meta = {
  title: 'Components/Toast',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

type Story = StoryObj<typeof meta>;

export default meta;

export const Playground: Story = {
  render: () => (
    <ToastProvider>
      <ToastStoryContent />
    </ToastProvider>
  ),
};
