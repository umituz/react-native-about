# @umituz/react-native-about

About screen component for React Native apps - Display app information, version, and legal links.

## Installation

```bash
npm install @umituz/react-native-about
```

## Peer Dependencies

- `react` >= 18.2.0
- `react-native` >= 0.74.0
- `@umituz/react-native-design-system`
- `@umituz/react-native-theme`
- `@umituz/react-native-localization`
- `react-native-safe-area-context` >= 4.0.0
- `expo-constants` (for version info)

## Usage

```tsx
import { AboutScreen } from '@umituz/react-native-about';

function MyAboutScreen() {
  return (
    <AboutScreen
      appName="My App"
      termsUrl="https://example.com/terms"
      privacyUrl="https://example.com/privacy"
      footerText="© 2025 My App"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `appName` | `string` | `Constants.expoConfig.name` | App name to display |
| `version` | `string` | `Constants.expoConfig.version` | App version |
| `buildNumber` | `string` | `Constants.expoConfig.ios.buildNumber` | Build number |
| `termsUrl` | `string` | - | Terms of Service URL |
| `privacyUrl` | `string` | - | Privacy Policy URL |
| `footerText` | `string` | - | Custom footer text |
| `onTermsPress` | `() => void` | - | Callback when Terms is pressed |
| `onPrivacyPress` | `() => void` | - | Callback when Privacy is pressed |

## Localization

The component uses `@umituz/react-native-localization` for translations. Add these keys to your translation files:

```json
{
  "about": {
    "appName": "App Name",
    "version": "Version",
    "termsOfService": "Terms of Service",
    "privacyPolicy": "Privacy Policy"
  }
}
```

## License

MIT

