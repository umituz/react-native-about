/**
 * About Screen Component
 * Modern about screen with Material Design 3 compliance
 * 
 * Features:
 * - App version, contact, and developer information
 * - Beautiful gradient icons
 * - Section-based layout
 * - Fully customizable
 * 
 * Based on flashcard_maker implementation pattern
 */

import React from "react";
import { View, StyleSheet } from "react-native";
import { useLocalization } from "@umituz/react-native-localization";
import { useAppDesignTokens, type DesignTokens } from "@umituz/react-native-design-system-theme";
import { AtomicText } from "@umituz/react-native-design-system-atoms";
import { ScreenLayout } from "@umituz/react-native-design-system-organisms";
import { AboutSettingItem } from "../components/AboutSettingItem";
import { useAboutInfo } from "../hooks/useAboutInfo";
import { AboutRepository } from "../../infrastructure/repositories/AboutRepository";
import type { AppInfo } from "../../domain/entities/AppInfo";

export interface AboutScreenProps {
  /**
   * App information (optional - will use Constants.expoConfig if not provided)
   */
  appInfo?: Partial<AppInfo>;

  /**
   * Custom section header text for app info section
   */
  appInfoSectionTitle?: string;

  /**
   * Custom section header text for contact section
   */
  contactSectionTitle?: string;

  /**
   * Custom title text
   */
  title?: string;

  /**
   * Custom description text
   */
  description?: string;

  /**
   * Custom translation keys prefix (default: "about")
   */
  translationKeyPrefix?: string;

  /**
   * Show app version (default: true)
   */
  showVersion?: boolean;

  /**
   * Show more apps link (default: true if moreAppsUrl is provided)
   */
  showMoreApps?: boolean;

  /**
   * Show contact email (default: true if contactEmail is provided)
   */
  showContactEmail?: boolean;

  /**
   * Show website link (default: true if websiteUrl is provided)
   */
  showWebsite?: boolean;

  /**
   * Test ID for E2E testing
   */
  testID?: string;

  /**
   * Navigation prop (optional - for React Navigation compatibility)
   */
  navigation?: any;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({
  appInfo: customAppInfo,
  appInfoSectionTitle,
  contactSectionTitle,
  title,
  description,
  translationKeyPrefix = "about",
  showVersion = true,
  showMoreApps,
  showContactEmail,
  showWebsite,
  testID = "about-screen",
  navigation,
  ...rest
}) => {
  const { t } = useLocalization();
  const tokens = useAppDesignTokens();
  const styles = getStyles(tokens);

  // Create repository with custom app info
  const repository = React.useMemo(
    () => new AboutRepository(customAppInfo),
    [customAppInfo]
  );

  // Get app info from repository
  const appInfo = React.useMemo(() => repository.getAppInfo(), [repository]);

  // Use about hook
  const { openMoreApps, openContactEmail, openWebsite } = useAboutInfo({
    appInfo,
  });

  // Determine what to show
  const shouldShowMoreApps =
    showMoreApps !== false && !!appInfo.moreAppsUrl;
  const shouldShowContactEmail =
    showContactEmail !== false && !!appInfo.contactEmail;
  const shouldShowWebsite = showWebsite !== false && !!appInfo.websiteUrl;

  // Get gradient colors from tokens if available, otherwise use defaults
  const getGradient = (key: string) => {
    const gradients = (tokens.colors as any)?.settingGradients as Record<string, [string, string]> | undefined;
    if (gradients && gradients[key] && Array.isArray(gradients[key])) {
      return gradients[key] as unknown as string[];
    }
    // Default gradients
    const defaults: Record<string, string[]> = {
      info: [tokens.colors.primary + "20", tokens.colors.primary + "10"],
      heart: [tokens.colors.error + "20", tokens.colors.error + "10"],
      sound: [tokens.colors.success + "20", tokens.colors.success + "10"],
    };
    return defaults[key] || defaults.info;
  };

  return (
    <ScreenLayout testID={testID} hideScrollIndicator>
      {/* Header */}
      <View style={styles.header}>
        <AtomicText type="headlineLarge" color="primary">
          {title || t(`${translationKeyPrefix}.title`) || t("settings.about.title") || "About"}
        </AtomicText>
        <AtomicText
          type="bodyMedium"
          color="secondary"
          style={styles.headerSubtitle}
        >
          {description ||
            t(`${translationKeyPrefix}.description`) ||
            t("settings.about.description") ||
            "App information and contact details"}
        </AtomicText>
      </View>

      {/* App Information Section */}
      <View style={styles.section}>
        <AtomicText
          type="labelMedium"
          color="secondary"
          style={styles.sectionHeader}
        >
          {appInfoSectionTitle ||
            t(`${translationKeyPrefix}.appInfo`) ||
            t("settings.about.appInfo") ||
            "App Information"}
        </AtomicText>
        {showVersion && (
          <AboutSettingItem
            icon="Info"
            iconGradient={getGradient("info")}
            title={
              t(`${translationKeyPrefix}.appVersion`) ||
              t("settings.about.appVersion") ||
              "App Version"
            }
            value={`v${appInfo.version}`}
            showChevron={false}
            testID="app-version"
          />
        )}
        {shouldShowMoreApps && (
          <AboutSettingItem
            icon="Grid3x3"
            iconGradient={getGradient("heart")}
            title={
              t(`${translationKeyPrefix}.moreApps`) ||
              t("settings.about.moreApps") ||
              "More Apps"
            }
            description={
              t(`${translationKeyPrefix}.moreAppsDescription`) ||
              t("settings.about.moreAppsDescription") ||
              "Check out our other apps"
            }
            onPress={openMoreApps}
            testID="more-apps"
          />
        )}
      </View>

      {/* Contact Section */}
      <View style={styles.section}>
        <AtomicText
          type="labelMedium"
          color="secondary"
          style={styles.sectionHeader}
        >
          {contactSectionTitle ||
            t(`${translationKeyPrefix}.contact`) ||
            t("settings.about.contact") ||
            "Contact"}
        </AtomicText>
        {shouldShowContactEmail && (
          <AboutSettingItem
            icon="Mail"
            iconGradient={getGradient("sound")}
            title={
              t(`${translationKeyPrefix}.contactEmail`) ||
              t("settings.about.contactEmail") ||
              "Contact Email"
            }
            value={appInfo.contactEmail}
            onPress={openContactEmail}
            testID="contact-email"
          />
        )}
        {shouldShowWebsite && (
          <AboutSettingItem
            icon="Globe"
            iconGradient={getGradient("info")}
            title={
              t(`${translationKeyPrefix}.website`) ||
              t("settings.about.website") ||
              "Website"
            }
            value={appInfo.websiteDisplay || appInfo.websiteUrl}
            onPress={openWebsite}
            testID="website"
          />
        )}
      </View>
    </ScreenLayout>
  );
};

const getStyles = (tokens: DesignTokens) =>
  StyleSheet.create({
    header: {
      paddingBottom: tokens.spacing.lg,
      paddingTop: tokens.spacing.md,
      paddingHorizontal: tokens.spacing.lg,
    },
    headerSubtitle: {
      marginTop: tokens.spacing.sm,
      lineHeight: 20,
      opacity: 0.8,
    },
    section: {
      marginBottom: tokens.spacing.xl,
      paddingTop: tokens.spacing.sm,
    },
    sectionHeader: {
      paddingHorizontal: tokens.spacing.lg,
      paddingTop: tokens.spacing.lg,
      paddingBottom: tokens.spacing.md,
      textTransform: "uppercase",
      letterSpacing: 1,
      fontWeight: "600",
      fontSize: 12,
    },
  });
