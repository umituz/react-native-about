/**
 * About Repository Implementation
 * Provides access to app information
 *
 * Infrastructure Layer - Implementation of domain interface
 */
import { IAboutRepository } from '../../domain/repositories/IAboutRepository';
import { AppInfo } from '../../domain/entities/AppInfo';
export declare class AboutRepository implements IAboutRepository {
    private appInfo;
    constructor(appInfo?: Partial<AppInfo>);
    getAppInfo(): AppInfo;
}
