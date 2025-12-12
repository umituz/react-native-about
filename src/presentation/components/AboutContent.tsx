/**
 * About Content Component
 * Displays the list of about items organized in sections
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AboutSettingItem } from './AboutSettingItem';
import { AppInfo } from '../../domain/entities/AppInfo';
import { AboutConfig } from '../../domain/entities/AppInfo';

export interface AboutContentProps {
  /** App information to display */
  appInfo: AppInfo;
  /** Configuration for actions */
  config: AboutConfig;
}

const AboutSectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <Text style={styles.sectionHeader}>{title}</Text>
);

export const AboutContent: React.FC<AboutContentProps> = ({
  appInfo,
  config,
}) => {
  const hasContactInfo = appInfo.developer || appInfo.contactEmail || appInfo.websiteUrl;
  const hasLegalInfo = appInfo.privacyPolicyUrl || appInfo.termsOfServiceUrl;
  const hasMoreInfo = appInfo.moreAppsUrl;

  const texts = config.texts || {};

  return (
    <View style={styles.content}>
      {hasContactInfo && (
        <View style={styles.section}>
          <AboutSectionHeader title={texts.contact || "Contact"} />

          {appInfo.developer && (
            <AboutSettingItem
              title={texts.developer || "Developer"}
              value={appInfo.developer}
              testID="developer-item"
            />
          )}

          {appInfo.contactEmail && (
            <AboutSettingItem
              title={texts.email || "Email"}
              value={appInfo.contactEmail}
              onPress={config.actions?.onEmailPress}
              testID="email-item"
              showChevron={!!config.actions?.onEmailPress}
            />
          )}

          {appInfo.websiteUrl && (
            <AboutSettingItem
              title={texts.website || "Website"}
              value={appInfo.websiteDisplay || appInfo.websiteUrl}
              onPress={config.actions?.onWebsitePress}
              testID="website-item"
              showChevron={!!config.actions?.onWebsitePress}
            />
          )}
        </View>
      )}

      {hasMoreInfo && (
        <View style={styles.section}>
          <AboutSectionHeader title={texts.more || "More"} />
          <AboutSettingItem
            title={texts.moreApps || "More Apps"}
            onPress={config.actions?.onMoreAppsPress}
            testID="more-apps-item"
            showChevron={!!config.actions?.onMoreAppsPress}
          />
        </View>
      )}

      {hasLegalInfo && (
        <View style={styles.section}>
          <AboutSectionHeader title={texts.legal || "Legal"} />

          {appInfo.privacyPolicyUrl && (
            <AboutSettingItem
              title={texts.privacyPolicy || "Privacy Policy"}
              onPress={config.actions?.onPrivacyPress}
              testID="privacy-item"
              showChevron={!!config.actions?.onPrivacyPress}
            />
          )}

          {appInfo.termsOfServiceUrl && (
            <AboutSettingItem
              title={texts.termsOfService || "Terms of Service"}
              onPress={config.actions?.onTermsPress}
              testID="terms-item"
              showChevron={!!config.actions?.onTermsPress}
            />
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingVertical: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
    paddingHorizontal: 16,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});