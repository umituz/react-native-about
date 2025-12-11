/**
 * React Native About
 *
 * 🎯 GENERAL PURPOSE PACKAGE for hundreds of applications
 * ❌ NO app-specific code
 * ✅ FULLY configurable and dynamic
 *
 * @version 1.7.0
 */
export type { AppInfo, AboutConfig } from './domain/entities/AppInfo';
export type { IAboutRepository } from './domain/repositories/IAboutRepository';
export { AboutRepository } from './infrastructure/repositories/AboutRepository';
export { AboutSettingItem } from './presentation/components/AboutSettingItem';
export { AboutHeader } from './presentation/components/AboutHeader';
export { AboutContent } from './presentation/components/AboutContent';
export { AboutScreen } from './presentation/screens/AboutScreen';
export type { AboutSettingItemProps } from './presentation/components/AboutSettingItem';
export type { AboutHeaderProps } from './presentation/components/AboutHeader';
export type { AboutContentProps } from './presentation/components/AboutContent';
export type { AboutScreenProps } from './presentation/screens/AboutScreen';
export { useAboutInfo } from './presentation/hooks/useAboutInfo';
export type { UseAboutInfoOptions, UseAboutInfoReturn } from './presentation/hooks/useAboutInfo';
export * from './utils';
export declare const About: {
    init: (config: import("./domain/entities/AppInfo").AboutConfig) => {
        success: boolean;
        config: import("./domain/entities/AppInfo").AboutConfig;
    };
    execute: (props: Record<string, unknown>) => {
        success: boolean;
        data: Record<string, unknown>;
        timestamp: string;
    };
    getInfo: (config: import("./domain/entities/AppInfo").AboutConfig) => {
        appName: string;
        version: string;
        description: string;
        developer: string;
        email: string;
        website: string;
        privacyPolicy: string;
        termsOfService: string;
    };
    updateConfig: (newConfig: Partial<import("./domain/entities/AppInfo").AboutConfig>) => {
        success: boolean;
        updated: Partial<import("./domain/entities/AppInfo").AboutConfig>;
    };
};
