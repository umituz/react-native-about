import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { View, Text, StyleSheet, } from 'react-native';
export const AboutHeader = ({ appInfo, containerStyle, titleStyle, versionStyle, descriptionStyle, }) => {
    return (_jsxs(View, { style: [styles.header, containerStyle], children: [_jsx(Text, { style: [styles.appName, titleStyle], children: appInfo.name }), _jsxs(Text, { style: [styles.version, versionStyle], children: ["Version ", appInfo.version] }), appInfo.description && (_jsx(Text, { style: [styles.description, descriptionStyle], children: appInfo.description }))] }));
};
const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        paddingVertical: 24,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e5e5',
    },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 4,
    },
    version: {
        fontSize: 16,
        color: '#666',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        lineHeight: 20,
    },
});
