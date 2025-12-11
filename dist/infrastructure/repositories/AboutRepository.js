export class AboutRepository {
    constructor() {
        this.appInfo = null;
    }
    async getAppInfo() {
        if (!this.appInfo) {
            throw new Error('App info not initialized');
        }
        return this.appInfo;
    }
    async saveAppInfo(appInfo) {
        this.appInfo = { ...appInfo };
        if (__DEV__) {
            console.log('AboutRepository: App info saved', appInfo);
        }
    }
    async updateAppInfo(updates) {
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
