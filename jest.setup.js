import '@testing-library/jest-dom';

// Mock react-native-web modules to avoid processing issues
jest.mock('react-native-web', () => ({
  View: ({ children, testID, ...props }) => {
    const React = require('react');
    return React.createElement('div', { 'data-testid': testID, ...props }, children);
  },
  Text: ({ children, testID, ...props }) => {
    const React = require('react');
    return React.createElement('span', { 'data-testid': testID, ...props }, children);
  },
  ScrollView: ({ children, testID, ...props }) => {
    const React = require('react');
    return React.createElement('div', { 'data-testid': testID, ...props }, children);
  },
  TouchableOpacity: ({ children, onPress, testID, ...props }) => {
    const React = require('react');
    return React.createElement('div', { 
      'data-testid': testID, 
      onClick: onPress,
      style: { cursor: 'pointer' },
      ...props 
    }, children);
  },
  StyleSheet: {
    create: (styles) => styles,
    absoluteFill: {},
    hairlineWidth: 1,
    flatten: (style) => style,
  },
  processColor: (color) => color,
  Platform: {
    OS: 'web',
    select: (obj) => obj.web || obj.default,
  },
}));

// Mock console methods for testing
global.__DEV__ = true;