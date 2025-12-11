import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { View, StyleSheet } from 'react-native';
import { AboutSettingItem } from './AboutSettingItem';
export const AboutContent = ({ appInfo, config, }) => {
    return (_jsxs(View, { style: styles.content, children: [appInfo.developer && (_jsx(AboutSettingItem, { title: "Developer", value: appInfo.developer, testID: "developer-item" })), appInfo.contactEmail && (_jsx(AboutSettingItem, { title: "Contact", value: appInfo.contactEmail, onPress: config.actions?.onEmailPress, testID: "email-item" })), appInfo.websiteUrl && (_jsx(AboutSettingItem, { title: "Website", value: appInfo.websiteDisplay || appInfo.websiteUrl, onPress: config.actions?.onWebsitePress, testID: "website-item" })), appInfo.moreAppsUrl && (_jsx(AboutSettingItem, { title: "More Apps", onPress: config.actions?.onMoreAppsPress, testID: "more-apps-item" })), appInfo.privacyPolicyUrl && (_jsx(AboutSettingItem, { title: "Privacy Policy", onPress: config.actions?.onPrivacyPress, testID: "privacy-item" })), appInfo.termsOfServiceUrl && (_jsx(AboutSettingItem, { title: "Terms of Service", onPress: config.actions?.onTermsPress, testID: "terms-item" }))] }));
};
const styles = StyleSheet.create({
    content: {
        paddingVertical: 8,
    },
});
