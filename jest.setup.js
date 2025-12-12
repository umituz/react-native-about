// Mock StyleSheet to avoid color processing issues
jest.mock('react-native', () => ({
  View: ({ children }) => children,
  Text: ({ children }) => children,
  ScrollView: ({ children }) => children,
  TouchableOpacity: ({ children, onPress }) => ({ props: { children, onPress } }),
  StyleSheet: {
    create: (styles) => styles,
  },
  Linking: {
    canOpenURL: jest.fn(() => Promise.resolve(true)),
    openURL: jest.fn(() => Promise.resolve()),
  },
  processColor: (color) => color,
}));

// Mock console methods for testing
global.__DEV__ = true;