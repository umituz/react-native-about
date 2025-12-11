/**
 * About Screen Component
 * Main screen component for displaying app information
 * Fully configurable and generic
 */
import React from 'react';
import { ViewStyle } from 'react-native';
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
export declare const AboutScreen: React.FC<AboutScreenProps>;
