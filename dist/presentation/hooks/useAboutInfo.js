/**
 * Hook for managing About information
 * Provides reactive state management for About data
 */
import { useState, useEffect, useCallback } from 'react';
import { AboutRepository } from '../../infrastructure/repositories/AboutRepository';
export const useAboutInfo = (options = {}) => {
    const { initialConfig, autoInit = false } = options;
    const [repository] = useState(() => new AboutRepository());
    const [appInfo, setAppInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const initialize = useCallback(async (config) => {
        setLoading(true);
        setError(null);
        try {
            const defaultAppInfo = {
                name: config.appInfo.name || '',
                version: config.appInfo.version || '1.0.0',
                description: config.appInfo.description,
                developer: config.appInfo.developer,
                contactEmail: config.appInfo.contactEmail,
                websiteUrl: config.appInfo.websiteUrl,
                websiteDisplay: config.appInfo.websiteDisplay,
                moreAppsUrl: config.appInfo.moreAppsUrl,
                privacyPolicyUrl: config.appInfo.privacyPolicyUrl,
                termsOfServiceUrl: config.appInfo.termsOfServiceUrl,
            };
            await repository.saveAppInfo(defaultAppInfo);
            setAppInfo(defaultAppInfo);
            if (__DEV__) {
                console.log('useAboutInfo: Initialized with config', config);
            }
        }
        catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error';
            setError(errorMessage);
            if (__DEV__) {
                console.error('useAboutInfo: Initialization failed', err);
            }
        }
        finally {
            setLoading(false);
        }
    }, [repository]);
    const updateAppInfo = useCallback(async (updates) => {
        if (!appInfo) {
            setError('App info not initialized');
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const updatedInfo = await repository.updateAppInfo(updates);
            setAppInfo(updatedInfo);
            if (__DEV__) {
                console.log('useAboutInfo: Updated app info', updates);
            }
        }
        catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error';
            setError(errorMessage);
            if (__DEV__) {
                console.error('useAboutInfo: Update failed', err);
            }
        }
        finally {
            setLoading(false);
        }
    }, [repository, appInfo]);
    const reset = useCallback(() => {
        setAppInfo(null);
        setError(null);
        setLoading(false);
    }, []);
    useEffect(() => {
        if (autoInit && initialConfig) {
            initialize(initialConfig);
        }
    }, [autoInit, initialConfig, initialize]);
    return {
        appInfo,
        loading,
        error,
        initialize,
        updateAppInfo,
        reset,
    };
};
