/**
 * About Setting Item Component
 * Reusable setting item for about screen
 */
import React from "react";
import type { IconName } from "@umituz/react-native-design-system-atoms";
interface AboutSettingItemProps {
    /** Icon name from Lucide library */
    icon: IconName;
    /** Main title text */
    title: string;
    /** Optional description text */
    description?: string;
    /** Optional value to display on the right */
    value?: string;
    /** Callback when pressed */
    onPress?: () => void;
    /** Show chevron arrow on right (default: true if onPress exists) */
    showChevron?: boolean;
    /** Gradient colors for icon background */
    iconGradient?: string[];
    /** Make item look disabled */
    disabled?: boolean;
    /** Test ID for E2E testing */
    testID?: string;
}
export declare const AboutSettingItem: React.FC<AboutSettingItemProps>;
export {};
