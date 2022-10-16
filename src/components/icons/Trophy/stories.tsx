import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconTrophy } from '.';

export default {
  title: `Icons/Trophy`,
  component: IconTrophy,
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
} as ComponentMeta<typeof IconTrophy>;

const Template: ComponentStory<typeof IconTrophy> = (args) => (
  <IconTrophy {...args} />
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
