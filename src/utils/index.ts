/**
 * Utility functions for About
 * General purpose utilities for all applications
 */

export const createDefaultConfig = (overrides: any = {}) => {
  return {
    // Default configuration - can be overridden by parent app
    appName: '',
    appVersion: '1.0.0',
    appDescription: '',
    developerName: '',
    developerEmail: '',
    website: '',
    privacyPolicy: '',
    termsOfService: '',
    ...overrides
  };
};

export const validateConfig = (config: any) => {
  // General validation - works for any app
  return config && typeof config === 'object';
};

export const mergeConfigs = (...configs: any[]) => {
  // Merge multiple configurations from parent app
  return Object.assign({}, ...configs);
};
