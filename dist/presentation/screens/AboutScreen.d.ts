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
export declare const AboutScreen: React.FC<AboutScreenProps>;
