# Getting Started

Deploy Azure Cloud Infrastructure

```sh
az deployment group create --resource-group codepush \
  --template-file ./codepush-infrastructure.bicep \
  --parameters project_suffix=ss1 \
  az_location=southeastasia \
  github_client_id=id \
  github_client_secret=secret
```

# POC 

## Install CLI

[CLI](cli/README.md)

## Auth
```sh
code-push-standalone register <optional: server-url>
code-push-standalone login <optional: server-url>
code-push-standalone logout
```

## ACL

```sh
code-push-standalone whoami
```

## App

```sh
code-push-standalone app ls
code-push-standalone app add MyCodePushApp -K
```

## Andorid Example Relase

```sh
# Android
cd app-example/MyCodePushApp/

# Test Build
npx react-native run-android

# Run Build
npx react-native bundle --entry-file index.js --platform android --dev false --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

# Push
code-push-standalone release-react MyCodePushApp android -p "./android/app/build.gradle"
```

## Debug

```sh
code-push-standalone debug android
```


