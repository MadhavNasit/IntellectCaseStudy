import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from 'component';
import { Text } from 'component';
import { mockColors, mockUseTheme, mockUseTranslation } from '../testUtils';

describe('Button Component', () => {
  const defaultProps = {
    title: 'Click Me',
    preset: 'primary' as any,
    onPress: jest.fn(),
  };

  beforeEach(() => {
    mockUseTranslation();
    mockUseTheme();
  });

  it('should match snapshot', () => {
    const { toJSON } = render(<Button {...defaultProps} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should match snapshot for secondary type', () => {
    const { toJSON } = render(<Button {...defaultProps} preset="secondary" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render correctly with title and text', () => {
    const { getByText } = render(<Button {...defaultProps} title="Click Me" />);
    const buttonText = getByText('Click Me');
    expect(buttonText).toBeTruthy();
  });

  it('should render left and right components', () => {
    const leftComponent = () => <Text>Left</Text>;
    const rightComponent = () => <Text>Right</Text>;
    const { getByText } = render(
      <Button
        {...defaultProps}
        leftComponent={leftComponent}
        rightComponent={rightComponent}
      />,
    );

    expect(getByText('Left')).toBeTruthy();
    expect(getByText('Right')).toBeTruthy();
  });

  it('should handle disabled state correctly', () => {
    const { getByTestId } = render(<Button {...defaultProps} disabled />);
    const button = getByTestId('button');
    expect(button).toBeDisabled();
  });

  it('should apply correct styles based on preset', () => {
    const { getByTestId } = render(
      <Button {...defaultProps} preset="secondary" />,
    );
    const button = getByTestId('button');
    // Ensure the button has the correct secondary style applied
    expect(button.props.style.backgroundColor).toBe(mockColors.secondary);
  });

  it('should call onPress when pressed', () => {
    const { getByTestId } = render(<Button {...defaultProps} />);
    const button = getByTestId('button');
    fireEvent.press(button);
    expect(defaultProps.onPress).toHaveBeenCalledTimes(1);
  });
});
