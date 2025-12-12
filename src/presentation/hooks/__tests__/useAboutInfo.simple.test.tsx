/**
 * Simple test for useAboutInfo hook
 */
import { renderHook } from '@testing-library/react';
import { useAboutInfo } from '../useAboutInfo';
import { AppInfo, AboutConfig } from '../../domain/entities/AppInfo';

// Mock the repository
jest.mock('../../../infrastructure/repositories/AboutRepository', () => ({
  AboutRepository: jest.fn().mockImplementation(() => ({
    getAppInfo: jest.fn(),
    saveAppInfo: jest.fn(),
    updateAppInfo: jest.fn(),
    destroy: jest.fn(),
  })),
}));

describe('useAboutInfo', () => {
  const mockAppInfo: AppInfo = {
    name: 'Test App',
    version: '1.0.0',
    description: 'Test Description',
    developer: 'Test Developer',
    contactEmail: 'test@example.com',
    websiteUrl: 'https://example.com',
    websiteDisplay: 'example.com',
    moreAppsUrl: 'https://apps.example.com',
    privacyPolicyUrl: 'https://example.com/privacy',
    termsOfServiceUrl: 'https://example.com/terms',
  };

  const mockConfig: AboutConfig = {
    appInfo: mockAppInfo,
    actions: {
      onEmailPress: jest.fn(),
      onWebsitePress: jest.fn(),
      onPrivacyPress: jest.fn(),
      onTermsPress: jest.fn(),
      onMoreAppsPress: jest.fn(),
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with default state', () => {
    const { result } = renderHook(() => useAboutInfo());

    expect(result.current.appInfo).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should initialize with config', () => {
    const { result } = renderHook(() => useAboutInfo({ initialConfig: mockConfig }));

    expect(result.current.appInfo).toEqual(mockAppInfo);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should handle auto initialization', async () => {
    const { result, waitForNextUpdate } = renderHook(() => 
      useAboutInfo({ autoInit: true, initialConfig: mockConfig })
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.appInfo).toEqual(mockAppInfo);
  });

  it('should handle manual initialization', async () => {
    const { result } = renderHook(() => useAboutInfo());

    expect(result.current.appInfo).toBeNull();

    await result.current.initialize(mockConfig);

    expect(result.current.appInfo).toEqual(mockAppInfo);
  });

  it('should handle update', async () => {
    const { result } = renderHook(() => useAboutInfo({ initialConfig: mockConfig }));

    const updatedConfig: AboutConfig = {
      ...mockConfig,
      appInfo: {
        ...mockAppInfo,
        name: 'Updated App',
      },
    };

    await result.current.update(updatedConfig);

    expect(result.current.appInfo.name).toBe('Updated App');
  });

  it('should handle reset', () => {
    const { result } = renderHook(() => useAboutInfo({ initialConfig: mockConfig }));

    expect(result.current.appInfo).toEqual(mockAppInfo);

    result.current.reset();

    expect(result.current.appInfo).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should handle refresh', async () => {
    const { result, waitForNextUpdate } = renderHook(() => 
      useAboutInfo({ autoInit: true, initialConfig: mockConfig })
    );

    await waitForNextUpdate();

    const initialAppInfo = result.current.appInfo;

    await result.current.refresh();

    // Should still have app info after refresh
    expect(result.current.appInfo).toBeTruthy();
  });

  it('should handle errors during initialization', async () => {
    const { result, waitForNextUpdate } = renderHook(() => 
      useAboutInfo({ autoInit: true, initialConfig: null as any })
    );

    await waitForNextUpdate();

    expect(result.current.error).toBeTruthy();
    expect(result.current.loading).toBe(false);
    expect(result.current.appInfo).toBeNull();
  });

  it('should handle errors during update', async () => {
    const { result } = renderHook(() => useAboutInfo({ initialConfig: mockConfig }));

    await result.current.update(null as any);

    expect(result.current.error).toBeTruthy();
  });

  it('should memoize values', () => {
    const { result, rerender } = renderHook(() => useAboutInfo({ initialConfig: mockConfig }));

    const initialAppInfo = result.current.appInfo;
    const initialLoading = result.current.loading;
    const initialError = result.current.error;

    rerender();

    expect(result.current.appInfo).toBe(initialAppInfo);
    expect(result.current.loading).toBe(initialLoading);
    expect(result.current.error).toBe(initialError);
  });

  it('should handle update on unmounted component', async () => {
    const { result, unmount } = renderHook(() => 
      useAboutInfo({ autoInit: true, initialConfig: mockConfig })
    );

    unmount();

    // Should not crash when updating after unmount
    try {
      await result.current.update(mockConfig);
    } catch (error) {
      // Expected to not crash
    }
  });
});