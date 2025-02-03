import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'component';
import { fontSize } from 'utils';
import {
  mockColors,
  mockTranslation,
  mockUseTheme,
  mockUseTranslation,
} from '../testUtils';

describe('Text Component', () => {
  beforeEach(() => {
    mockUseTranslation();
    mockUseTheme();
  });

  it('matches snapshot with text prop', () => {
    const { toJSON } = render(<Text text="Hello World" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with translated text', () => {
    const { toJSON } = render(<Text tx="common.appName" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with children text', () => {
    const { toJSON } = render(<Text>Some Child Text</Text>);
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with size prop', () => {
    const { toJSON } = render(<Text size="h1">Header Text</Text>);
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with custom styles', () => {
    const { toJSON } = render(
      <Text style={{ color: mockColors.text }} text="Styled Text" />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders text passed via the `text` prop', () => {
    const { getByText } = render(<Text text="Hello World" />);
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('renders translated text when `tx` is provided', () => {
    const { getByText } = render(<Text tx="common.appName" />);
    expect(getByText(mockTranslation)).toBeTruthy();
  });

  it('renders text passed via children', () => {
    const { getByText } = render(<Text>Some Child Text</Text>);
    expect(getByText('Some Child Text')).toBeTruthy();
  });

  it('applies styles based on the `size` prop', () => {
    const { getByText } = render(<Text size="h1">Header Text</Text>);
    const textElement = getByText('Header Text');
    const style = textElement.props.style[1]; // h1 style from the makeStyles function
    expect(style.fontSize).toBe(fontSize.h1); // or other assertions based on your expected style
  });

  it('applies custom styles passed via the `style` prop', () => {
    const { getByText } = render(
      <Text style={{ color: mockColors.text }} text="Styled Text" />,
    );
    const textElement = getByText('Styled Text');
    const style = textElement.props.style[0];
    expect(style.color).toBe(mockColors.text);
  });
});
