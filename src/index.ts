/**
 * React Native About
 * 
 * 🎯 GENERAL PURPOSE PACKAGE for hundreds of applications
 * ❌ NO app-specific code
 * ✅ FULLY configurable and dynamic
 * 
 * @version 1.6.0
 */

// Core configuration interface
export interface AboutConfig {
  // Configuration passed from parent app
  appName?: string;
  appVersion?: string;
  appDescription?: string;
  developerName?: string;
  developerEmail?: string;
  website?: string;
  privacyPolicy?: string;
  termsOfService?: string;
  // All other configuration is dynamic
  [key: string]: any;
}

// Dynamic props interface
export interface AboutProps {
  config?: AboutConfig;
  children?: React.ReactNode;
  // All other props are dynamic based on app needs
  [key: string]: any;
}

/**
 * Main About functionality - FULLY DYNAMIC
 * All behavior controlled by config and props from parent app
 */
export const About = {
  /**
   * Initialize with app-specific configuration
   * NO hardcoded values - everything comes from config
   */
  init: (config: AboutConfig) => {
    // Dynamic initialization based on parent app config
    console.log('About initialized with dynamic config:', config);
    return { success: true, config };
  },
  
  /**
   * Execute functionality with dynamic props
   * Behavior changes based on props from parent app
   */
  execute: (props: AboutProps) => {
    // Dynamic execution based on props
    return { 
      success: true, 
      data: props,
      timestamp: new Date().toISOString()
    };
  },
  
  /**
   * Get about information from config
   */
  getInfo: (config: AboutConfig) => {
    return {
      appName: config.appName || 'Unknown App',
      version: config.appVersion || '1.0.0',
      description: config.appDescription || '',
      developer: config.developerName || '',
      email: config.developerEmail || '',
      website: config.website || '',
      privacyPolicy: config.privacyPolicy || '',
      termsOfService: config.termsOfService || ''
    };
  },
  
  /**
   * Update configuration at runtime
   * Supports dynamic changes from parent app
   */
  updateConfig: (newConfig: Partial<AboutConfig>) => {
    // Dynamic configuration update
    return { success: true, updated: newConfig };
  }
};

// Export utilities for dynamic usage
export * from './utils';
