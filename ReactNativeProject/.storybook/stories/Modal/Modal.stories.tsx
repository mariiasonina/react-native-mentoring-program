import type { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { View } from 'react-native';
import { Modal } from './Modal';
import { ButtonProps } from '../Button/Button';

export default {
  title: 'Modal',
  component: Modal,
  args: {
    header: 'Warning!',
    text: 'Important message! Please do nothing!',
  },
  decorators: [
    Story => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  buttons: [{ text: 'Ok', color: '#008ACE', id: '0', onPress: () => {} }],
};

export const WithCancel = Template.bind({});
WithCancel.args = {
  buttons: [
    ...(Basic.args.buttons as (ButtonProps & { id: string })[]),
    { text: 'Cancel', color: '#DD6B55', id: '1', onPress: () => {} },
  ],
};
