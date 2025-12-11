/**
 * Repository implementation for About data
 * Handles data persistence and retrieval
 */
import { AppInfo } from '../../domain/entities/AppInfo';
import { IAboutRepository } from '../../domain/repositories/IAboutRepository';

export class AboutRepository implements IAboutRepository {
  private appInfo: AppInfo | null = null;

  async getAppInfo(): Promise<AppInfo> {
    if (!this.appInfo) {
      throw new Error('App info not initialized');
    }
    return this.appInfo;
  }

  async saveAppInfo(appInfo: AppInfo): Promise<void> {
    this.appInfo = { ...appInfo };
    if (__DEV__) {
      console.log('AboutRepository: App info saved', appInfo);
    }
  }

  async updateAppInfo(updates: Partial<AppInfo>): Promise<AppInfo> {
    if (!this.appInfo) {
      throw new Error('App info not initialized');
    }
    
    this.appInfo = { ...this.appInfo, ...updates };
    
    if (__DEV__) {
      console.log('AboutRepository: App info updated', updates);
    }
    
    return this.appInfo;
  }
}