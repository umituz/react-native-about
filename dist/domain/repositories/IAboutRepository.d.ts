/**
 * About Repository Interface
 * Defines contract for accessing app information
 *
 * Domain Layer - Interface only, implementation in infrastructure
 */
import { AppInfo } from '../entities/AppInfo';
export interface IAboutRepository {
    /**
     * Get application information
     * @returns App metadata and contact information
     */
    getAppInfo(): AppInfo;
}
