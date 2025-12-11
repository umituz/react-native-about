/**
 * React Native About
 *
 * 🎯 GENERAL PURPOSE PACKAGE for hundreds of applications
 * ❌ NO app-specific code
 * ✅ FULLY configurable and dynamic
 *
 * @version 1.6.0
 */
export interface AboutConfig {
    appName?: string;
    appVersion?: string;
    appDescription?: string;
    developerName?: string;
    developerEmail?: string;
    website?: string;
    privacyPolicy?: string;
    termsOfService?: string;
    [key: string]: any;
}
export interface AboutProps {
    config?: AboutConfig;
    children?: React.ReactNode;
    [key: string]: any;
}
/**
 * Main About functionality - FULLY DYNAMIC
 * All behavior controlled by config and props from parent app
 */
export declare const About: {
    /**
     * Initialize with app-specific configuration
     * NO hardcoded values - everything comes from config
     */
    init: (config: AboutConfig) => {
        success: boolean;
        config: AboutConfig;
    };
    /**
     * Execute functionality with dynamic props
     * Behavior changes based on props from parent app
     */
    execute: (props: AboutProps) => {
        success: boolean;
        data: AboutProps;
        timestamp: string;
    };
    /**
     * Get about information from config
     */
    getInfo: (config: AboutConfig) => {
        appName: string;
        version: string;
        description: string;
        developer: string;
        email: string;
        website: string;
        privacyPolicy: string;
        termsOfService: string;
    };
    /**
     * Update configuration at runtime
     * Supports dynamic changes from parent app
     */
    updateConfig: (newConfig: Partial<AboutConfig>) => {
        success: boolean;
        updated: Partial<AboutConfig>;
    };
};
export * from './utils';
