import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrowRight } from '.';

export default {
  title: `Icons/ArrowRight`,
  component: IconArrowRight,
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
} as ComponentMeta<typeof IconArrowRight>;

const Template: ComponentStory<typeof IconArrowRight> = (args) => (
  <IconArrowRight {...args} />
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
