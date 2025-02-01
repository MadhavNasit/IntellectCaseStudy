import React, { useMemo } from 'react';
import { View, TouchableOpacityProps, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { CheckMark, PlayIcon } from 'asset/svgs';
import { Card, Icon, Text } from 'component';
import { s, spacing, typography, vs } from 'utils';
import { Colors } from 'theme/theme.types';

/**
 * Props for the SessionCard component.
 */
interface SessionCardProps extends TouchableOpacityProps {
  /** Title of the session */
  heading: string;
  /** Short description of the session */
  description: string;
  /** Indicates whether the session is completed */
  completed?: boolean;
}

/**
 * A card component displaying session details with an icon indicating completion status.
 */
export const SessionCard: React.FC<SessionCardProps> = ({
  heading,
  description,
  completed = false,
  ...rest
}) => {
  // Prepare styles with colors as per theme
  const { colors } = useTheme();
  const styles = useMemo(
    () => makeStyles(colors, completed),
    [colors, completed],
  );

  return (
    <Card style={styles.card} {...rest}>
      <View style={styles.iconWrapper}>
        <Icon
          icon={completed ? <CheckMark /> : <PlayIcon />}
          size={vs(completed ? 28 : 18)}
          color={colors.white}
        />
      </View>
      <View style={styles.textContainer}>
        <Text size="h4" style={styles.heading}>
          {heading}
        </Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Card>
  );
};

/**
 * Generates styles for the SessionCard component based on theme colors and completion status.
 */
const makeStyles = (colors: Colors, completed: boolean) =>
  StyleSheet.create({
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: completed ? colors.active_card : colors.card_secondary,
      columnGap: s(spacing.md),
      borderWidth: 0,
      marginBottom: vs(spacing.sm),
      marginHorizontal: s(spacing.md),
    },
    iconWrapper: {
      backgroundColor: completed ? colors.active_card : colors.green,
      height: vs(36),
      width: vs(36),
      borderRadius: vs(18),
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
      flex: 1,
      rowGap: vs(spacing.xxs),
    },
    heading: {
      fontFamily: typography.medium,
      color: completed ? colors.white : colors.text,
    },
    description: {
      color: completed ? colors.white : colors.text_light,
    },
  });
