/// <reference types="react-native" />

declare global {
  var __DEV__: boolean;
}

declare namespace React {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    testID?: string;
  }
}

export {};