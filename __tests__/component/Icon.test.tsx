import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Icon } from 'component';
import { BellIcon } from 'asset/svgs';

jest.mock('asset/icons', () => ({
  iconRegistry: {
    dailyBanner: require('asset/icons/daily-banner/daily-banner.png'),
  },
}));

describe('Icon Component', () => {
  it('renders correctly with default styles', () => {
    const { toJSON } = render(<Icon icon="dailyBanner" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders an image icon correctly', () => {
    const { getByTestId } = render(<Icon icon="dailyBanner" />);
    const image = getByTestId('icon-image');
    expect(image).toBeTruthy();
  });

  it('renders an SVG icon correctly', () => {
    const { getByTestId } = render(<Icon icon={<BellIcon />} />);
    expect(getByTestId('svg-icon')).toBeTruthy();
  });

  it('applies the provided color and size styles', () => {
    const { getByTestId } = render(
      <Icon icon="dailyBanner" color="red" size={30} />,
    );
    const image = getByTestId('icon-image');
    expect(image.props.style).toEqual(
      expect.arrayContaining([{ tintColor: 'red' }, { width: 30, height: 30 }]),
    );
  });

  it('triggers onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Icon icon="dailyBanner" onPress={onPressMock} />,
    );
    const touchable = getByTestId('icon-touchable');
    fireEvent.press(touchable);
    expect(onPressMock).toHaveBeenCalled();
  });

  it('renders inside a View when not pressable', () => {
    const { getByTestId } = render(<Icon icon="dailyBanner" />);
    expect(getByTestId('icon-view')).toBeTruthy();
  });

  it('renders correctly when provided with a custom style', () => {
    const { getByTestId } = render(
      <Icon icon="dailyBanner" style={{ margin: 10 }} />,
    );
    const container = getByTestId('icon-view');
    expect(container.props.style.margin).toBe(10);
  });
});
