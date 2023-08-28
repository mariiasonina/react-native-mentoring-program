import { View } from 'react-native';
import type { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { Loader } from './Loader';

export default {
  title: 'Loader',
  component: Loader,
  decorators: [
    Story => (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          backgroundColor: '#DBBF2A',
        }}>
        <Story />
      </View>
    ),
  ],
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = args => <Loader {...args} />;

export const SmallGreen = Template.bind({});
SmallGreen.args = {
  size: 'small',
  color: 'green',
};

export const LargeYellow = Template.bind({});
LargeYellow.args = {
  size: 50,
  color: 'yellow',
};
