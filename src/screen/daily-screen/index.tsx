import React, { useMemo } from 'react';
import { Image, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { iconRegistry } from 'asset/icons';
import { Button, Greeting, Icon, Screen, Text } from 'component';
import { vs } from 'utils';
import { BellIcon } from 'asset/svgs';
import makeStyles from './styles';
import { ProgressBar } from 'src/component/ProgressBar';

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

  return (
    <Screen safeAreaEdges={[]} preset="scroll">
      {renderBanner()}
      <ProgressBar progress={1} />
    </Screen>
  );
};
