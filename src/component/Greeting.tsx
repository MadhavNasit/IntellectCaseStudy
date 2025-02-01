import React, { useMemo } from 'react';
import { Text, TextProps } from './Text';

/**
 * `Greeting` Component
 *
 * This component displays a localized greeting message based on the current time.
 * - Morning (Before 12 PM)
 * - Afternoon (12 PM - 5:59 PM)
 * - Evening (After 6 PM)
 */
export const Greeting: React.FC<TextProps> = props => {
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'component.greeting.morning';
    } else if (hour < 18) {
      return 'component.greeting.afternoon';
    } else {
      return 'component.greeting.evening';
    }
  }, []);

  return <Text {...props} tx={greeting} />;
};
