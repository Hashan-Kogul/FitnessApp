import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FitnessContext } from './Context';
import StackNavigator from './StackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // Track login status

  // Check login status when the app initializes
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const loggedIn = await AsyncStorage.getItem('isLoggedIn');
        setIsLoggedIn(loggedIn === 'true');
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };
    checkLoginStatus();
  }, []);

  // Show a loading screen while checking the login status
  if (isLoggedIn === null) {
    return null; // Or render a loading spinner/screen here
  }

  return (
    <FitnessContext>
      <StatusBar style="light" backgroundColor="#000" />
      <StackNavigator />
    </FitnessContext>
  );
}
