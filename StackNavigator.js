import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import FitScreen from "./screens/FitScreen"; // Import the Fit screen

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await AsyncStorage.getItem("isLoggedIn");
      setIsLoggedIn(loggedIn === "true");
    };
    checkLoginStatus();
  }, []);

  const handleLogin = async () => {
    await AsyncStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  if (isLoggedIn === null) {
    // Optionally show a loading spinner
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="Home"
              options={{ headerShown: false }}
              children={(props) => <HomeScreen {...props} onLogout={handleLogout} />}
            />
            <Stack.Screen
              name="Workout"
              options={{ headerTitle: "Workout Details" }}
              component={WorkoutScreen}
            />
            <Stack.Screen
              name="Fit"
              options={{ headerTitle: "Start Workout" }}
              component={FitScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              options={{ headerShown: false }}
              children={(props) => <LoginScreen {...props} onLogin={handleLogin} />}
            />
            <Stack.Screen
              name="Signup"
              options={{ headerShown: false }}
              component={SignupScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;