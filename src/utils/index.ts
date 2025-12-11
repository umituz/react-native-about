/**
 * Utility functions for react-native-about
 * General purpose utilities
 */

export const createConfig = (overrides: any = {}) => {
  return {
    // Default configuration
    enabled: true,
    debug: false,
    ...overrides
  };
};

export const validateProps = (props: any) => {
  // General validation logic
  return props !== null && typeof props === 'object';
};
