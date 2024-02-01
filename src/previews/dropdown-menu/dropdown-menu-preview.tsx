import { DropdownMenu } from '@/components';

export default function DropdownMenuPreview() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>My Account</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Item
          onSelect={() => {
            console.log('Profile selected');
          }}
        >
          Profile
        </DropdownMenu.Item>
        <DropdownMenu.Item>Billing</DropdownMenu.Item>
        <DropdownMenu.Item>Team</DropdownMenu.Item>
        <DropdownMenu.Item>Subscription</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
