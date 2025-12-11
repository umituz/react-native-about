/**
 * App Info Entity
 * Represents application metadata and contact information
 *
 * Domain Entity - Pure business logic, no dependencies
 * Part of About Domain (separate from Legal Domain)
 */
export interface AppInfo {
    /** Application name */
    name: string;
    /** Application version (semver format) */
    version: string;
    /** Application description */
    description?: string;
    /** Developer/Company name */
    developer?: string;
    /** Contact email */
    contactEmail?: string;
    /** Website URL */
    websiteUrl?: string;
    /** Website display text */
    websiteDisplay?: string;
    /** More apps URL (App Store/Play Store developer page) */
    moreAppsUrl?: string;
}
