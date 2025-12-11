import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TouchableOpacity, View, Text, StyleSheet, } from 'react-native';
export const AboutSettingItem = ({ icon, title, description, value, onPress, showChevron = !!onPress, containerStyle, titleStyle, descriptionStyle, valueStyle, iconContainerStyle, disabled = false, testID, chevronColor = '#666', }) => {
    const Container = onPress ? TouchableOpacity : View;
    return (_jsxs(Container, { style: [styles.container, disabled && styles.disabled, containerStyle], onPress: onPress, disabled: disabled, testID: testID, children: [icon && (_jsx(View, { style: [styles.iconContainer, iconContainerStyle], children: icon })), _jsxs(View, { style: styles.content, children: [_jsx(Text, { style: [styles.title, titleStyle], children: title }), description && (_jsx(Text, { style: [styles.description, descriptionStyle], children: description }))] }), value && (_jsx(Text, { style: [styles.value, valueStyle], children: value })), showChevron && (_jsx(Text, { style: [styles.chevron, { color: chevronColor }], children: "\u203A" }))] }));
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
