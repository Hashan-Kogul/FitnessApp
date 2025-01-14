import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window'); // Get screen width for responsive design

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0); // Track invalid login attempts
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    setUsernameError('');
    setPasswordError('');

    // Check if the username or password is empty
    if (!username || !password) {
      if (!username) {
        setUsernameError('Username is required');
      }
      if (!password) {
        setPasswordError('Password is required');
      }
      return; // Stop the function execution if any field is empty
    }

    // Check if login attempts exceed the limit
    if (loginAttempts >= 3) {
      setUsernameError('Too many failed login attempts. Please try again later.');
      setPasswordError('Too many failed login attempts. Please try again later.');
      return; // Stop the function if too many attempts
    }

    // Validate credentials
    if (username === 'fitness' && password === '1234') {
      setLoginAttempts(0); // Reset login attempts on successful login
      navigation.navigate('Home'); // Navigate to the Home screen on successful login
    } else {
      // Increment login attempts after a failed login
      setLoginAttempts(prevAttempts => prevAttempts + 1);

      // Provide an alert after invalid login attempts
      if (loginAttempts >= 2) {
        setUsernameError('Account Locked');
        setPasswordError('Account Locked');
      } else {
        setUsernameError('Invalid Credentials');
        setPasswordError('Invalid Credentials');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>
            <Ionicons name="log-in-outline" size={22} color="white" /> Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.signupButton}>
          <Text style={styles.signupButtonText}>
            <Ionicons name="person-add-outline" size={22} color="#3f3d3d" /> Signup
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '50%', // Use a responsive width
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // For Android shadow
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#198f51',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    width: '100%',
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#198f51',
    borderRadius: 10,
    paddingVertical: 15,
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  signupButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#3f3d3d',
    fontWeight: 'bold',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 5,
  },
});

export default LoginScreen;
