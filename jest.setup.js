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

  return {
    View: createMockComponent('div'),
    Text: createMockComponent('span'),
    ScrollView: createMockComponent('div'),
    TouchableOpacity: ({ children, onPress, testID, style, ...props }) => {
      return React.createElement('div', { 
        'data-testid': testID, 
        onClick: onPress,
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
});

// Mock console methods for testing
global.__DEV__ = true;