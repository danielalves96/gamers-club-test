import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconPin } from '.';

export default {
  title: `Icons/Pin`,
  component: IconPin,
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
} as ComponentMeta<typeof IconPin>;

const Template: ComponentStory<typeof IconPin> = (args) => (
  <IconPin {...args} />
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
