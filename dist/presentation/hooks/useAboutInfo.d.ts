/**
 * About Info Hook
 * Provides access to app information and contact methods
 *
 * USAGE:
 * ```typescript
 * const { appInfo, openContactEmail, openWebsite, openMoreApps } = useAboutInfo();
 * ```
 */
import { AppInfo } from '../../domain/entities/AppInfo';
export interface UseAboutInfoReturn {
    /** App metadata and contact information */
    appInfo: AppInfo;
    /** Open contact email */
    openContactEmail: () => void;
    /** Open website */
    openWebsite: () => void;
    /** Open more apps URL */
    openMoreApps: () => void;
}
export interface UseAboutInfoProps {
    /** App information */
    appInfo: AppInfo;
}
export declare const useAboutInfo: (props: UseAboutInfoProps) => UseAboutInfoReturn;
