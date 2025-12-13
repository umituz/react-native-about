import React from 'react';
import { View, Text, Pressable, StyleSheet, ViewStyle } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAppDesignTokens } from '@umituz/react-native-design-system-theme';
import { useLocalization } from '@umituz/react-native-localization';
import { AboutConfig } from '../../domain/entities/AppInfo';

export interface AboutSectionProps {
    config?: AboutConfig;
    onPress?: () => void;
    containerStyle?: ViewStyle;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
    config,
    onPress,
    containerStyle,
}) => {
    const navigation = useNavigation();
    const tokens = useAppDesignTokens();
    const { t } = useLocalization();
    const colors = tokens.colors;

    const route = config?.route || config?.defaultRoute || 'About';
    const title = config?.title || t('settings.about.title');
    const description = config?.description || t('settings.about.description');

    const handlePress = () => {
        if (onPress) {
            onPress();
        } else {
            navigation.navigate(route as never);
        }
    };

    return (
        <View style={[styles.sectionContainer, { backgroundColor: colors.surface }, containerStyle]}>
            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>{t('settings.about.title')}</Text>
            <Pressable
                style={({ pressed }) => [
                    styles.itemContainer,
                    {
                        backgroundColor: pressed ? `${colors.primary}08` : 'transparent',
                    },
                ]}
                onPress={handlePress}
            >
                <View style={styles.content}>
                    <View
                        style={[
                            styles.iconContainer,
                            { backgroundColor: `${colors.primary}15` },
                        ]}
                    >
                        <Feather name="info" size={24} color={colors.primary} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.title, { color: colors.textPrimary }]}>{title}</Text>
                        <Text style={[styles.description, { color: colors.textSecondary }]}>
                            {description}
                        </Text>
                    </View>
                    <Feather name="chevron-right" size={20} color={colors.textSecondary} />
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginBottom: 16,
        borderRadius: 12,
        overflow: 'hidden',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 8,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
        minHeight: 72,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
        marginRight: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
    },
});
