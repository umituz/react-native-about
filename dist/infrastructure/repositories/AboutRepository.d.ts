/**
 * Repository implementation for About data
 * Handles data persistence and retrieval
 */
import { AppInfo } from '../../domain/entities/AppInfo';
import { IAboutRepository } from '../../domain/repositories/IAboutRepository';
export declare class AboutRepository implements IAboutRepository {
    private appInfo;
    getAppInfo(): Promise<AppInfo>;
    saveAppInfo(appInfo: AppInfo): Promise<void>;
    updateAppInfo(updates: Partial<AppInfo>): Promise<AppInfo>;
}
