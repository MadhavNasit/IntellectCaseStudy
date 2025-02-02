import React, { ComponentType, useMemo } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { spacing, s, vs } from 'utils';
import { Colors } from 'theme/theme.types';

/**
 * Props for the Card component.
 */
export interface CardProps extends TouchableOpacityProps {
  /**
   * Children components to be rendered inside the card.
   */
  children?: React.ReactNode;
  /**
   * Style overrides for the card container.
   */
  style?: StyleProp<ViewStyle>;
}

/**
 * A reusable Card component that supports touch interactions.
 * It applies theme-based styles, including shadows and background color.
 *
 * - If `onPress` is provided, the card will be pressable.
 * - Accepts additional `TouchableOpacityProps` for customization.
 */
export const Card = ({
  children,
  style: styleOverride,
  ...rest
}: CardProps) => {
  // Access theme colors using useTheme hook
  const { colors } = useTheme();
  // Generate styles dynamically based on theme colors
  const styles = useMemo(() => makeStyles(colors), [colors]);

  // Determine if the card should be pressable
  const isPressable = !!rest.onPress;
  const Wrapper = (isPressable ? TouchableOpacity : View) as ComponentType<
    TouchableOpacityProps | ViewProps
  >;

  return (
    <Wrapper {...rest} style={[styles.card, styleOverride]}>
      {/* Render child components inside the card */}
      {children}
    </Wrapper>
  );
};

const makeStyles = (colors: Colors) =>
  StyleSheet.create({
    card: {
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: s(spacing.sm),
      paddingHorizontal: s(spacing.md),
      paddingVertical: vs(spacing.md),
      backgroundColor: colors.card,
    } as ViewStyle,
  });
