import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSignup = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Signup Successful! Please log in.");
      navigation.navigate("Login");
    }
  };

  return (
    <LinearGradient colors={["#74ebd5", "#ACB6E5"]} style={styles.gradientContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Signup</Text>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
          />
          {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
          <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
            <Text style={styles.signupButtonText}>
              <Ionicons name="person-add-outline" size={22} color="white" /> Signup
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.loginButtonText}>
              <Ionicons name="log-in-outline" size={22} color="#198f51" /> Already have an account? Login
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#198f51",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    width: "100%",
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: "#198f51",
    borderRadius: 10,
    paddingVertical: 15,
    width: "100%",
    marginBottom: 10,
    alignItems: "center",
  },
  signupButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    paddingVertical: 15,
    width: "100%",
    alignItems: "center",
  },
  loginButtonText: {
    color: "#198f51",
    fontWeight: "bold",
    fontSize: 18,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 5,
  },
});

export default SignupScreen;