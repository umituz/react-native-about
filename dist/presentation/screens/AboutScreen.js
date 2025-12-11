var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * About Screen Component
 * Modern about screen with Material Design 3 compliance
 *
 * Features:
 * - App version, contact, and developer information
 * - Beautiful gradient icons
 * - Section-based layout
 * - Fully customizable
 *
 * Based on flashcard_maker implementation pattern
 */
import React from "react";
import { View, StyleSheet } from "react-native";
import { useLocalization } from "@umituz/react-native-localization";
import { useAppDesignTokens } from "@umituz/react-native-design-system-theme";
import { AtomicText } from "@umituz/react-native-design-system-atoms";
import { ScreenLayout } from "@umituz/react-native-design-system-organisms";
import { AboutSettingItem } from "../components/AboutSettingItem";
import { useAboutInfo } from "../hooks/useAboutInfo";
import { AboutRepository } from "../../infrastructure/repositories/AboutRepository";
export const AboutScreen = (_a) => {
    var { appInfo: customAppInfo, appInfoSectionTitle, contactSectionTitle, title, description, translationKeyPrefix = "about", showVersion = true, showMoreApps, showContactEmail, showWebsite, testID = "about-screen", navigation } = _a, rest = __rest(_a, ["appInfo", "appInfoSectionTitle", "contactSectionTitle", "title", "description", "translationKeyPrefix", "showVersion", "showMoreApps", "showContactEmail", "showWebsite", "testID", "navigation"]);
    const { t } = useLocalization();
    const tokens = useAppDesignTokens();
    const styles = getStyles(tokens);
    // Create repository with custom app info
    const repository = React.useMemo(() => new AboutRepository(customAppInfo), [customAppInfo]);
    // Get app info from repository
    const appInfo = React.useMemo(() => repository.getAppInfo(), [repository]);
    // Use about hook
    const { openMoreApps, openContactEmail, openWebsite } = useAboutInfo({
        appInfo,
    });
    // Determine what to show
    const shouldShowMoreApps = showMoreApps !== false && !!appInfo.moreAppsUrl;
    const shouldShowContactEmail = showContactEmail !== false && !!appInfo.contactEmail;
    const shouldShowWebsite = showWebsite !== false && !!appInfo.websiteUrl;
    // Get gradient colors from tokens if available, otherwise use defaults
    const getGradient = (key) => {
        var _a;
        const gradients = (_a = tokens.colors) === null || _a === void 0 ? void 0 : _a.settingGradients;
        if (gradients && gradients[key] && Array.isArray(gradients[key])) {
            return gradients[key];
        }
        // Default gradients
        const defaults = {
            info: [tokens.colors.primary + "20", tokens.colors.primary + "10"],
            heart: [tokens.colors.error + "20", tokens.colors.error + "10"],
            sound: [tokens.colors.success + "20", tokens.colors.success + "10"],
        };
        return defaults[key] || defaults.info;
    };
    return (_jsxs(ScreenLayout, { testID: testID, hideScrollIndicator: true, children: [_jsxs(View, { style: styles.header, children: [_jsx(AtomicText, { type: "headlineLarge", color: "primary", children: title || t(`${translationKeyPrefix}.title`) || t("settings.about.title") || "About" }), _jsx(AtomicText, { type: "bodyMedium", color: "secondary", style: styles.headerSubtitle, children: description ||
                            t(`${translationKeyPrefix}.description`) ||
                            t("settings.about.description") ||
                            "App information and contact details" })] }), _jsxs(View, { style: styles.section, children: [_jsx(AtomicText, { type: "labelMedium", color: "secondary", style: styles.sectionHeader, children: appInfoSectionTitle ||
                            t(`${translationKeyPrefix}.appInfo`) ||
                            t("settings.about.appInfo") ||
                            "App Information" }), showVersion && (_jsx(AboutSettingItem, { icon: "Info", iconGradient: getGradient("info"), title: t(`${translationKeyPrefix}.appVersion`) ||
                            t("settings.about.appVersion") ||
                            "App Version", value: `v${appInfo.version}`, showChevron: false, testID: "app-version" })), shouldShowMoreApps && (_jsx(AboutSettingItem, { icon: "Grid3x3", iconGradient: getGradient("heart"), title: t(`${translationKeyPrefix}.moreApps`) ||
                            t("settings.about.moreApps") ||
                            "More Apps", description: t(`${translationKeyPrefix}.moreAppsDescription`) ||
                            t("settings.about.moreAppsDescription") ||
                            "Check out our other apps", onPress: openMoreApps, testID: "more-apps" }))] }), _jsxs(View, { style: styles.section, children: [_jsx(AtomicText, { type: "labelMedium", color: "secondary", style: styles.sectionHeader, children: contactSectionTitle ||
                            t(`${translationKeyPrefix}.contact`) ||
                            t("settings.about.contact") ||
                            "Contact" }), shouldShowContactEmail && (_jsx(AboutSettingItem, { icon: "Mail", iconGradient: getGradient("sound"), title: t(`${translationKeyPrefix}.contactEmail`) ||
                            t("settings.about.contactEmail") ||
                            "Contact Email", value: appInfo.contactEmail, onPress: openContactEmail, testID: "contact-email" })), shouldShowWebsite && (_jsx(AboutSettingItem, { icon: "Globe", iconGradient: getGradient("info"), title: t(`${translationKeyPrefix}.website`) ||
                            t("settings.about.website") ||
                            "Website", value: appInfo.websiteDisplay || appInfo.websiteUrl, onPress: openWebsite, testID: "website" }))] })] }));
};
const getStyles = (tokens) => StyleSheet.create({
    header: {
        paddingBottom: tokens.spacing.lg,
        paddingTop: tokens.spacing.md,
        paddingHorizontal: tokens.spacing.lg,
    },
    headerSubtitle: {
        marginTop: tokens.spacing.sm,
        lineHeight: 20,
        opacity: 0.8,
    },
    section: {
        marginBottom: tokens.spacing.xl,
        paddingTop: tokens.spacing.sm,
    },
    sectionHeader: {
        paddingHorizontal: tokens.spacing.lg,
        paddingTop: tokens.spacing.lg,
        paddingBottom: tokens.spacing.md,
        textTransform: "uppercase",
        letterSpacing: 1,
        fontWeight: "600",
        fontSize: 12,
    },
});
