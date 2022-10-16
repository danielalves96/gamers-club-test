import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconDoor } from '.';

export default {
  title: `Icons/Door`,
  component: IconDoor,
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
} as ComponentMeta<typeof IconDoor>;

const Template: ComponentStory<typeof IconDoor> = (args) => (
  <IconDoor {...args} />
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
