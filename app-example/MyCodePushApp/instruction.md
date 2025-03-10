# Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd "/Users/champp/Shobshop/MyCodePushApp" && npx react-native run-android
  
# Run instructions for iOS:
    • cd "/Users/champp/Shobshop/MyCodePushApp/ios"
    
    • Install Cocoapods
      • bundle install # you need to run this only once in your project.
      • bundle exec pod install
      • cd ..
    
    • npx react-native run-ios
    - or -
    • Open MyCodePushApp/ios/MyCodePushApp.xcodeproj in Xcode or run "xed -b ios"
    • Hit the Run button
    
# Run instructions for macOS:
    • See https://aka.ms/ReactNativeGuideMacOS for the latest up-to-date instructions.


# Build

npx react-native bundle --entry-file index.js --platform android --dev false --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

react-native bundle --platform android --entry-file <entryFile> --bundle-output <bundleOutput> --dev false


code-push-standalone release MyCodePushApp ./android/app/src/main/assets/ 1.0.0

code-push-standalone release-react MyApp-Android android -p "./android/app"
code-push-standalone release-react MyCodePushApp android -p "./android/app/build.gradle"

code-push-standalone release-react MyCodePushApp android -p "./android/app/build.gradle"


code-push-standalone release-react MyCodePushApp android --deploymentName Staging

code-push release-react MyCodePushApp android -p "./android/app/build.gradle"




| React Native wo/assets (Android) | `react-native bundle --platform android --entry-file <entryFile> --bundle-output <bundleOutput> --dev false`                                               | Value of the `--bundle-output` option                                                                                         |
| React Native w/assets (Android)  | `react-native bundle --platform android --entry-file <entryFile> --bundle-output <releaseFolder>/<bundleOutput> --assets-dest <releaseFolder> --dev false` | Value of the `--assets-dest` option, which should represent a newly created directory that includes your assets and JS bundle |