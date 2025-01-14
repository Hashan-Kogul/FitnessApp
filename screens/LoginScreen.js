import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'fitness' && password === '1234') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Invalid Credentials', 'Please enter the correct username and password.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 20 }}>Login</Text>

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
        onPress={handleLogin}
        style={{
          backgroundColor: '#198f51',
          borderRadius: 10,
          padding: 15,
          width: '80%',
          marginBottom: 10,
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
          <Ionicons name="log-in-outline" size={22} color="white" /> Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
        style={{
          backgroundColor: '#ccc',
          borderRadius: 10,
          padding: 15,
          width: '80%',
        }}
      >
        <Text style={{ color: '#3f3d3d', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
          <Ionicons name="person-add-outline" size={22} color="#3f3d3d" /> Signup
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
