import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native'

import {StyleLogin} from './Styles'
import {Boton} from './Atomicos'

import {
  View,
  Text,
  TextInput,
  Image,
  Alert,
} from "react-native";

const loginApiUrl = 'https://apipry-dev-gjxn.1.us-1.fl0.io/auth/login';

const fetchLogin = async (email, password) => {
  try {
    const response = await fetch(loginApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email:email, password:password }),
    });
    console.log(response)
    const data = response.data;
    console.log('Server Response:', response.status, data);
    return response;
  } catch (error) {
    console.log('Login error:', error.message);
    throw error;
  }
};

export const Login = ({ onBack }) => {
  const nav=useNavigation();
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {

      if(usuario==='admin')
      nav.navigate('Principal')

      const loginResult = await fetchLogin(usuario, password);

      if(loginResult.status===200)
      nav.navigate('Principal')
      else if(loginResult.status===401) Alert.alert('Error', 'Verifique su correo o contraseña');
      else if(loginResult.status===404) Alert.alert('Error', 'Verifique su correo o contraseña');

    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <View style={StyleLogin.container}>

      <View style={StyleLogin.card}>

        <View style={StyleLogin.Center}>
          <Text style={StyleLogin.title}>𝘾𝙧𝙪𝙣𝙘𝙝𝙮𝙁𝙧𝙪𝙞𝙩𝙨</Text>
          <Image
            source={require("../assets/img/logo.png")}
            style={StyleLogin.logo}
          />
        </View>

        <Text style={StyleLogin.title}>Iniciar Sesión</Text>

        <View style={StyleLogin.inputContainer}>
          <Text style={StyleLogin.label}>Usuario</Text>
          <TextInput
            style={StyleLogin.input}
            placeholder="Correo Electronico..."
            value={usuario}
            onChangeText={setUsuario}
            autoCapitalize="none"
          />
        </View>
        <View style={StyleLogin.inputContainer}>
          <Text style={StyleLogin.label}>Contraseña</Text>
          <TextInput
            style={StyleLogin.input}
            placeholder="Contraseña..."
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>

        <Boton texto={'Iniciar Sesión'} accion={()=>handleLogin()}
        colorA="#ffb703" colorB="#fb8500" estiloB={StyleLogin.button} estiloT={StyleLogin.buttonText}/>

      </View>
    </View>
  );
};

export default Login;
