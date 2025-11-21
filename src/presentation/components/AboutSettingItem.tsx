/**
 * About Setting Item Component
 * Reusable setting item for about screen
 */

import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AtomicText, AtomicIcon } from "@umituz/react-native-design-system-atoms";
import { useAppDesignTokens, type DesignTokens } from "@umituz/react-native-design-system-theme";
import type { IconName } from "@umituz/react-native-design-system-atoms";

interface AboutSettingItemProps {
  /** Icon name from Lucide library */
  icon: IconName;
  /** Main title text */
  title: string;
  /** Optional description text */
  description?: string;
  /** Optional value to display on the right */
  value?: string;
  /** Callback when pressed */
  onPress?: () => void;
  /** Show chevron arrow on right (default: true if onPress exists) */
  showChevron?: boolean;
  /** Gradient colors for icon background */
  iconGradient?: string[];
  /** Make item look disabled */
  disabled?: boolean;
  /** Test ID for E2E testing */
  testID?: string;
}

export const AboutSettingItem: React.FC<AboutSettingItemProps> = ({
  icon,
  title,
  description,
  value,
  onPress,
  showChevron,
  iconGradient,
  disabled = false,
  testID,
}) => {
  const tokens = useAppDesignTokens();
  const styles = getStyles(tokens);

  // Default gradient colors
  const defaultGradient = [
    tokens.colors.primary + "20",
    tokens.colors.primary + "10",
  ];

  // Gradient colors for icon background
  const gradientColors = (iconGradient || defaultGradient) as unknown as readonly [
    string,
    string,
    ...string[]
  ];

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.7}
        style={[styles.listItem, disabled && styles.disabled]}
        testID={testID}
      >
        {/* Left: Gradient Icon */}
        <View style={styles.leftContainer}>
          <LinearGradient
            colors={gradientColors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.iconContainer}
          >
            <AtomicIcon name={icon} size="md" customColor={tokens.colors.primary} />
          </LinearGradient>
        </View>

        {/* Center: Title and Description */}
        <View style={styles.contentContainer}>
          <AtomicText
            type="bodyLarge"
            color={disabled ? "textDisabled" : "onSurface"}
            style={styles.title}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {title}
          </AtomicText>
          {description && (
            <AtomicText
              type="bodySmall"
              color="textSecondary"
              style={styles.description}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {description}
            </AtomicText>
          )}
        </View>

        {/* Right: Value, Chevron, or Custom Element */}
        {value ? (
          <View style={styles.rightContainer}>
            <AtomicText
              type="bodyMedium"
              color="textSecondary"
              style={styles.value}
              numberOfLines={2}
              textAlign="right"
            >
              {value}
            </AtomicText>
          </View>
        ) : (showChevron ?? true) ? (
          <View style={styles.rightContainer}>
            <AtomicIcon
              name="ChevronRight"
              size="sm"
              color="secondary"
              style={styles.chevron}
            />
          </View>
        ) : null}
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={[styles.listItem, disabled && styles.disabled]}
      testID={testID}
    >
      {/* Left: Gradient Icon */}
      <View style={styles.leftContainer}>
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.iconContainer}
        >
          <AtomicIcon name={icon} size="md" customColor={tokens.colors.primary} />
        </LinearGradient>
      </View>

      {/* Center: Title and Description */}
      <View style={styles.contentContainer}>
        <AtomicText
          type="bodyLarge"
          color={disabled ? "textDisabled" : "onSurface"}
          style={styles.title}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {title}
        </AtomicText>
        {description && (
          <AtomicText
            type="bodySmall"
            color="textSecondary"
            style={styles.description}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {description}
          </AtomicText>
        )}
      </View>

      {/* Right: Value */}
      {value && (
        <View style={styles.rightContainer}>
          <AtomicText
            type="bodyMedium"
            color="textSecondary"
            style={styles.value}
            numberOfLines={2}
            textAlign="right"
          >
            {value}
          </AtomicText>
        </View>
      )}
    </View>
  );
};

const getStyles = (tokens: DesignTokens) =>
  StyleSheet.create({
    listItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: tokens.spacing.md,
      paddingHorizontal: tokens.spacing.lg,
      minHeight: 72,
    },
    disabled: {
      opacity: 0.5,
    },
    leftContainer: {
      marginRight: tokens.spacing.md,
      justifyContent: "center",
    },
    iconContainer: {
      width: 48,
      height: 48,
      borderRadius: 24,
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      borderWidth: 1,
      borderColor: `${tokens.colors.primary}15`,
    },
    contentContainer: {
      flex: 1,
      justifyContent: "center",
      minWidth: 0, // Allows text to shrink
    },
    title: {
      fontSize: tokens.typography.bodyLarge.fontSize ?? 16,
      fontWeight: "600",
      flexShrink: 1,
      lineHeight: (tokens.typography.bodyLarge.fontSize ?? 16) * 1.4,
    },
    description: {
      fontSize: tokens.typography.bodySmall.fontSize ?? 14,
      marginTop: tokens.spacing.xs / 2,
      opacity: 0.7,
      flexShrink: 1,
      lineHeight: (tokens.typography.bodySmall.fontSize ?? 14) * 1.4,
    },
    rightContainer: {
      justifyContent: "center",
      alignItems: "flex-end",
      marginLeft: tokens.spacing.md,
      maxWidth: "50%",
      flexShrink: 0,
    },
    value: {
      fontWeight: "500",
      lineHeight: (tokens.typography.bodyMedium.fontSize ?? 16) * 1.4,
    },
    chevron: {
      opacity: 0.5,
    },
  });

