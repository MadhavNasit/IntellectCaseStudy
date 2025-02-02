import React, { memo, useEffect, useRef } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  DimensionValue,
  ViewStyle,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { vs } from 'utils';

interface ProgressBarProps {
  /** Progress value (0 to 1). Determines how much the progress bar is filled (e.g., 0.5 for 50%). */
  progress: number;

  /**
   * Height of the progress bar. Specifies the height of the progress bar (e.g., 20 for 20px, or '50%' for relative height).
   * Default value is 16.
   */
  height?: DimensionValue;

  /**
   * Width of the progress bar (percentage or fixed value). Can be a fixed value like '300px' or a percentage value like '80%'.
   * Default value is '100%'.
   */
  width?: DimensionValue;

  /** Border radius of the progress bar. Sets the roundness of the corners (e.g., 10 for 10px rounded corners). */
  borderRadius?: number;

  /**
   * Background color of the progress bar container. Sets the background color of the container (e.g., '#e0e0e0' for light gray).
   * Default value is colors.white.
   */
  backgroundColor?: string;

  /**
   * Color of the progress bar. Specifies the color of the progress bar itself (e.g., '#76c7c0' for a teal color).
   * Default value is colors.primary.
   */
  progressColor?: string;

  /**
   * Duration of the animation. Specifies how long the animation will take (in milliseconds).
   * Default value is 500.
   */
  duration?: number;

  /**
   * Allows overriding default styles for the progress bar
   * This prop accepts an object with optional `container` and `progress` styles.
   */
  styleOverrides?: {
    /** `container`: Styles for the outer container of the progress bar (e.g., width, height, backgroundColor). */
    container?: ViewStyle | ViewStyle[];
    /** `progress`: Styles for the progress bar itself (e.g., backgroundColor, borderRadius). */
    progress?: ViewStyle | ViewStyle[];
  };
}

export const ProgressBar: React.FC<ProgressBarProps> = props => {
  // Props
  const { colors } = useTheme();
  const {
    progress,
    height = vs(16),
    width = '100%',
    borderRadius = typeof height === 'number' ? height / 2 : vs(16),
    backgroundColor = colors.white,
    progressColor = colors.primary,
    duration = 1000,
    styleOverrides,
  } = props;

  // Animated width reference for progress
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: progress, // Target width based on the progress prop
      duration, // Animation duration
      useNativeDriver: false, // Use false since width is not a transform property
    }).start();
  }, [progress, duration, animatedWidth]);

  return (
    <View
      style={[
        styles.progressBarContainer,
        styleOverrides?.container,
        { width, height, backgroundColor, borderRadius },
      ]}>
      <Animated.View
        style={[
          styles.progressBar,
          styleOverrides?.progress,
          {
            width: animatedWidth.interpolate({
              inputRange: [0, 1],
              outputRange: ['5%', '100%'],
            }),
            backgroundColor: progressColor,
            borderRadius,
          },
        ]}
      />
    </View>
  );
};

const Memo = memo(ProgressBar);
export default Memo;

const styles = StyleSheet.create({
  progressBarContainer: {
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
  },
});
