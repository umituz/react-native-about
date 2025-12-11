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
} from 'react-native';
import { AboutHeader } from '../components/AboutHeader';
import { AboutContent } from '../components/AboutContent';
import { useAboutInfo } from '../hooks/useAboutInfo';
import { AboutConfig } from '../../domain/entities/AppInfo';

export interface AboutScreenProps {
  /** Configuration for the about screen */
  config: AboutConfig;
  /** Custom container style */
  containerStyle?: ViewStyle;
  /** Custom header style */
  headerStyle?: ViewStyle;
  /** Custom title style */
  titleStyle?: ViewStyle;
  /** Custom version style */
  versionStyle?: ViewStyle;
  /** Show app header with name and version */
  showHeader?: boolean;
  /** Custom header component */
  headerComponent?: React.ReactNode;
  /** Custom footer component */
  footerComponent?: React.ReactNode;
  /** Test ID for E2E testing */
  testID?: string;
}

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
      <View style={styles.footer}>
        {footerComponent}
      </View>
    );
  }, [footerComponent]);

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
    return [styles.container, containerStyle];
  }, [containerStyle]);

  if (loading) {
    return (
      <View style={containerStyles}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={containerStyles}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  if (!appInfo) {
    return (
      <View style={containerStyles}>
        <Text style={styles.errorText}>No app information available</Text>
      </View>
    );
  }

  return (
    <ScrollView 
      style={containerStyles}
      testID={testID}
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
    backgroundColor: '#fff',
  },
  footer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 20,
  },
  errorText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#ff0000',
    marginTop: 20,
  },
});