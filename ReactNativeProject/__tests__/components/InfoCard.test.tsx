import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { InfoCard } from '@src/components/InfoCard/InfoCard';
import { Text } from 'react-native';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      ...jest.requireActual('@react-navigation/native'),
      navigate: jest.fn(),
    }),
  };
});

const CustomIcon = () => <Text>Custom Icon</Text>;

describe('InfoCard', () => {
  it('should render the component with props', () => {
    const { getByText } = render(
      <InfoCard
        icon={<CustomIcon />}
        header="Header Text"
        subHeader="Subheader Text"
        text="Card Text"
        buttonText="Button Text"
        onPress={() => {}}
      />,
    );

    expect(getByText('Header Text')).toBeTruthy();
    expect(getByText('Subheader Text')).toBeTruthy();
    expect(getByText('Card Text')).toBeTruthy();
    expect(getByText('Button Text')).toBeTruthy();
  });

  it('should call the onPress function when the button is pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <InfoCard
        icon={<CustomIcon />}
        subHeader="Subheader Text"
        text="Card Text"
        buttonText="Button Text"
        onPress={onPressMock}
      />,
    );

    fireEvent.press(getByText('Button Text'));

    expect(onPressMock).toHaveBeenCalled();
  });

  it('should render the sign-up hint when isShowSignUpHint is true', () => {
    const { getByText } = render(
      <InfoCard
        icon={<CustomIcon />}
        subHeader="Subheader Text"
        text="Card Text"
        buttonText="Button Text"
        isShowSignUpHint={true}
        onPress={() => {}}
      />,
    );

    expect(getByText('New here? Sign Up')).toBeTruthy();
  });

  it('should navigate to SignUp when the sign-up hint is pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <InfoCard
        icon={<CustomIcon />}
        subHeader="Subheader Text"
        text="Card Text"
        buttonText="Button Text"
        isShowSignUpHint={true}
        onPress={onPressMock}
      />,
    );

    const signUpHintElement = getByText('New here? Sign Up');
    fireEvent.press(signUpHintElement);

    expect(onPressMock).not.toHaveBeenCalled();
  });
});
