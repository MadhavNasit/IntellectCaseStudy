import React from 'react';
import { render } from '@testing-library/react-native';
import { SessionCard } from 'screen/daily-screen/component';
import { mockUseTheme, mockUseTranslation } from '../../../testUtils';

describe('SessionCard', () => {
  beforeEach(() => {
    mockUseTranslation();
    mockUseTheme();
  });

  it('matches snapshot', () => {
    const tree = render(
      <SessionCard
        heading="Snapshot Test"
        description="This is a snapshot test."
        completed={false}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with default props', () => {
    const { getByText } = render(
      <SessionCard
        heading="Test Session"
        description="This is a test description."
      />,
    );

    expect(getByText('Test Session')).toBeTruthy();
    expect(getByText('This is a test description.')).toBeTruthy();
  });

  it('displays the correct icon when completed is false', () => {
    const { getByTestId } = render(
      <SessionCard
        heading="Test Session"
        description="Test Description"
        completed={false}
      />,
    );

    expect(getByTestId('play-icon')).toBeTruthy();
  });

  it('displays the correct icon when completed is true', () => {
    const { getByTestId } = render(
      <SessionCard
        heading="Test Session"
        description="Test Description"
        completed={true}
      />,
    );

    expect(getByTestId('checkmark-icon')).toBeTruthy();
  });
});
