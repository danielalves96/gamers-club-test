import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCog } from '.';

export default {
  title: `Icons/Cog`,
  component: IconCog,
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
} as ComponentMeta<typeof IconCog>;

const Template: ComponentStory<typeof IconCog> = (args) => (
  <IconCog {...args} />
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
