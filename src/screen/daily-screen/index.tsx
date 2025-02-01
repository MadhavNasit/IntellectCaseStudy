import React, { useMemo } from 'react';
import { Image, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { iconRegistry } from 'asset/icons';
import { Button, Greeting, Icon, Screen, Text, ProgressBar } from 'component';
import { mvs, vs } from 'utils';
import { BellIcon, FireIcon } from 'asset/svgs';
import makeStyles from './styles';

/**
 * DailyScreen component renders a banner with greeting, information about daily activities,
 * and a reminder button.
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
  const renderBanner = (): JSX.Element => (
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
  );

  /**
   * Renders the progress section displaying user progress.
   * Includes a title, a progress bar, and a session count.
   */
  const renderProgress = () => (
    <View style={styles.progressWrapper}>
      <Text
        size="h5"
        tx="daily.progress.title"
        txOptions={{ count: 1, total: 3 }}
        style={styles.title}
      />
      <ProgressBar
        progress={0.33}
        styleOverrides={{ container: styles.progressBarContainer }}
      />
      <View style={styles.sessionContainer}>
        <Icon icon={<FireIcon />} size={mvs(16)} color={colors.text} />
        <Text tx="daily.progress.sessionTogether" txOptions={{ count: 2615 }} />
      </View>
    </View>
  );

  return (
    <Screen safeAreaEdges={[]} preset="scroll">
      {renderBanner()}
      {renderProgress()}
    </Screen>
  );
};
