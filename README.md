# react-native-about

React Native package for react-native-about functionality.

## 🎯 Purpose

This is a **general purpose** package designed for **hundreds of applications**. 
It contains **no app-specific code** and is fully **configurable and dynamic**.

## 📦 Installation

```bash
npm install react-native-about
```

## 🚀 Usage

```typescript
import { Uabout } from 'react-native-about';

// Initialize with your app configuration
Uabout.init({
  // Your app-specific configuration
  customOption: true
});

// Use with dynamic props
const result = Uabout.execute({
  // Dynamic props based on your needs
  data: 'your-data'
});
```

## ⚙️ Configuration

All functionality is **configurable** through props and configuration objects.
No hardcoded app-specific values.

## 📄 Version

Current version: **1.4.0**

## 📜 License

MIT
