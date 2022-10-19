import { bgStories } from '../../styles/colors';
import { ExpertiseProgressBarProps } from '@/utilts/types';
import { Meta, Story } from '@storybook/react';
import { ExpertiseProgressBar } from '.';
import { mockExpertiseProgressBar } from './mock';

export default {
  title: `Components/ExpertiseProgressBar`,
  component: ExpertiseProgressBar,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: `1rem`,
          width: `500px`,
          padding: `1rem`,
          background: bgStories,
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<ExpertiseProgressBarProps> = (args) => (
  <ExpertiseProgressBar {...args} />
);

export const Default = Template.bind({});

Default.args = mockExpertiseProgressBar;
