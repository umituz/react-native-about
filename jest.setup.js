import '@testing-library/jest-dom';

// Mock react-native-web modules to avoid processing issues
jest.mock('react-native-web', () => {
  const React = require('react');

  const createMockComponent = (tag, defaultProps = {}) => {
    return ({ children, testID, style, ...props }) => {
      const allProps = {
        'data-testid': testID,
        style: style || {},
        ...defaultProps,
        ...props
      };
      return React.createElement(tag, allProps, children);
    };
  };

  const mockRN = {
    View: createMockComponent('div'),
    Text: createMockComponent('span'),
    ScrollView: createMockComponent('div'),
    TouchableOpacity: ({ children, onPress, testID, style, ...props }) => {
      return React.createElement('div', {
        'data-testid': testID,
        onClick: onPress,
        onPress: onPress, // Keep onPress for React Native compatibility
        style: { cursor: 'pointer', ...style },
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
  };
  return mockRN;
});

// Explicitly mock react-native to ensure it uses the web mock
jest.mock('react-native', () => {
  const React = require('react');

  const createMockComponent = (tag, defaultProps = {}) => {
    return ({ children, testID, style, ...props }) => {
      const allProps = {
        'data-testid': testID,
        style: style || {},
        ...defaultProps,
        ...props
      };
      return React.createElement(tag, allProps, children);
    };
  };

  const mockRN = {
    View: createMockComponent('div'),
    Text: createMockComponent('span'),
    ScrollView: createMockComponent('div'),
    TouchableOpacity: ({ children, onPress, testID, style, ...props }) => {
      return React.createElement('div', {
        'data-testid': testID,
        onClick: onPress,
        onPress: onPress, // Keep onPress for React Native compatibility
        style: { cursor: 'pointer', ...style },
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
  };
  return mockRN;
});

console.log('Jest setup loaded - mocking react-native-web and react-native');

// Mock design system theme
jest.mock('@umituz/react-native-design-system-theme', () => ({
  useAppDesignTokens: () => ({
    colors: {
      surface: '#ffffff',
      background: '#f5f5f5',
      textPrimary: '#000000',
      textSecondary: '#666666',
      border: '#e0e0e0',
      primary: '#007aff',
      text: '#000000',
    },
  }),
}));

// Mock console methods for testing
global.__DEV__ = true;