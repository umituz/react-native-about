/**
 * About Info Hook
 * Provides access to app information and contact methods
 *
 * USAGE:
 * ```typescript
 * const { appInfo, openContactEmail, openWebsite, openMoreApps } = useAboutInfo();
 * ```
 */
import { useCallback } from 'react';
import { Linking } from 'react-native';
export const useAboutInfo = (props) => {
    const { appInfo } = props;
    // Contact openers
    const openContactEmail = useCallback(() => {
        if (appInfo.contactEmail) {
            Linking.openURL(`mailto:${appInfo.contactEmail}`);
        }
    }, [appInfo.contactEmail]);
    const openWebsite = useCallback(() => {
        if (appInfo.websiteUrl) {
            Linking.openURL(appInfo.websiteUrl);
        }
    }, [appInfo.websiteUrl]);
    const openMoreApps = useCallback(() => {
        if (appInfo.moreAppsUrl) {
            Linking.openURL(appInfo.moreAppsUrl);
        }
    }, [appInfo.moreAppsUrl]);
    return {
        appInfo,
        openContactEmail,
        openWebsite,
        openMoreApps,
    };
};
