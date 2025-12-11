/**
 * About Header Component
 * Displays app name, version, and description
 */
import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
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
}
export declare const AboutHeader: React.FC<AboutHeaderProps>;
