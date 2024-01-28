import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from "react-redux";
import ChargeFull from "./components/ChargeFull";
import HomeScreen from "./screens/HomeScreen";
import ChargeQuick from "./components/ChargeQuick";
import MapScreenChargeFull from './screens/MapScreenChargeFull';
import MapScreenChargeQuick from "./screens/MapScreenChargeQuick";
import { store } from "./store";
import MapScreen from "./screens/MapScreen";


// import { LogLevel, OneSignal } from 'react-native-onesignal';

// OneSignal.Debug.setLogLevel(LogLevel.Verbose);
// OneSignal.initialize("be61b788-49df-4027-a624-0f6507b475f5");

// // Also need enable notifications to complete OneSignal setup
// OneSignal.Notifications.requestPermission(true);

// "plugins": [
//   [
//     "onesignal-expo-plugin",
//     {
//       "mode": "development"
//     }
//   ]
// ]


export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -50 : 0}
          >
            <Stack.Navigator>
              <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name='MapScreenChargeFull'
                component={MapScreenChargeFull}
                options={{
                  headerShown: false,
                  gestureEnabled: true,
                  gestureDirection: "horizontal",
                }}
              />
              <Stack.Screen
                name="ChargeFull"
                component={ChargeFull}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name='MapScreenChargeQuick'
                component={MapScreenChargeQuick}
                options={{
                  headerShown: false,
                  gestureEnabled: true,
                  gestureDirection: "horizontal",
                }}
              />
              <Stack.Screen
                name="ChargeQuick"
                component={ChargeQuick}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>

        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
