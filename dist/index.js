/**
 * React Native About
 *
 * 🎯 GENERAL PURPOSE PACKAGE for hundreds of applications
 * ❌ NO app-specific code
 * ✅ FULLY configurable and dynamic
 *
 * @version 1.7.0
 */
// Infrastructure exports
export { AboutRepository } from './infrastructure/repositories/AboutRepository';
// Presentation exports
export { AboutSettingItem } from './presentation/components/AboutSettingItem';
export { AboutHeader } from './presentation/components/AboutHeader';
export { AboutContent } from './presentation/components/AboutContent';
export { AboutScreen } from './presentation/screens/AboutScreen';
export { useAboutInfo } from './presentation/hooks/useAboutInfo';
// Utility exports
export * from './utils';
// Legacy exports for backward compatibility
export const About = {
    init: (config) => {
        if (__DEV__) {
            console.log('About initialized with dynamic config:', config);
        }
        return { success: true, config };
    },
    execute: (props) => {
        return {
            success: true,
            data: props,
            timestamp: new Date().toISOString()
        };
    },
    getInfo: (config) => {
        return {
            appName: config.appInfo.name || 'Unknown App',
            version: config.appInfo.version || '1.0.0',
            description: config.appInfo.description || '',
            developer: config.appInfo.developer || '',
            email: config.appInfo.contactEmail || '',
            website: config.appInfo.websiteUrl || '',
            privacyPolicy: config.appInfo.privacyPolicyUrl || '',
            termsOfService: config.appInfo.termsOfServiceUrl || ''
        };
    },
    updateConfig: (newConfig) => {
        if (__DEV__) {
            console.log('About config updated:', newConfig);
        }
        return { success: true, updated: newConfig };
    }
};
