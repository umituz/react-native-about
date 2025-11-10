/**
 * About Screen Component
 * Display app information, version, and legal links
 */

import React from "react";
import { View, ScrollView, StyleSheet, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppDesignTokens } from "@umituz/react-native-theme";
import { useLocalization } from "@umituz/react-native-localization";
import { AtomicText, AtomicButton } from "@umituz/react-native-design-system";
import Constants from "expo-constants";

export interface AboutScreenProps {
  /**
   * App name to display
   */
  appName?: string;
  /**
   * App version (defaults to Constants.expoConfig.version)
   */
  version?: string;
  /**
   * Build number (defaults to Constants.expoConfig.ios.buildNumber or Constants.expoConfig.android.versionCode)
   */
  buildNumber?: string;
  /**
   * Terms of Service URL
   */
  termsUrl?: string;
  /**
   * Privacy Policy URL
   */
  privacyUrl?: string;
  /**
   * Custom footer text
   */
  footerText?: string;
  /**
   * Callback when Terms of Service is pressed
   */
  onTermsPress?: () => void;
  /**
   * Callback when Privacy Policy is pressed
   */
  onPrivacyPress?: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({
  appName,
  version,
  buildNumber,
  termsUrl,
  privacyUrl,
  footerText,
  onTermsPress,
  onPrivacyPress,
}) => {
  const tokens = useAppDesignTokens();
  const { t } = useLocalization();
  const insets = useSafeAreaInsets();

  const appVersion = version || Constants.expoConfig?.version || "1.0.0";
  const appBuildNumber =
    buildNumber ||
    Constants.expoConfig?.ios?.buildNumber ||
    Constants.expoConfig?.android?.versionCode ||
    "1";
  const displayAppName =
    appName || Constants.expoConfig?.name || t("about.appName") || "App";

  const handleTermsPress = async () => {
    if (onTermsPress) {
      onTermsPress();
    } else if (termsUrl) {
      await Linking.openURL(termsUrl);
    }
  };

  const handlePrivacyPress = async () => {
    if (onPrivacyPress) {
      onPrivacyPress();
    } else if (privacyUrl) {
      await Linking.openURL(privacyUrl);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: tokens.colors.backgroundPrimary,
          paddingTop: insets.top,
        },
      ]}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <AtomicText
            type="displaySmall"
            color="primary"
            style={styles.appName}
          >
            {displayAppName}
          </AtomicText>

          <AtomicText type="bodyMedium" color="secondary" style={styles.version}>
            {t("about.version") || "Version"} {appVersion}
            {appBuildNumber ? ` (${appBuildNumber})` : ""}
          </AtomicText>

          {(termsUrl || onTermsPress) && (
            <View style={styles.buttonContainer}>
              <AtomicButton
                variant="text"
                onPress={handleTermsPress}
                fullWidth
                style={styles.linkButton}
              >
                {t("about.termsOfService") || "Terms of Service"}
              </AtomicButton>
            </View>
          )}

          {(privacyUrl || onPrivacyPress) && (
            <View style={styles.buttonContainer}>
              <AtomicButton
                variant="text"
                onPress={handlePrivacyPress}
                fullWidth
                style={styles.linkButton}
              >
                {t("about.privacyPolicy") || "Privacy Policy"}
              </AtomicButton>
            </View>
          )}

          {footerText && (
            <AtomicText
              type="bodySmall"
              color="secondary"
              style={styles.footer}
            >
              {footerText}
            </AtomicText>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  appName: {
    marginBottom: 8,
    textAlign: "center",
  },
  version: {
    marginBottom: 32,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 12,
  },
  linkButton: {
    justifyContent: "flex-start",
  },
  footer: {
    marginTop: 32,
    textAlign: "center",
  },
});

