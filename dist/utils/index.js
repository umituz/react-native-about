/**
 * Utility functions for About package
 * General purpose utilities for all applications
 */
/**
 * Create default configuration with overrides
 */
export const createDefaultConfig = (overrides = {}) => {
    const overridesObj = overrides;
    return {
        appInfo: {
            name: '',
            version: '1.0.0',
            description: '',
            developer: '',
            contactEmail: '',
            websiteUrl: '',
            websiteDisplay: '',
            moreAppsUrl: '',
            privacyPolicyUrl: '',
            termsOfServiceUrl: '',
            ...(overridesObj.appInfo || {}),
        },
        theme: {
            primary: '#007AFF',
            secondary: '#5856D6',
            background: '#FFFFFF',
            text: '#000000',
            border: '#E5E5E5',
            ...(overridesObj.theme || {}),
        },
        style: {
            containerStyle: {},
            itemStyle: {},
            textStyle: {},
            iconStyle: {},
            ...(overridesObj.style || {}),
        },
        actions: {
            onWebsitePress: undefined,
            onEmailPress: undefined,
            onPrivacyPress: undefined,
            onTermsPress: undefined,
            onMoreAppsPress: undefined,
            ...(overridesObj.actions || {}),
        },
    };
};
/**
 * Validate configuration object
 */
export const validateConfig = (config) => {
    if (!config || typeof config !== 'object') {
        return false;
    }
    const configObj = config;
    if (!configObj.appInfo || typeof configObj.appInfo !== 'object') {
        return false;
    }
    return true;
};
/**
 * Merge multiple configurations
 */
export const mergeConfigs = (...configs) => {
    return Object.assign({}, ...configs.filter(Boolean));
};
/**
 * Validate email format
 */
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
/**
 * Validate URL format
 */
export const isValidUrl = (url) => {
    try {
        new URL(url);
        return true;
    }
    catch {
        return false;
    }
};
/**
 * Open URL in external browser
 */
export const openUrl = async (url) => {
    try {
        if (typeof window !== 'undefined' && window.open) {
            window.open(url, '_blank');
            return true;
        }
        const { Linking } = await import('react-native');
        const canOpen = await Linking.canOpenURL(url);
        if (canOpen) {
            await Linking.openURL(url);
            return true;
        }
        return false;
    }
    catch (error) {
        if (__DEV__) {
            console.error('Failed to open URL:', error);
        }
        return false;
    }
};
/**
 * Send email
 */
export const sendEmail = async (email, subject) => {
    try {
        const { Linking } = await import('react-native');
        const url = subject
            ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
            : `mailto:${email}`;
        const canOpen = await Linking.canOpenURL(url);
        if (canOpen) {
            await Linking.openURL(url);
            return true;
        }
        return false;
    }
    catch (error) {
        if (__DEV__) {
            console.error('Failed to send email:', error);
        }
        return false;
    }
};
