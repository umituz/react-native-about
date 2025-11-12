# @umituz/react-native-about

Beautiful, modern about screen component for React Native apps with Material Design 3 compliance. Built with Domain-Driven Design principles.

## Features

- 🎨 **Beautiful UI** - Modern Material Design 3 compliant interface
- 🎯 **DDD Architecture** - Clean domain-driven design structure
- 🌍 **i18n Support** - Full localization support
- 🎨 **Theme Support** - Works with @umituz/react-native-design-system-theme
- 📱 **Responsive** - Works on all screen sizes
- 🔧 **Customizable** - Highly configurable props
- 🎨 **Gradient Icons** - Beautiful gradient icon backgrounds
- 📦 **Type-Safe** - Full TypeScript support

## Installation

```bash
npm install @umituz/react-native-about
```

## Peer Dependencies

- `react` >= 18.2.0
- `react-native` >= 0.74.0
- `@umituz/react-native-design-system`
- `@umituz/react-native-design-system-theme`
- `@umituz/react-native-localization`
- `react-native-safe-area-context` >= 4.0.0
- `expo-linear-gradient`
- `expo-constants`

## Basic Usage

```tsx
import { AboutScreen } from '@umituz/react-native-about';

function MyAboutScreen() {
  return (
    <AboutScreen
      appInfo={{
        name: "My App",
        version: "1.0.0",
        description: "A beautiful app",
        contactEmail: "support@example.com",
        websiteUrl: "https://example.com",
        moreAppsUrl: "https://apps.apple.com/developer/..."
      }}
    />
  );
}
```

## Advanced Usage

### With Custom App Info

```tsx
import { AboutScreen } from '@umituz/react-native-about';

function MyAboutScreen() {
  return (
    <AboutScreen
      appInfo={{
        name: "My App",
        version: "1.0.0",
        description: "A beautiful app",
        developer: "John Doe",
        contactEmail: "support@example.com",
        websiteUrl: "https://example.com",
        websiteDisplay: "example.com",
        moreAppsUrl: "https://apps.apple.com/developer/..."
      }}
      title="About My App"
      description="Learn more about our app"
      showVersion={true}
      showMoreApps={true}
      showContactEmail={true}
      showWebsite={true}
    />
  );
}
```

### Using the Hook

```tsx
import { useAboutInfo, AboutRepository } from '@umituz/react-native-about';

function MyComponent() {
  const repository = new AboutRepository({
    name: "My App",
    version: "1.0.0",
    contactEmail: "support@example.com",
    websiteUrl: "https://example.com",
  });

  const { appInfo, openContactEmail, openWebsite, openMoreApps } = useAboutInfo({
    appInfo: repository.getAppInfo(),
  });

  return (
    <View>
      <Text>{appInfo.name}</Text>
      <Button onPress={openContactEmail} title="Contact" />
      <Button onPress={openWebsite} title="Website" />
    </View>
  );
}
```

### With Navigation

```tsx
import { AboutScreen } from '@umituz/react-native-about';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "About",
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
```

## Props

### AboutScreenProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `appInfo` | `Partial<AppInfo>` | Auto from Constants | App information object |
| `appInfoSectionTitle` | `string` | `"about.appInfo"` | Section header for app info |
| `contactSectionTitle` | `string` | `"about.contact"` | Section header for contact |
| `title` | `string` | `"about.title"` | Screen title |
| `description` | `string` | `"about.description"` | Screen description |
| `translationKeyPrefix` | `string` | `"about"` | Translation key prefix |
| `showVersion` | `boolean` | `true` | Show app version |
| `showMoreApps` | `boolean` | Auto | Show more apps link |
| `showContactEmail` | `boolean` | Auto | Show contact email |
| `showWebsite` | `boolean` | Auto | Show website link |
| `testID` | `string` | `"about-screen"` | Test ID for E2E testing |

### AppInfo

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | `string` | Yes | Application name |
| `version` | `string` | Yes | Application version (semver) |
| `description` | `string` | No | Application description |
| `developer` | `string` | No | Developer/Company name |
| `contactEmail` | `string` | No | Contact email address |
| `websiteUrl` | `string` | No | Website URL |
| `websiteDisplay` | `string` | No | Website display text |
| `moreAppsUrl` | `string` | No | More apps URL (App Store/Play Store) |

## Localization

The component uses `@umituz/react-native-localization` for translations. Add these keys to your translation files:

```json
{
  "about": {
    "title": "About",
    "description": "App information and contact details",
    "appInfo": "App Information",
    "appVersion": "App Version",
    "moreApps": "More Apps",
    "moreAppsDescription": "Check out our other apps",
    "contact": "Contact",
    "contactEmail": "Contact Email",
    "website": "Website"
  }
}
```

## Architecture

This package follows Domain-Driven Design (DDD) principles:

```
src/
├── domain/
│   ├── entities/
│   │   └── AppInfo.ts          # Domain entity
│   └── repositories/
│       └── IAboutRepository.ts # Repository interface
├── infrastructure/
│   └── repositories/
│       └── AboutRepository.ts  # Repository implementation
└── presentation/
    ├── components/
    │   └── AboutSettingItem.tsx # Reusable setting item
    ├── hooks/
    │   └── useAboutInfo.ts      # Custom hook
    └── screens/
        └── AboutScreen.tsx      # Main screen component
```

## Examples

### Minimal Example

```tsx
import { AboutScreen } from '@umituz/react-native-about';

<AboutScreen />
```

### Full Example

```tsx
import { AboutScreen } from '@umituz/react-native-about';

<AboutScreen
  appInfo={{
    name: "My App",
    version: "1.0.0",
    description: "A beautiful React Native app",
    developer: "John Doe",
    contactEmail: "support@example.com",
    websiteUrl: "https://example.com",
    websiteDisplay: "example.com",
    moreAppsUrl: "https://apps.apple.com/developer/123456"
  }}
  title="About My App"
  description="Learn more about our app and team"
  showVersion={true}
  showMoreApps={true}
  showContactEmail={true}
  showWebsite={true}
/>
```

## License

MIT
