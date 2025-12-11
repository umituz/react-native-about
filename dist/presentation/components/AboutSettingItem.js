import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AtomicText, AtomicIcon } from "@umituz/react-native-design-system-atoms";
import { useAppDesignTokens } from "@umituz/react-native-design-system-theme";
export const AboutSettingItem = ({ icon, title, description, value, onPress, showChevron, iconGradient, disabled = false, testID, }) => {
    const tokens = useAppDesignTokens();
    const styles = getStyles(tokens);
    // Default gradient colors
    const defaultGradient = [
        tokens.colors.primary + "20",
        tokens.colors.primary + "10",
    ];
    // Gradient colors for icon background
    const gradientColors = (iconGradient || defaultGradient);
    if (onPress) {
        return (_jsxs(TouchableOpacity, { onPress: onPress, disabled: disabled, activeOpacity: 0.7, style: [styles.listItem, disabled && styles.disabled], testID: testID, children: [_jsx(View, { style: styles.leftContainer, children: _jsx(LinearGradient, { colors: gradientColors, start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, style: styles.iconContainer, children: _jsx(AtomicIcon, { name: icon, size: "md", customColor: tokens.colors.primary }) }) }), _jsxs(View, { style: styles.contentContainer, children: [_jsx(AtomicText, { type: "bodyLarge", color: disabled ? "textDisabled" : "onSurface", style: styles.title, numberOfLines: 2, ellipsizeMode: "tail", children: title }), description && (_jsx(AtomicText, { type: "bodySmall", color: "textSecondary", style: styles.description, numberOfLines: 2, ellipsizeMode: "tail", children: description }))] }), value ? (_jsx(View, { style: styles.rightContainer, children: _jsx(AtomicText, { type: "bodyMedium", color: "textSecondary", style: styles.value, numberOfLines: 2, textAlign: "right", children: value }) })) : (showChevron !== null && showChevron !== void 0 ? showChevron : true) ? (_jsx(View, { style: styles.rightContainer, children: _jsx(AtomicIcon, { name: "ChevronRight", size: "sm", color: "secondary", style: styles.chevron }) })) : null] }));
    }
    return (_jsxs(View, { style: [styles.listItem, disabled && styles.disabled], testID: testID, children: [_jsx(View, { style: styles.leftContainer, children: _jsx(LinearGradient, { colors: gradientColors, start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, style: styles.iconContainer, children: _jsx(AtomicIcon, { name: icon, size: "md", customColor: tokens.colors.primary }) }) }), _jsxs(View, { style: styles.contentContainer, children: [_jsx(AtomicText, { type: "bodyLarge", color: disabled ? "textDisabled" : "onSurface", style: styles.title, numberOfLines: 2, ellipsizeMode: "tail", children: title }), description && (_jsx(AtomicText, { type: "bodySmall", color: "textSecondary", style: styles.description, numberOfLines: 2, ellipsizeMode: "tail", children: description }))] }), value && (_jsx(View, { style: styles.rightContainer, children: _jsx(AtomicText, { type: "bodyMedium", color: "textSecondary", style: styles.value, numberOfLines: 2, textAlign: "right", children: value }) }))] }));
};
const getStyles = (tokens) => {
    var _a, _b, _c, _d, _e;
    return StyleSheet.create({
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
            fontSize: (_a = tokens.typography.bodyLarge.fontSize) !== null && _a !== void 0 ? _a : 16,
            fontWeight: "600",
            flexShrink: 1,
            lineHeight: ((_b = tokens.typography.bodyLarge.fontSize) !== null && _b !== void 0 ? _b : 16) * 1.4,
        },
        description: {
            fontSize: (_c = tokens.typography.bodySmall.fontSize) !== null && _c !== void 0 ? _c : 14,
            marginTop: tokens.spacing.xs / 2,
            opacity: 0.7,
            flexShrink: 1,
            lineHeight: ((_d = tokens.typography.bodySmall.fontSize) !== null && _d !== void 0 ? _d : 14) * 1.4,
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
            lineHeight: ((_e = tokens.typography.bodyMedium.fontSize) !== null && _e !== void 0 ? _e : 16) * 1.4,
        },
        chevron: {
            opacity: 0.5,
        },
    });
};
