/**
 * Utility functions for About
 * General purpose utilities for all applications
 */
export const createDefaultConfig = (overrides = {}) => {
    return Object.assign({ 
        // Default configuration - can be overridden by parent app
        appName: '', appVersion: '1.0.0', appDescription: '', developerName: '', developerEmail: '', website: '', privacyPolicy: '', termsOfService: '' }, overrides);
};
export const validateConfig = (config) => {
    // General validation - works for any app
    return config && typeof config === 'object';
};
export const mergeConfigs = (...configs) => {
    // Merge multiple configurations from parent app
    return Object.assign({}, ...configs);
};
