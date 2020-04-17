# frontend-market

Re-implementation of the mobile application (iOS/Android) used by the market-clerks.

## Evironment Setup

### Node

Recommended Node-version: LTS 12.16.2

### Ionic 5

Install ionic as well as the required dependencies for native-development via

```
npm install -g @ionic/cli native-run cordova-res
```

Make sure, that no old versions of the ionic-cli are installed.

## Running the Application
- Run `ionic serve` within the app directory to see your app in the browser
- Run `ionic capacitor add` to add a native iOS or Android project using Capacitor
- Generate your app icon and splash screens using `cordova-res --skip-config --copy`
- Explore the Ionic docs for components, tutorials, and more: https://ion.link/docs
