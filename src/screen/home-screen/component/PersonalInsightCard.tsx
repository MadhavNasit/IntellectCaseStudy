import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Card, Text } from 'component';
import { CircularInsightItem } from './CircularInsightItem';
import { s, spacing, vs } from 'utils';
import { InsightItem } from 'src/constant';
import { TranslationKeys } from 'i18n';

/**
 * Props for PersonalInsightCard component
 */
interface PersonalInsightCardProps {
  /**
   * An array of insight items to display in the card.
   * Each insight item should have an id, heading, progress, and change.
   */
  insights: InsightItem[];

  /**
   * Optional heading text to display at the top of the card.
   * If not provided, the `headingTx` prop will be used (if available).
   */
  heading?: string;

  /**
   * Optional translation key for the heading text.
   * If provided, it will be used to fetch the translated heading.
   */
  headingTx?: TranslationKeys;
}

/**
 * A card component that displays a list of insights with their respective progress in circular indicators.
 * Optionally accepts a heading text or translation key to be displayed at the top of the card.
 */
export const PersonalInsightCard: React.FC<PersonalInsightCardProps> = ({
  insights,
  heading,
  headingTx,
}) => {
  return (
    <Card style={styles.insightCard}>
      {/* Render the heading text */}
      <Text size="h3" tx={headingTx} text={heading} />

      <View style={styles.progressWrapper}>
        {/* Map through the insights array and render each CircularInsightItem */}
        {insights.map(item => (
          <CircularInsightItem
            key={item.id}
            progress={item.progress}
            text={item.heading}
            change={item.change}
          />
        ))}
      </View>
    </Card>
  );
};

// Styles for the PersonalInsightCard component
const styles = StyleSheet.create({
  insightCard: {
    marginHorizontal: s(spacing.md),
    marginVertical: vs(spacing.md),
    borderRadius: s(32),
    paddingHorizontal: s(spacing.md),
    paddingVertical: vs(spacing.xl),
    rowGap: vs(spacing.lg),
  },
  progressWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    rowGap: vs(spacing.xs),
    columnGap: s(spacing.sm),
  },
});
