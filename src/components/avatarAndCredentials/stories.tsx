import { PlayerProps } from '@/utilts/types';
import { Meta, Story } from '@storybook/react';
import { AvatarAndCredentials } from '.';
import { mockPlayerProps } from './mock';

export default {
  title: `Components/AvatarAndCredentials`,
  component: AvatarAndCredentials,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: `1rem`,
          background: `#303356`,
          width: `fit-content`,
          padding: `1rem`,
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<PlayerProps> = (args) => (
  <AvatarAndCredentials {...args} />
);

export const Default = Template.bind({});

Default.args = mockPlayerProps;
