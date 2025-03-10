This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.


# Project Structure
📦 project
├── 📂 android/               # Native Android files (don't modify unless necessary)
├── 📂 ios/                   # Native iOS files (don't modify unless necessary)
├── 📂 src/                   # Main source code
│   ├── 📂 assets/            # Static assets (images, fonts, icons, mock data, Sitecore, etc.)
│   ├── 📂 components/        # Reusable UI components (buttons, inputs, etc.) and Sitecore mapping component
│   │   ├── componentFactory.ts   # Mapping Sitecore UI with React Native components
│   │   ├── 📂 siteCoreComponent  # Sitecore components
│   ├── 📂 config/            # Config settings (API, GraphQL, credentials, MMKV storage, constants, theme)
│   ├── 📂 data/              # API calls and external services
│   ├── 📂 hooks/             # Custom hooks (useAuth, useFetch, etc.)
│   ├── 📂 models/            # Data models
│   ├── 📂 screens/           # Screens for navigation (Login, Home, etc.)
│   ├── 📂 navigation/        # Navigation configuration (React Navigation)
│   ├── 📂 redux/             # Redux store + Saga setup for each module
│   ├── 📂 utils/             # Utility functions (formatDate, validators, etc.)
│   ├── 📂 types/             # TypeScript types/interfaces
│   ├── 📂 translations/      # Localization configuration
│   ├── 📂 data/              # Local JSON data or mock data
│   ├── App.tsx              # Entry point of the app
│   ├── index.js             # Registers the app

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

## Rename app
```sh
$ yarn global add react-native-rename
```
```sh
$ npx react-native-rename@latest "new_name"
```

With custom Bundle Identifier
```sh
$ npx react-native-rename@latest "new_name" -b "bundle_identifier"
```
## Add custom font 
Add custom font to forlder src/assets/fonts
Run below command
```sh
$ npx react-native-asset
```
