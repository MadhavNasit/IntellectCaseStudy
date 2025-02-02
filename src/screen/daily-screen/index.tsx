import React, { useCallback, useMemo } from 'react';
import { Image, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { iconRegistry } from 'asset/icons';
import { Button, Greeting, Icon, Screen, Text, ProgressBar } from 'component';
import { mvs, vs } from 'utils';
import { BellIcon, FireIcon } from 'asset/svgs';
import { SessionList } from './component';
import makeStyles from './styles';

/**
 * The `DailyScreen` component displays a daily activity overview.
 * It includes a greeting banner, progress tracking, and a list of sessions.
 */
export const DailyScreen = (): JSX.Element => {
  // Manage safe area insets
  const insets = useSafeAreaInsets();

  // Theme and styles hook
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors, insets), [colors, insets]);

  /**
   * Renders the banner section with a greeting, informational text, and reminder button.
   */
  const renderBanner = useCallback(
    (): JSX.Element => (
      <View style={styles.bannerContainer}>
        <View style={styles.bannerContent}>
          <Greeting size="h2" style={styles.greeting} />
          <Text tx="daily.banner.desc" style={styles.bannerText} />
          <Button
            titleTx="daily.banner.setReminder"
            preset="outline"
            leftComponent={() => (
              <Icon icon={<BellIcon />} size={vs(20)} color={colors.white} />
            )}
            buttonStyle={styles.button}
            buttonTextStyle={styles.buttonText}
          />
        </View>
        <Image
          source={iconRegistry.dailyBanner}
          resizeMode="cover"
          style={styles.bannerImage}
        />
      </View>
    ),
    [colors, styles],
  );

  /**
   * Renders the progress section displaying user progress.
   * Includes a title, a progress bar, and a session count.
   */
  const renderProgress = useCallback(
    () => (
      <View style={styles.progressWrapper}>
        <Text
          size="h5"
          tx="daily.progress.title"
          txOptions={{ count: 1, total: 3 }}
          style={styles.title}
        />
        <ProgressBar
          progress={0.4}
          styleOverrides={{ container: styles.progressBarContainer }}
        />
        <View style={styles.sessionContainer}>
          <Icon icon={<FireIcon />} size={mvs(16)} color={colors.text} />
          <Text
            tx="daily.progress.sessionTogether"
            txOptions={{ count: 2615 }}
          />
        </View>
      </View>
    ),
    [colors, styles],
  );

  /**
   * Combines the banner and progress sections as the list header.
   */
  const renderListHeader = useMemo(
    () => (
      <>
        {renderBanner()}
        {renderProgress()}
      </>
    ),
    [renderBanner, renderProgress],
  );

  /**
   * Renders a footer component with a quote.
   * This is typically used at the bottom of a list or a screen to provide
   * additional context or inspiration.
   */
  const renderListFooter = useCallback(() => {
    return (
      <View style={styles.footerWrapper}>
        <View style={styles.separator} />
        <Text tx="daily.quote" style={styles.quote} />
      </View>
    );
  }, [styles]);

  return (
    <Screen safeAreaEdges={[]} preset="fixed">
      <SessionList
        ListHeaderComponent={renderListHeader}
        ListFooterComponent={renderListFooter}
      />
    </Screen>
  );
};
