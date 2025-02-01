import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import { Colors } from 'theme/theme.types';
import { s, spacing, vs } from 'utils';

export default (colors: Colors, insets: EdgeInsets) =>
  StyleSheet.create({
    // banner styles
    bannerContainer: {
      flexDirection: 'row',
      backgroundColor: colors.secondary,
      marginTop: insets.top,
    },
    bannerContent: {
      paddingStart: s(spacing.md),
      paddingEnd: s(spacing.xs),
      paddingTop: vs(spacing.xl),
      zIndex: 2,
      flex: 5.5,
      rowGap: vs(spacing.sm),
      paddingBottom: vs(spacing.md),
    },
    greeting: {
      color: colors.white,
    },
    bannerText: {
      color: colors.cadetGrey,
    },
    button: {
      borderWidth: 1,
      paddingVertical: vs(spacing.xs),
      alignSelf: 'flex-start',
      borderColor: colors.white,
    },
    buttonText: {
      color: colors.white,
    },
    bannerImage: {
      flex: 4.5,
      height: '100%',
      width: '100%',
      zIndex: 1,
    },
  });
