import React, { FC, useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, View, ViewStyle } from 'react-native';
import Svg, { G, Linecap, Path } from 'react-native-svg';

export interface CircularProgressProps {
  /** Diameter of the circular progress (default: 140) */
  size?: number;
  /** Width of the progress stroke (default: 10) */
  strokeWidth?: number;
  /** Progress value from 0 to 100 (default: 50) */
  progress?: number;
  /** Color of the active progress stroke (default: '#0f1b27') */
  activeColor?: string;
  /** Color of the inactive background stroke (default: '#eae2df') */
  inActiveColor?: string;
  /** Animation duration in milliseconds (default: 500) */
  duration?: number;
  /** Arc sweep angle in degrees (default: 360 for full circle) */
  arcSweepAngle?: number;
  /** Rotation of the circular progress in degrees (default: 0) */
  rotation?: number;
  /** Stroke line cap style ('butt' | 'round' | 'square') (default: 'round') */
  strokeLinecap?: Linecap;
  /** Opacity of the active progress stroke (default: 1) */
  activeOpacity?: number;
  /** Opacity of the inactive background stroke (default: 1) */
  inActiveOpacity?: number;
  /** Style overrides for the container */
  containerStyle?: ViewStyle;
  /** Style overrides for the progress SVG */
  svgStyle?: ViewStyle;
  /** Style overrides for the inner content view */
  contentStyle?: ViewStyle;
  /** Children to be placed inside the progress circle */
  children?: React.ReactNode;
}

/**
 * CircularProgress - A customizable circular progress indicator component.
 *
 * This component renders a circular progress bar using SVG and Animated API.
 */
export const CircularProgress: FC<CircularProgressProps> = ({
  size = 140,
  strokeWidth = 10,
  progress = 50,
  activeColor = '#0f1b27',
  inActiveColor = '#eae2df',
  duration = 500,
  arcSweepAngle = 360,
  rotation = 0,
  strokeLinecap = 'round',
  activeOpacity = 1,
  inActiveOpacity = 1,
  containerStyle,
  svgStyle,
  contentStyle,
  children,
}) => {
  // Animated value to handle progress animation
  const progressAnim = useRef(new Animated.Value(progress)).current;
  const [animatedProgress, setAnimatedProgress] = useState(progress);

  useEffect(() => {
    // Animate progress changes
    Animated.timing(progressAnim, {
      toValue: progress,
      duration,
      useNativeDriver: false,
    }).start();

    // Listen to animation updates
    const listener = progressAnim.addListener(({ value }) => {
      setAnimatedProgress(value);
    });

    return () => {
      progressAnim.removeListener(listener);
    };
  }, [progress, duration, progressAnim]);

  // constants
  const padding = strokeWidth;
  const adjustedSize = size - padding * 2;
  const radius = adjustedSize / 2;
  const center = size / 2;

  /**
   * Creates an SVG arc path based on the given angle.
   * @param degree - The angle in degrees for the arc.
   * @returns {string} The SVG path data for the arc.
   */
  const createArcPath = (degree: number) => {
    // Manage full circle use case
    if (degree >= 360) {
      return `
        M ${center} ${center - radius}
        A ${radius} ${radius} 0 1 1 ${center} ${center + radius}
        A ${radius} ${radius} 0 1 1 ${center} ${center - radius}
      `;
    } else {
      const radians = (degree * Math.PI) / 180;
      const endX = center + radius * Math.cos(radians - Math.PI / 2);
      const endY = center + radius * Math.sin(radians - Math.PI / 2);
      const largeArcFlag = degree > 180 ? 1 : 0;
      return `
        M ${center} ${center - radius}
        A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}
      `;
    }
  };

  return (
    <View style={[{ width: size, height: size }, containerStyle]}>
      <Svg width={size} height={size} style={svgStyle}>
        <G rotation={rotation} origin={`${center}, ${center}`}>
          {/* Inactive background stroke */}
          <Path
            d={createArcPath(arcSweepAngle)}
            fill="none"
            stroke={inActiveColor}
            strokeWidth={strokeWidth}
            strokeLinecap={strokeLinecap}
            opacity={inActiveOpacity}
          />
          {/* Active progress stroke */}
          <Path
            d={createArcPath((arcSweepAngle * animatedProgress) / 100)}
            fill="none"
            stroke={activeColor}
            strokeWidth={strokeWidth}
            strokeLinecap={strokeLinecap}
            opacity={activeOpacity}
          />
        </G>
      </Svg>
      {/* Optional children inside the progress circle */}
      {!!children && (
        <View
          style={[
            styles.centerContent,
            {
              width: size * 0.7,
              height: size * 0.7,
              top: (size - size * 0.7) / 2,
              left: (size - size * 0.7) / 2,
            },
            contentStyle,
          ]}>
          {children}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  centerContent: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
