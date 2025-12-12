// Mock React Native modules
jest.mock('react-native', () => ({
  View: 'View',
  Text: 'Text',
  ScrollView: 'ScrollView',
  TouchableOpacity: 'TouchableOpacity',
  StyleSheet: {
    create: jest.fn(() => ({})),
  },
  Linking: {
    canOpenURL: jest.fn(),
    openURL: jest.fn(),
  },
}));

// Mock console methods for testing
global.__DEV__ = true;