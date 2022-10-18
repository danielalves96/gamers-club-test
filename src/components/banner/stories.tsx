import { PlayerDataResponse } from '@/utilts/types';
import { Meta, Story } from '@storybook/react';
import BannerHeader from '.';
import { mockBannerHeader } from './mock';

export default {
  title: `Components/BannerHeader`,
  component: BannerHeader,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: `1rem`,
          width: `372px`,
          padding: `1rem`,
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<PlayerDataResponse> = (args) => (
  <BannerHeader {...args} />
);

export const Default = Template.bind({});

Default.args = mockBannerHeader;
