import React from 'react';
import { ComponentStory, ComponentMeta, Meta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'MyComponent/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    backgroundColor:'rgb(58, 0, 255)',
    color: 'white',
    label: 'CADS button'
}

export const Default = Template.bind({});
Default.args = {
  backgroundColor: 'orange',
  color: 'white',
  label: 'CADS button'
};



