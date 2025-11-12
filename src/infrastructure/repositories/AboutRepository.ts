/**
 * About Repository Implementation
 * Provides access to app information
 *
 * Infrastructure Layer - Implementation of domain interface
 */

import { IAboutRepository } from '../../domain/repositories/IAboutRepository';
import { AppInfo } from '../../domain/entities/AppInfo';
import Constants from 'expo-constants';

export class AboutRepository implements IAboutRepository {
  private appInfo: AppInfo;

  constructor(appInfo?: Partial<AppInfo>) {
    // Merge provided appInfo with defaults from Constants
    this.appInfo = {
      name: appInfo?.name || Constants.expoConfig?.name || 'App',
      version: appInfo?.version || Constants.expoConfig?.version || '1.0.0',
      description: appInfo?.description || Constants.expoConfig?.description,
      developer: appInfo?.developer,
      contactEmail: appInfo?.contactEmail,
      websiteUrl: appInfo?.websiteUrl,
      websiteDisplay: appInfo?.websiteDisplay || appInfo?.websiteUrl?.replace(/^https?:\/\//, ''),
      moreAppsUrl: appInfo?.moreAppsUrl,
    };
  }

  getAppInfo(): AppInfo {
    return this.appInfo;
  }
}

