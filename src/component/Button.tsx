import React, { useMemo } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Text } from 'component';
import { Colors } from 'theme/theme.types';
import { fontSize, lineHeight, s, spacing, typography, vs } from 'utils';
import { TranslationKeys } from 'i18n';
import { TOptions } from 'i18next';

interface AppButtonProps extends TouchableOpacityProps {
  /** The text to be displayed on the button. */
  title?: string;
  /** Button text which is looked up via i18n. */
  titleTx?: TranslationKeys;
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: TOptions;
  /** The style preset to be applied ('primary', 'secondary', 'outline', 'link'). */
  preset?: 'primary' | 'secondary' | 'outline' | 'link';
  /** Custom styles to be applied to the button. */
  buttonStyle?: ViewStyle | ViewStyle[];
  /** Custom styles for the button's text. */
  buttonTextStyle?: TextStyle | TextStyle[];
  /** Optional component to be rendered on the left of the text. */
  leftComponent?: () => JSX.Element;
  /** Optional component to be rendered on the right of the text. */
  rightComponent?: () => JSX.Element;
  /** Boolean indicating whether the button is disabled or not. */
  disabled?: boolean;
}

/**
 * `Button` component that provides multiple button styles (primary, secondary, outline, link)
 * and the ability to customize its content with optional left and right components.
 */
export const Button: React.FC<AppButtonProps> = ({
  title,
  titleTx,
  txOptions,
  preset = 'primary',
  buttonStyle = {},
  buttonTextStyle = {},
  leftComponent,
  rightComponent,
  disabled = false,
  ...rest
}) => {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  const defaultStyle = useMemo(() => {
    let style: ViewStyle & { color?: string } = styles.button;

    // Determine default style based on the preset
    switch (preset) {
      case 'secondary':
        style = { ...style, ...styles.buttonSecondary };
        break;
      case 'outline':
        style = { ...style, ...styles.buttonOutline };
        break;
      case 'link':
        style = styles.link;
        break;
    }

    // Apply disabled styles if the button is disabled
    if (disabled) {
      style = { ...style, ...styles.buttonDisabled };
    }

    return style;
  }, [preset, disabled, styles]);

  return (
    <TouchableOpacity
      style={[defaultStyle, buttonStyle]}
      disabled={disabled}
      {...(preset === 'link' && {
        hitSlop: { top: 8, bottom: 8, left: 12, right: 12 },
      })}
      {...rest}>
      {leftComponent && leftComponent()}
      <Text
        text={title}
        tx={titleTx}
        txOptions={txOptions}
        numberOfLines={1}
        style={[styles.text, { color: defaultStyle.color }, buttonTextStyle]}>
        {title}
      </Text>
      {rightComponent && rightComponent()}
    </TouchableOpacity>
  );
};

/**
 * Creates a set of styles based on the current theme.
 *
 * @param colors - The theme colors to apply to the button styles.
 */
const makeStyles = (colors: Colors) =>
  StyleSheet.create({
    button: {
      flexDirection: 'row',
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      color: colors.white,
      paddingVertical: vs(spacing.md),
      paddingHorizontal: s(spacing.lg),
      borderRadius: vs(30),
      columnGap: s(spacing.xs),
    } as ViewStyle,
    buttonSecondary: {
      backgroundColor: colors.secondary,
      color: colors.white,
    } as ViewStyle,
    buttonOutline: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: colors.primary,
      color: colors.text,
    } as ViewStyle,
    buttonDisabled: {
      opacity: 0.4,
    } as ViewStyle,
    link: {
      justifyContent: 'center',
      fontFamily: typography.regular,
      color: colors.text,
    } as ViewStyle,
    text: {
      fontFamily: typography.semiBold,
      fontSize: fontSize.h5,
      lineHeight: lineHeight[fontSize.h4],
    } as TextStyle,
  });
