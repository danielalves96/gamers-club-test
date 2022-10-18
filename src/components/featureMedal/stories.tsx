import { FeaturedMedalComponentProps } from '@/utilts/types';
import { Meta, Story } from '@storybook/react';
import { FeatureMedal } from '.';
import { mockFeatureMedal, mockFeatureMedalPro } from './mock';

export default {
  title: `Components/FeatureMedal`,
  component: FeatureMedal,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: `1rem`,
          width: `fit-content`,
          padding: `1rem`,
          background: `#303356`,
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<FeaturedMedalComponentProps> = (args) => (
  <FeatureMedal {...args} />
);

export const Default = Template.bind({});

Default.args = mockFeatureMedal;

export const Pro = Template.bind({});

Pro.args = mockFeatureMedalPro;
