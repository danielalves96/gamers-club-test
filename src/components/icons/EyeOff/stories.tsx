import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconEyeOff } from '.';

export default {
  title: `Icons/EyeOff`,
  component: IconEyeOff,
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
} as ComponentMeta<typeof IconEyeOff>;

const Template: ComponentStory<typeof IconEyeOff> = (args) => (
  <IconEyeOff {...args} />
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
