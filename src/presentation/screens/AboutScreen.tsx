/**
 * About Screen Component
 * Main screen component for displaying app information
 * Fully configurable and generic
 */
import React from 'react';
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
  const { appInfo, loading, error, initialize } = useAboutInfo({
    autoInit: true,
    initialConfig: config,
  });

  React.useEffect(() => {
    if (config && !appInfo && !loading && !error) {
      initialize(config);
    }
  }, [config, appInfo, loading, error, initialize]);

  if (loading) {
    return (
      <View style={[styles.container, containerStyle]}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, containerStyle]}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  if (!appInfo) {
    return (
      <View style={[styles.container, containerStyle]}>
        <Text style={styles.errorText}>No app information available</Text>
      </View>
    );
  }

  const renderHeader = () => {
    if (headerComponent) {
      return headerComponent;
    }

    if (!showHeader) {
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
  };

  return (
    <ScrollView 
      style={[styles.container, containerStyle]}
      testID={testID}
    >
      {renderHeader()}
      
      <AboutContent
        appInfo={appInfo}
        config={config}
      />
      
      {footerComponent && (
        <View style={styles.footer}>
          {footerComponent}
        </View>
      )}
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