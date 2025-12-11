/**
 * Utility functions for About package
 * General purpose utilities for all applications
 */

/**
 * Create default configuration with overrides
 */
export const createDefaultConfig = (overrides: Record<string, unknown> = {}) => {
  const overridesObj = overrides as Record<string, Record<string, unknown>>;
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
export const validateConfig = (config: unknown): boolean => {
  if (!config || typeof config !== 'object') {
    return false;
  }
  
  const configObj = config as Record<string, unknown>;
  if (!configObj.appInfo || typeof configObj.appInfo !== 'object') {
    return false;
  }
  
  return true;
};

/**
 * Merge multiple configurations
 */
export const mergeConfigs = (...configs: Record<string, unknown>[]) => {
  return Object.assign({}, ...configs.filter(Boolean));
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate URL format
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Open URL in external browser
 */
export const openUrl = async (url: string): Promise<boolean> => {
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
  } catch (error) {
    if (__DEV__) {
      console.error('Failed to open URL:', error);
    }
    return false;
  }
};

/**
 * Send email
 */
export const sendEmail = async (email: string, subject?: string): Promise<boolean> => {
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
  } catch (error) {
    if (__DEV__) {
      console.error('Failed to send email:', error);
    }
    return false;
  }
};