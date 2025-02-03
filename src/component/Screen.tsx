import React from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  View,
  ViewStyle,
  StatusBar,
  StatusBarProps,
  StyleSheet,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ExtendedEdge, useSafeAreaInsetsStyle } from 'hook';

interface BaseScreenProps {
  /**
   * Children components.
   */
  children?: React.ReactNode;
  /**
   * Content to be rendered at the bottom of the screen.
   */
  bottomContent?: React.ReactNode;
  /**
   * Style for the outer content container useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Style for the inner content container useful for padding & margin.
   */
  contentContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Override the default edges for the safe area.
   */
  safeAreaEdges?: ExtendedEdge[];
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Status bar setting. Defaults to dark.
   */
  statusBarStyle?: 'default' | 'dark-content' | 'light-content';
  /**
   * By how much should we offset the keyboard? Defaults to 0.
   */
  keyboardOffset?: number;
  /**
   * Pass any additional props directly to the StatusBar component.
   */
  StatusBarProps?: StatusBarProps;
  /**
   * Pass any additional props directly to the KeyboardAvoidingView component.
   */
  KeyboardAvoidingViewProps?: KeyboardAvoidingViewProps;
  /**
   * Boolean indicating whether to show spinner
   */
  loading?: boolean;
}

interface FixedScreenProps extends BaseScreenProps {
  preset?: 'fixed';
}
interface ScrollScreenProps extends BaseScreenProps {
  preset?: 'scroll';
  /**
   * Should keyboard persist on screen tap. Defaults to handled.
   * Only applies to scroll preset.
   */
  keyboardShouldPersistTaps?: 'handled' | 'always' | 'never';
  /**
   * Pass any additional props directly to the ScrollView component.
   */
  scrollViewProps?: ScrollViewProps;
}

export type ScreenProps = ScrollScreenProps | FixedScreenProps;

const isIos = Platform.OS === 'ios';

type ScreenPreset = 'fixed' | 'scroll';

/**
 * Whether the preset is non-scrolling.
 */
const isNonScrolling = (preset?: ScreenPreset) => !preset || preset === 'fixed';

/**
 * The rendered `ScreenWithoutScrolling` component.
 */
const ScreenWithoutScrolling = ({
  style,
  contentContainerStyle,
  children,
}: ScreenProps) => (
  <View style={[styles.outerStyle, style]}>
    <View style={[styles.innerStyle, contentContainerStyle]}>{children}</View>
  </View>
);

/**
 * The rendered `ScreenWithScrolling` component.
 */
const ScreenWithScrolling = (props: ScreenProps) => {
  const {
    children,
    keyboardShouldPersistTaps = 'handled',
    contentContainerStyle,
    scrollViewProps,
    style,
  } = props as ScrollScreenProps;

  return (
    <ScrollView
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      {...scrollViewProps}
      style={[styles.outerStyle, scrollViewProps?.style, style]}
      contentContainerStyle={[
        styles.innerStyle,
        scrollViewProps?.contentContainerStyle,
        contentContainerStyle,
      ]}>
      {children}
    </ScrollView>
  );
};

/**
 * Represents a screen component that provides a consistent layout and behavior for different screen presets.
 * The `Screen` component can be used with different presets such as "fixed", "scroll", or "auto".
 * It handles safe area insets, status bar settings, keyboard avoiding behavior, and scrollability based on the preset.
 */
export const Screen = (props: ScreenProps) => {
  // Theme hook
  const { colors, dark } = useTheme();

  const {
    backgroundColor = colors.background,
    KeyboardAvoidingViewProps,
    keyboardOffset = 0,
    safeAreaEdges = ['top', 'bottom'],
    StatusBarProps = { backgroundColor: colors.background },
    statusBarStyle = dark ? 'light-content' : 'dark-content',
    bottomContent,
    preset = 'fixed',
  } = props;

  // Hook for safe-area-aware style object
  const containerInsets = useSafeAreaInsetsStyle(safeAreaEdges);

  return (
    <View
      testID="screen"
      style={[
        styles.containerStyle,
        { backgroundColor: backgroundColor || colors.background },
        containerInsets,
      ]}>
      <StatusBar
        barStyle={statusBarStyle || (dark ? 'light-content' : 'dark-content')}
        {...StatusBarProps}
      />
      <KeyboardAvoidingView
        behavior={isIos ? 'padding' : 'height'}
        keyboardVerticalOffset={keyboardOffset}
        {...KeyboardAvoidingViewProps}
        style={[
          styles.keyboardAvoidingViewStyle,
          KeyboardAvoidingViewProps?.style,
        ]}>
        {isNonScrolling(preset) ? (
          <ScreenWithoutScrolling {...props} />
        ) : (
          <ScreenWithScrolling {...props} />
        )}
      </KeyboardAvoidingView>
      {bottomContent}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  keyboardAvoidingViewStyle: {
    flex: 1,
  },
  outerStyle: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  innerStyle: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});
