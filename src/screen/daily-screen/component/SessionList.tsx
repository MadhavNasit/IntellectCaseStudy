import React, { useCallback } from 'react';
import { SectionList, SectionListProps, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { s, spacing, vs } from 'utils';
import { Text } from 'component';
import { SessionItem } from 'constant';
import { SessionCard } from './SessionCard';
import {
  markCompleted,
  selectGroupedSessions,
  useAppDispatch,
  useAppSelector,
} from 'store';

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
 * Renders a list of daily sessions grouped by time of day.
 * Utilizes memoization and callbacks to optimize performance.
 */
const SessionList: React.FC<SessionListProps> = props => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const groupedSessions = useAppSelector(selectGroupedSessions);

  /** Mark session as completed */
  const markAsCompleted = useCallback(
    (id: number) => {
      dispatch(markCompleted(id));
    },
    [dispatch],
  );

  /** Memoized renderItem function to prevent unnecessary re-renders */
  const renderItem = useCallback(
    ({ item, index }: { item: SessionItem; index: number }) => (
      <SessionCard
        key={index}
        heading={item.heading}
        description={item.description}
        completed={item.completed}
        onPress={() => markAsCompleted(item.id)}
      />
    ),
    [markAsCompleted],
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
      showsVerticalScrollIndicator={false}
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
