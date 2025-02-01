import React, { useMemo, useCallback } from 'react';
import { SectionList, SectionListProps, StyleSheet } from 'react-native';
import { session, SessionItem, SessionType } from 'src/constants/daily_session';
import { SessionCard } from './SessionCard';
import { s, spacing, vs } from 'utils';
import { useTheme } from '@react-navigation/native';
import { Text } from 'component';

/**
 * Represents a section of sessions grouped by time of day.
 */
interface SessionSection {
  title: string;
  data: SessionItem[];
}

/**
 * Props for the SessionList component, extending SectionListProps while omitting
 * unnecessary properties that are internally managed.
 */
interface SessionListProps
  extends Omit<
    SectionListProps<SessionItem, SessionSection>,
    | 'sections'
    | 'keyExtractor'
    | 'renderItem'
    | 'renderSectionHeader'
    | 'stickySectionHeadersEnabled'
    | 'contentContainerStyle'
  > {}

/**
 * Mapped headings for each session type.
 */
const headings: Record<SessionType, string> = {
  Morning: '🌞 Morning',
  Afternoon: '☕ Afternoon',
  Evening: '🌙 Evening',
};

/**
 * Renders a list of daily sessions grouped by time of day.
 * Utilizes memoization and callbacks to optimize performance.
 */
const SessionList: React.FC<SessionListProps> = props => {
  const { colors } = useTheme();

  /** Memoize grouped sessions to prevent unnecessary recalculations */
  const groupedSessions = useMemo<SessionSection[]>(() => {
    return Object.values(SessionType).map(type => ({
      title: headings[type],
      data: session.filter(item => item.type === type),
    }));
  }, []);

  /** Memoized renderItem function to prevent unnecessary re-renders */
  const renderItem = useCallback(
    ({ item, index }: { item: SessionItem; index: number }) => (
      <SessionCard
        key={index}
        heading={item.heading}
        description={item.description}
      />
    ),
    [],
  );

  // Memoized renderSectionHeader function
  const renderSectionHeader = useCallback(
    ({ section: { title } }: { section: SessionSection }) => (
      <Text size="h3" style={styles.sectionHeader}>
        {title}
      </Text>
    ),
    [],
  );

  return (
    <SectionList<SessionItem, SessionSection>
      {...props}
      sections={groupedSessions}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      stickySectionHeadersEnabled={false}
      contentContainerStyle={[
        styles.contentContainer,
        { backgroundColor: colors.background },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: vs(spacing.xl),
    paddingBottom: vs(spacing.xl) + vs(spacing.sm),
    paddingHorizontal: s(spacing.md),
  },
  contentContainer: {
    flexGrow: 1,
  },
});

export default React.memo(SessionList);
