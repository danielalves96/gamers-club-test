import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconUserPlus } from '.';

export default {
  title: `Icons/UserPlus`,
  component: IconUserPlus,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: `1rem`,
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof IconUserPlus>;

const Template: ComponentStory<typeof IconUserPlus> = (args) => (
  <IconUserPlus {...args} />
);

export const Blue = Template.bind({});
Blue.args = {
  size: 32,
  color: `#2196FD`,
};

export const Dark = Template.bind({});
Dark.args = {
  size: 32,
  color: `#333`,
};
