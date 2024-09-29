import type { Meta } from '@storybook/react';

import Avatar, { avatarVariants } from './avatar';

const meta = {
  component: avatarVariants,
} satisfies Meta<typeof avatarVariants>;

export default meta;

export const Default = {
  args: {},
  render: function Render() {
    return (
      <div className="flex space-x-4">
        <Avatar
          src="https://img.freepik.com/free-photo/3d-illustration-business-man-with-glasses-grey-background-clipping-path_1142-58140.jpg?t=st=1727603124~exp=1727606724~hmac=b0cbb06f2478fe73e0d617d8249428db02d1de37e21155e00463b683dd229144&w=740"
          alt="Small Avatar"
          size="sm"
          elevation={0}
          border={0}
        />
        <Avatar
          src="https://img.freepik.com/free-photo/3d-illustration-business-man-with-glasses-grey-background-clipping-path_1142-58140.jpg?t=st=1727603124~exp=1727606724~hmac=b0cbb06f2478fe73e0d617d8249428db02d1de37e21155e00463b683dd229144&w=740"
          alt="Medium Avatar"
          size="md"
          elevation={1}
          border={1}
        />
        <Avatar
          src="https://img.freepik.com/free-photo/3d-illustration-business-man-with-glasses-grey-background-clipping-path_1142-58140.jpg?t=st=1727603124~exp=1727606724~hmac=b0cbb06f2478fe73e0d617d8249428db02d1de37e21155e00463b683dd229144&w=740"
          alt="Large Avatar"
          size="lg"
          elevation={0}
          border={2}
        />
      </div>
    );
  },
};
