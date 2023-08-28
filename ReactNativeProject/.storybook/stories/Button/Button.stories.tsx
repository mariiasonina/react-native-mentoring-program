import React from 'react';
import { View } from 'react-native';
import { Button } from './Button';
import { Story } from '@storybook/react-native';

const meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
    color: '#008ACE',
    onPress: () => {},
  },
  decorators: [
    (Story: Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

export const Basic = {};

export const Red = {
  args: {
    text: 'Cancel',
    color: '#DD6B55',
  },
};
