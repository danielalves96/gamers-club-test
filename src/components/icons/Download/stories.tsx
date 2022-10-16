import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconDownload } from '.';

export default {
  title: `Icons/Download`,
  component: IconDownload,
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
} as ComponentMeta<typeof IconDownload>;

const Template: ComponentStory<typeof IconDownload> = (args) => (
  <IconDownload {...args} />
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
