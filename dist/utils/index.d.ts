/**
 * Utility functions for About package
 * General purpose utilities for all applications
 */
/**
 * Create default configuration with overrides
 */
export declare const createDefaultConfig: (overrides?: Record<string, unknown>) => {
    appInfo: {
        name: string;
        version: string;
        description: string;
        developer: string;
        contactEmail: string;
        websiteUrl: string;
        websiteDisplay: string;
        moreAppsUrl: string;
        privacyPolicyUrl: string;
        termsOfServiceUrl: string;
    };
    theme: {
        primary: string;
        secondary: string;
        background: string;
        text: string;
        border: string;
    };
    style: {
        containerStyle: {};
        itemStyle: {};
        textStyle: {};
        iconStyle: {};
    };
    actions: {
        onWebsitePress: any;
        onEmailPress: any;
        onPrivacyPress: any;
        onTermsPress: any;
        onMoreAppsPress: any;
    };
};
/**
 * Validate configuration object
 */
export declare const validateConfig: (config: unknown) => boolean;
/**
 * Merge multiple configurations
 */
export declare const mergeConfigs: (...configs: Record<string, unknown>[]) => any;
/**
 * Validate email format
 */
export declare const isValidEmail: (email: string) => boolean;
/**
 * Validate URL format
 */
export declare const isValidUrl: (url: string) => boolean;
/**
 * Open URL in external browser
 */
export declare const openUrl: (url: string) => Promise<boolean>;
/**
 * Send email
 */
export declare const sendEmail: (email: string, subject?: string) => Promise<boolean>;
