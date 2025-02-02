import React, { FC, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { TranslationKeys } from 'i18n';
import { TOptions } from 'i18next';
import { CircularProgress, CircularProgressProps, Text } from 'component';
import { s, spacing, typography, vs } from 'utils';
import { Colors } from 'theme/theme.types';

export interface CircularInsightProps extends CircularProgressProps {
  /** Progress value from 0 to 100 (default: 0) */
  progress?: number;
  /** Change indicator (e.g., difference from previous value) */
  change?: number;
  /** Static text to display (if not using `tx`) */
  text?: string;
  /** i18n translation key */
  tx?: TranslationKeys;
  /** Options for translation (e.g., interpolation, locale settings) */
  txOptions?: TOptions;
}

/**
 * CircularInsight component displays a circular progress indicator with
 * percentage, change indicator, and descriptive text with translation support.
 */
export const CircularInsightItem: FC<CircularInsightProps> = ({
  progress = 0,
  change = 0,
  text,
  tx,
  txOptions,
  ...rest
}) => {
  // Create styles
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  // Determine active color based on progress thresholds
  const activeColor = useMemo(() => {
    if (progress < 45) {
      return colors.bad;
    }
    if (progress < 75) {
      return colors.moderate;
    }
    return colors.good;
  }, [progress, colors]);

  return (
    <View style={styles.container}>
      <CircularProgress
        size={s(90)}
        progress={progress}
        arcSweepAngle={280}
        rotation={-140}
        strokeWidth={s(6)}
        activeColor={activeColor}
        inActiveColor={colors.border}
        {...rest}>
        <View style={styles.progressTextContainer}>
          <Text size="h3" style={styles.textCenter}>
            {progress}
          </Text>
          <Text
            text={change !== 0 ? `(${change > 0 ? `+${change}` : change})` : ''}
            style={[
              styles.textCenter,
              { color: change > 0 ? colors.good : colors.bad },
            ]}
          />
        </View>
      </CircularProgress>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>
          <Text
            style={{
              color: colors.text_light,
              fontFamily: typography.semiBold,
            }}>
            {progress}
          </Text>
          <Text
            tx="home.outOf"
            txOptions={{ total: 100 }}
            style={{
              color: colors.text_light,
              fontFamily: typography.regular,
            }}
          />
        </Text>
        {(tx || text) && (
          <Text
            tx={tx}
            text={text}
            txOptions={txOptions}
            numberOfLines={2}
            style={styles.textCenter}
          />
        )}
      </View>
    </View>
  );
};

const makeStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      width: 100,
    },
    progressTextContainer: {
      rowGap: vs(2),
    },
    detailsContainer: {
      rowGap: vs(spacing.xxs),
    },
    textCenter: {
      textAlign: 'center',
    },
    detailsText: {
      textAlign: 'center',
      color: colors.text_light,
    },
  });
