import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "fitness" && password === "1234") {
      onLogin(); // This sets the login state in AsyncStorage
      setTimeout(() => navigation.navigate("Home"), 0); // Delay navigation to ensure state updates
    } else {
      Alert.alert("Invalid Credentials", "Please enter the correct username and password.");
    }
  };  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>
          <Ionicons name="log-in-outline" size={22} color="white" /> Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Signup")}
        style={styles.signupButton}
      >
        <Text style={styles.signupButtonText}>
          <Ionicons name="person-add-outline" size={22} color="#3f3d3d" /> Signup
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    width: '80%',
    padding: 10,
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#198f51',
    borderRadius: 10,
    padding: 15,
    width: '80%',
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  signupButton: {
    backgroundColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    width: '80%',
  },
  signupButtonText: {
    color: '#3f3d3d',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default LoginScreen;