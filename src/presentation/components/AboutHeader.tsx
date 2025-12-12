/**
 * About Header Component
 * Displays app name, version, and description
 */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { AppInfo } from '../../domain/entities/AppInfo';

export interface AboutHeaderProps {
  /** App information to display */
  appInfo: AppInfo;
  /** Custom container style */
  containerStyle?: ViewStyle;
  /** Custom title style */
  titleStyle?: TextStyle;
  /** Custom version style */
  versionStyle?: TextStyle;
  /** Custom description style */
  descriptionStyle?: TextStyle;
  /** Test ID for testing */
  testID?: string;
}

export const AboutHeader: React.FC<AboutHeaderProps> = ({
  appInfo,
  containerStyle,
  titleStyle,
  versionStyle,
  descriptionStyle,
  testID,
}) => {
  return (
    <View style={[styles.header, containerStyle]} testID={testID}>
      <Text style={[styles.appName, titleStyle]}>{appInfo.name}</Text>
      <Text style={[styles.version, versionStyle]}>Version {appInfo.version}</Text>
      {appInfo.description && (
        <Text style={[styles.description, descriptionStyle]}>
          {appInfo.description}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  version: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
});