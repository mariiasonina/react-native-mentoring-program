import type { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
  args: {
    value: 'Input text',
    placeholder: '',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
  width: 100,
  height: 20,
};

export const Medium = Template.bind({});
Medium.args = {
  width: 200,
  height: 40,
};

export const Large = Template.bind({});
Large.args = {
  width: 300,
  height: 60,
};
