/**
 * About Setting Item Component
 * Reusable setting item for about screen
 * Fully configurable and generic
 */
import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
export interface AboutSettingItemProps {
    /** Icon component (any React component) */
    icon?: React.ReactNode;
    /** Main title text */
    title: string;
    /** Optional description text */
    description?: string;
    /** Optional value to display on the right */
    value?: string;
    /** Callback when pressed */
    onPress?: () => void;
    /** Show chevron arrow on right */
    showChevron?: boolean;
    /** Custom container style */
    containerStyle?: ViewStyle;
    /** Custom title style */
    titleStyle?: TextStyle;
    /** Custom description style */
    descriptionStyle?: TextStyle;
    /** Custom value style */
    valueStyle?: TextStyle;
    /** Custom icon container style */
    iconContainerStyle?: ViewStyle;
    /** Make item look disabled */
    disabled?: boolean;
    /** Test ID for E2E testing */
    testID?: string;
    /** Custom chevron color */
    chevronColor?: string;
}
export declare const AboutSettingItem: React.FC<AboutSettingItemProps>;
