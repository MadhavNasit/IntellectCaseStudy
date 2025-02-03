import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Card, Text } from 'component';
import { mockUseTheme, mockUseTranslation } from '../testUtils';

describe('Card Component', () => {
  beforeEach(() => {
    mockUseTranslation();
    mockUseTheme();
  });

  it('should match the snapshot', () => {
    const { toJSON } = render(
      <Card>
        <Text>Snapshot Content</Text>
      </Card>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render children inside the card', () => {
    const { getByText } = render(
      <Card>
        <Text>Card Content</Text>
      </Card>,
    );

    expect(getByText('Card Content')).toBeTruthy();
  });

  it('should apply theme-based styles', () => {
    const { getByTestId } = render(
      <Card testID="card">
        <Text>Content</Text>
      </Card>,
    );

    const card = getByTestId('card');
    expect(card).toHaveStyle({
      backgroundColor: '#ffffff',
      borderColor: '#e6e4e5',
    });
  });

  it('should be pressable if onPress is provided', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Card onPress={onPressMock} testID="card">
        <Text>Press Me</Text>
      </Card>,
    );

    fireEvent.press(getByTestId('card'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('should not be pressable if onPress is not provided', () => {
    const { getByTestId } = render(
      <Card testID="card">
        <Text>Non-Pressable</Text>
      </Card>,
    );

    const card = getByTestId('card');
    expect(card).not.toHaveProp('onPress');
  });
});
