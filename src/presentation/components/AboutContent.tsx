/**
 * About Content Component
 * Displays the list of about items
 */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AboutSettingItem } from './AboutSettingItem';
import { AppInfo } from '../../domain/entities/AppInfo';
import { AboutConfig } from '../../domain/entities/AppInfo';

export interface AboutContentProps {
  /** App information to display */
  appInfo: AppInfo;
  /** Configuration for actions */
  config: AboutConfig;
}

export const AboutContent: React.FC<AboutContentProps> = ({
  appInfo,
  config,
}) => {
  return (
    <View style={styles.content}>
      {appInfo.developer && (
        <AboutSettingItem
          title="Developer"
          value={appInfo.developer}
          testID="developer-item"
        />
      )}
      
      {appInfo.contactEmail && (
        <AboutSettingItem
          title="Contact"
          value={appInfo.contactEmail}
          onPress={config.actions?.onEmailPress}
          testID="email-item"
        />
      )}
      
      {appInfo.websiteUrl && (
        <AboutSettingItem
          title="Website"
          value={appInfo.websiteDisplay || appInfo.websiteUrl}
          onPress={config.actions?.onWebsitePress}
          testID="website-item"
        />
      )}
      
      {appInfo.moreAppsUrl && (
        <AboutSettingItem
          title="More Apps"
          onPress={config.actions?.onMoreAppsPress}
          testID="more-apps-item"
        />
      )}
      
      {appInfo.privacyPolicyUrl && (
        <AboutSettingItem
          title="Privacy Policy"
          onPress={config.actions?.onPrivacyPress}
          testID="privacy-item"
        />
      )}
      
      {appInfo.termsOfServiceUrl && (
        <AboutSettingItem
          title="Terms of Service"
          onPress={config.actions?.onTermsPress}
          testID="terms-item"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingVertical: 8,
  },
});