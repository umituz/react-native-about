# react-native-about

React Native package for about functionality.

## 🎯 Purpose

This is a **general purpose** package designed for **hundreds of applications**. 
It contains **no app-specific code** and is fully **configurable and dynamic**.

## 📦 Installation

```bash
npm install react-native-about
```

## 🚀 Usage

```typescript
import { About } from 'react-native-about';

// Initialize with your app configuration
About.init({
  appName: 'My App',
  appVersion: '1.0.0',
  appDescription: 'My awesome application',
  developerName: 'John Doe',
  developerEmail: 'john@example.com',
  website: 'https://myapp.com'
});

// Get about information
const info = About.getInfo({
  appName: 'My App',
  appVersion: '1.0.0'
});

// Use with dynamic props
const result = About.execute({
  config: {
    appName: 'My App'
  }
});
```

## ⚙️ Configuration

All functionality is **configurable** through props and configuration objects.
No hardcoded app-specific values.

### AboutConfig Interface

```typescript
interface AboutConfig {
  appName?: string;
  appVersion?: string;
  appDescription?: string;
  developerName?: string;
  developerEmail?: string;
  website?: string;
  privacyPolicy?: string;
  termsOfService?: string;
  [key: string]: any; // Dynamic properties
}
```

## 📄 Version

Current version: **1.6.0**

## 📜 License

MIT
