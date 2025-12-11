/**
 * About Info Hook
 * Provides access to app information and contact methods
 *
 * USAGE:
 * ```typescript
 * const { appInfo, openContactEmail, openWebsite, openMoreApps } = useAboutInfo();
 * ```
 */

import { useMemo, useCallback } from 'react';
import { Linking } from 'react-native';
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

export const useAboutInfo = (props: UseAboutInfoProps): UseAboutInfoReturn => {
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

