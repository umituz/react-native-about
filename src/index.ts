/**
 * React Native About - Public API
 *
 * About screen component for React Native apps
 * Built with DDD principles and Material Design 3
 *
 * Usage:
 *   import { AboutScreen, useAboutInfo, AboutRepository } from '@umituz/react-native-about';
 */

// Presentation Layer
export { AboutScreen } from "./presentation/screens/AboutScreen";
export type { AboutScreenProps } from "./presentation/screens/AboutScreen";

export { AboutSettingItem } from "./presentation/components/AboutSettingItem";

export { useAboutInfo } from "./presentation/hooks/useAboutInfo";
export type { UseAboutInfoReturn, UseAboutInfoProps } from "./presentation/hooks/useAboutInfo";

// Domain Layer
export type { AppInfo } from "./domain/entities/AppInfo";
export type { IAboutRepository } from "./domain/repositories/IAboutRepository";

// Infrastructure Layer
export { AboutRepository } from "./infrastructure/repositories/AboutRepository";
