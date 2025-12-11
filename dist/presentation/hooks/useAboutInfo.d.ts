import { AppInfo, AboutConfig } from '../../domain/entities/AppInfo';
export interface UseAboutInfoOptions {
    /** Initial configuration */
    initialConfig?: AboutConfig;
    /** Auto-initialize on mount */
    autoInit?: boolean;
}
export interface UseAboutInfoReturn {
    /** Current app info */
    appInfo: AppInfo | null;
    /** Loading state */
    loading: boolean;
    /** Error state */
    error: string | null;
    /** Initialize with config */
    initialize: (config: AboutConfig) => Promise<void>;
    /** Update app info */
    updateAppInfo: (updates: Partial<AppInfo>) => Promise<void>;
    /** Reset to initial state */
    reset: () => void;
}
export declare const useAboutInfo: (options?: UseAboutInfoOptions) => UseAboutInfoReturn;
