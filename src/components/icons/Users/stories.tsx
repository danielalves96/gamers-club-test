import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconUsers } from '.';

export default {
  title: `Icons/Users`,
  component: IconUsers,
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
} as ComponentMeta<typeof IconUsers>;

const Template: ComponentStory<typeof IconUsers> = (args) => (
  <IconUsers {...args} />
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
