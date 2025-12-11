/**
 * Hook for managing About information
 * Provides reactive state management for About data
 * Optimized for performance and memory safety
 */
import { useState, useEffect, useCallback, useRef } from 'react';
import { AppInfo, AboutConfig } from '../../domain/entities/AppInfo';
import { AboutRepository } from '../../infrastructure/repositories/AboutRepository';

export interface UseAboutInfoOptions {
  /** Initial configuration */
  initialConfig?: AboutConfig;
  /** Auto-initialize on mount */
  autoInit?: boolean;
}

export interface UseAboutInfoReturn {
  /** Current app info */
  appInfo: AppInfo | null;
  /** Loading state */
  loading: boolean;
  /** Error state */
  error: string | null;
  /** Initialize with config */
  initialize: (config: AboutConfig) => Promise<void>;
  /** Update app info */
  updateAppInfo: (updates: Partial<AppInfo>) => Promise<void>;
  /** Reset to initial state */
  reset: () => void;
}

export const useAboutInfo = (
  options: UseAboutInfoOptions = {}
): UseAboutInfoReturn => {
  const { initialConfig, autoInit = false } = options;
  const [repository] = useState(() => new AboutRepository());
  const [appInfo, setAppInfo] = useState<AppInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Prevent infinite loops and memory leaks
  const isInitializedRef = useRef(false);
  const isMountedRef = useRef(true);

  const initialize = useCallback(async (config: AboutConfig) => {
    // Prevent multiple initializations
    if (isInitializedRef.current) {
      return;
    }
    
    // Check if component is still mounted
    if (!isMountedRef.current) {
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const defaultAppInfo: AppInfo = {
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
      
      // Only update state if component is still mounted
      if (isMountedRef.current) {
        setAppInfo(defaultAppInfo);
        isInitializedRef.current = true;
      }
      
      if (__DEV__) {
        console.log('useAboutInfo: Initialized with config', config);
      }
    } catch (err) {
      if (!isMountedRef.current) {
        return;
      }
      
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      
      if (__DEV__) {
        console.error('useAboutInfo: Initialization failed', err);
      }
    } finally {
      // Only update loading state if component is still mounted
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [repository]);

  const updateAppInfo = useCallback(async (updates: Partial<AppInfo>) => {
    if (!appInfo || !isMountedRef.current) {
      if (isMountedRef.current) {
        setError('App info not initialized');
      }
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const updatedInfo = await repository.updateAppInfo(updates);
      
      // Only update state if component is still mounted
      if (isMountedRef.current) {
        setAppInfo(updatedInfo);
      }
      
      if (__DEV__) {
        console.log('useAboutInfo: Updated app info', updates);
      }
    } catch (err) {
      if (!isMountedRef.current) {
        return;
      }
      
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      
      if (__DEV__) {
        console.error('useAboutInfo: Update failed', err);
      }
    } finally {
      // Only update loading state if component is still mounted
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [repository, appInfo]);

  const reset = useCallback(() => {
    if (!isMountedRef.current) {
      return;
    }
    
    setAppInfo(null);
    setError(null);
    setLoading(false);
    isInitializedRef.current = false;
  }, []);

  // Cleanup on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      
      // Cleanup repository if it has destroy method
      if (repository && typeof repository.destroy === 'function') {
        repository.destroy();
      }
    };
  }, [repository]);

  // Auto-initialize with dependency optimization
  useEffect(() => {
    if (autoInit && initialConfig && !isInitializedRef.current && isMountedRef.current) {
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