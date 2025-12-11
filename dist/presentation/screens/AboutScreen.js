import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * About Screen Component
 * Main screen component for displaying app information
 * Fully configurable and generic
 */
import React from 'react';
import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import { AboutHeader } from '../components/AboutHeader';
import { AboutContent } from '../components/AboutContent';
import { useAboutInfo } from '../hooks/useAboutInfo';
export const AboutScreen = ({ config, containerStyle, headerStyle, titleStyle, versionStyle, showHeader = true, headerComponent, footerComponent, testID, }) => {
    const { appInfo, loading, error, initialize } = useAboutInfo({
        autoInit: true,
        initialConfig: config,
    });
    React.useEffect(() => {
        if (config && !appInfo && !loading && !error) {
            initialize(config);
        }
    }, [config, appInfo, loading, error, initialize]);
    if (loading) {
        return (_jsx(View, { style: [styles.container, containerStyle], children: _jsx(Text, { style: styles.loadingText, children: "Loading..." }) }));
    }
    if (error) {
        return (_jsx(View, { style: [styles.container, containerStyle], children: _jsxs(Text, { style: styles.errorText, children: ["Error: ", error] }) }));
    }
    if (!appInfo) {
        return (_jsx(View, { style: [styles.container, containerStyle], children: _jsx(Text, { style: styles.errorText, children: "No app information available" }) }));
    }
    const renderHeader = () => {
        if (headerComponent) {
            return headerComponent;
        }
        if (!showHeader) {
            return null;
        }
        return (_jsx(AboutHeader, { appInfo: appInfo, containerStyle: headerStyle, titleStyle: titleStyle, versionStyle: versionStyle }));
    };
    return (_jsxs(ScrollView, { style: [styles.container, containerStyle], testID: testID, children: [renderHeader(), _jsx(AboutContent, { appInfo: appInfo, config: config }), footerComponent && (_jsx(View, { style: styles.footer, children: footerComponent }))] }));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    footer: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderTopWidth: 1,
        borderTopColor: '#e5e5e5',
    },
    loadingText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#666',
        marginTop: 20,
    },
    errorText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#ff0000',
        marginTop: 20,
    },
});
