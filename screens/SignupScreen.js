import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (username && password) {
      Alert.alert('Signup Successful', 'You can now log in with your credentials.');
      navigation.navigate('Login');
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };
  const handleLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 20 }}>Signup</Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 10,
          width: '80%',
          padding: 10,
          marginBottom: 15,
        }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 10,
          width: '80%',
          padding: 10,
          marginBottom: 30,
        }}
      />

      <TouchableOpacity
        onPress={handleSignup}
        style={{
          backgroundColor: '#198f51',
          borderRadius: 10,
          padding: 15,
          width: '80%',
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
          <Ionicons name="person-add-outline" size={22} color="white" /> Signup
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate('Login')}
        style={{
            backgroundColor: '#198f51',
            borderRadius: 10,
            padding: 15,
            width: '80%',
          }}
      >
         <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
          <Ionicons name="person-add-outline" size={22} color="white" /> Login
        </Text>
        
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignupScreen;
