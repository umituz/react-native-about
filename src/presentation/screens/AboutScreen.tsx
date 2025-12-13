/**
 * About Screen Component
 * Main screen component for displaying app information
 * Fully configurable and generic
 * Optimized for performance and memory safety
 */
import React, { useMemo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { AboutHeader } from '../components/AboutHeader';
import { AboutContent } from '../components/AboutContent';
import { AboutConfig } from '../../domain/entities/AppInfo';

export interface AboutScreenProps {
  /** Configuration for the about screen */
  config: AboutConfig;
  /** Custom container style */
  containerStyle?: ViewStyle;
  /** Custom header style */
  headerStyle?: ViewStyle;
  /** Custom title style */
  titleStyle?: TextStyle;
  /** Custom version style */
  versionStyle?: TextStyle;
  /** Show app header with name and version */
  showHeader?: boolean;
  /** Custom header component */
  headerComponent?: React.ReactNode;
  /** Custom footer component */
  footerComponent?: React.ReactNode;
  /** Test ID for E2E testing */
  testID?: string;
}

import { useAboutInfo } from '../hooks/useAboutInfo';
import { useAppDesignTokens } from '@umituz/react-native-design-system-theme';

export const AboutScreen: React.FC<AboutScreenProps> = ({
  config,
  containerStyle,
  headerStyle,
  titleStyle,
  versionStyle,
  showHeader = true,
  headerComponent,
  footerComponent,
  testID,
}) => {
  const tokens = useAppDesignTokens();
  const colors = tokens.colors;

  const { appInfo, loading, error } = useAboutInfo({
    autoInit: true,
    initialConfig: config,
  });

  // Memoize header rendering to prevent unnecessary re-renders
  const renderHeader = useCallback(() => {
    if (headerComponent) {
      return headerComponent;
    }

    if (!showHeader || !appInfo) {
      return null;
    }

    return (
      <AboutHeader
        appInfo={appInfo}
        containerStyle={headerStyle}
        titleStyle={titleStyle}
        versionStyle={versionStyle}
      />
    );
  }, [headerComponent, showHeader, appInfo, headerStyle, titleStyle, versionStyle]);

  // Memoize footer rendering
  const renderFooter = useCallback(() => {
    if (!footerComponent) {
      return null;
    }

    return (
      <View style={[styles.footer, { borderTopColor: colors.border }]}>
        {footerComponent}
      </View>
    );
  }, [footerComponent, colors.border]);

  // Memoize content rendering
  const renderContent = useCallback(() => {
    if (!appInfo) {
      return null;
    }

    return (
      <AboutContent
        appInfo={appInfo}
        config={config}
      />
    );
  }, [appInfo, config]);

  // Memoize container style to prevent unnecessary re-renders
  const containerStyles = useMemo(() => {
    return [
      styles.container,
      { backgroundColor: colors.background },
      containerStyle
    ];
  }, [containerStyle, colors.background]);

  if (loading) {
    return (
      <View style={containerStyles} testID={testID}>
        <Text style={[styles.loadingText, { color: colors.textSecondary }]}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={containerStyles} testID={testID}>
        <Text style={[styles.errorText, { color: colors.error }]}>Error: {error}</Text>
      </View>
    );
  }

  if (!appInfo) {
    return (
      <View style={containerStyles} testID={testID}>
        <Text style={[styles.errorText, { color: colors.textSecondary }]}>No app information available</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={containerStyles}
      testID={testID}
      contentContainerStyle={{ paddingBottom: 32 }}
    >
      {renderHeader()}
      {renderContent()}
      {renderFooter()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderTopWidth: 1,
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
  errorText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
});