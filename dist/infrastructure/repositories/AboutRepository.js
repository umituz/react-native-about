/**
 * About Repository Implementation
 * Provides access to app information
 *
 * Infrastructure Layer - Implementation of domain interface
 */
import Constants from 'expo-constants';
export class AboutRepository {
    constructor(appInfo) {
        var _a, _b, _c, _d;
        // Merge provided appInfo with defaults from Constants
        this.appInfo = {
            name: (appInfo === null || appInfo === void 0 ? void 0 : appInfo.name) || ((_a = Constants.expoConfig) === null || _a === void 0 ? void 0 : _a.name) || 'App',
            version: (appInfo === null || appInfo === void 0 ? void 0 : appInfo.version) || ((_b = Constants.expoConfig) === null || _b === void 0 ? void 0 : _b.version) || '1.0.0',
            description: (appInfo === null || appInfo === void 0 ? void 0 : appInfo.description) || ((_c = Constants.expoConfig) === null || _c === void 0 ? void 0 : _c.description),
            developer: appInfo === null || appInfo === void 0 ? void 0 : appInfo.developer,
            contactEmail: appInfo === null || appInfo === void 0 ? void 0 : appInfo.contactEmail,
            websiteUrl: appInfo === null || appInfo === void 0 ? void 0 : appInfo.websiteUrl,
            websiteDisplay: (appInfo === null || appInfo === void 0 ? void 0 : appInfo.websiteDisplay) || ((_d = appInfo === null || appInfo === void 0 ? void 0 : appInfo.websiteUrl) === null || _d === void 0 ? void 0 : _d.replace(/^https?:\/\//, '')),
            moreAppsUrl: appInfo === null || appInfo === void 0 ? void 0 : appInfo.moreAppsUrl,
        };
    }
    getAppInfo() {
        return this.appInfo;
    }
}
