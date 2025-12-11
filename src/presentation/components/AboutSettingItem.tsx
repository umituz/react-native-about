/**
 * About Setting Item Component
 * Reusable setting item for about screen
 * Fully configurable and generic
 */
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

export interface AboutSettingItemProps {
  /** Icon component (any React component) */
  icon?: React.ReactNode;
  /** Main title text */
  title: string;
  /** Optional description text */
  description?: string;
  /** Optional value to display on the right */
  value?: string;
  /** Callback when pressed */
  onPress?: () => void;
  /** Show chevron arrow on right */
  showChevron?: boolean;
  /** Custom container style */
  containerStyle?: ViewStyle;
  /** Custom title style */
  titleStyle?: TextStyle;
  /** Custom description style */
  descriptionStyle?: TextStyle;
  /** Custom value style */
  valueStyle?: TextStyle;
  /** Custom icon container style */
  iconContainerStyle?: ViewStyle;
  /** Make item look disabled */
  disabled?: boolean;
  /** Test ID for E2E testing */
  testID?: string;
  /** Custom chevron color */
  chevronColor?: string;
}

export const AboutSettingItem: React.FC<AboutSettingItemProps> = ({
  icon,
  title,
  description,
  value,
  onPress,
  showChevron = !!onPress,
  containerStyle,
  titleStyle,
  descriptionStyle,
  valueStyle,
  iconContainerStyle,
  disabled = false,
  testID,
  chevronColor = '#666',
}) => {
  const Container: React.ComponentType<React.ComponentProps<typeof TouchableOpacity | typeof View>> = onPress ? TouchableOpacity : View;
  
  return (
    <Container
      style={[styles.container, disabled && styles.disabled, containerStyle]}
      onPress={onPress}
      disabled={disabled}
      testID={testID}
    >
      {icon && (
        <View style={[styles.iconContainer, iconContainerStyle]}>
          {icon}
        </View>
      )}
      
      <View style={styles.content}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        {description && (
          <Text style={[styles.description, descriptionStyle]}>
            {description}
          </Text>
        )}
      </View>
      
      {value && (
        <Text style={[styles.value, valueStyle]}>{value}</Text>
      )}
      
      {showChevron && (
        <Text style={[styles.chevron, { color: chevronColor }]}>›</Text>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
  },
  disabled: {
    opacity: 0.5,
  },
  iconContainer: {
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  value: {
    fontSize: 16,
    color: '#666',
    marginRight: 8,
  },
  chevron: {
    fontSize: 20,
    fontWeight: '300',
  },
});