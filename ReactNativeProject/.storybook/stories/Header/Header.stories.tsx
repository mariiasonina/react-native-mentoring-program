import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { Header } from './Header';

export default {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    title: 'Header',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};
