import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconMissions } from '.';

export default {
  title: `Icons/Missions`,
  component: IconMissions,
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
} as ComponentMeta<typeof IconMissions>;

const Template: ComponentStory<typeof IconMissions> = (args) => (
  <IconMissions {...args} />
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
