import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'

import {StylePerfilDeUsuario} from './Styles'
import {Boton} from './Atomicos'

export const PerfilDeUsuario = () => {
  const nav=useNavigation();
  const [password, setPassword] = useState("");

  const handleSave = () => {
    // Lógica para guardar la contraseña
    console.log("Contraseña guardada:", password);
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión
    console.log("Cerrando sesión...");
  };

  return (
    <View style={StylePerfilDeUsuario.container}>

      <View style={StylePerfilDeUsuario.DatosUser}>
        <Image source={require("../assets/img/Mikoto_Urabe.png")} style={StylePerfilDeUsuario.image} />
        <View style={StylePerfilDeUsuario.DatosUser}>
          <Text style={StylePerfilDeUsuario.tituloBlanco}>User Name</Text>
          <Text style={StylePerfilDeUsuario.textoBlanco}>ejemplo@ejemplo.org</Text>
        </View>
      </View>

      <View style={StylePerfilDeUsuario.card}>

        <View style={StylePerfilDeUsuario.Fcard}>
          <View>
            <Text style={StylePerfilDeUsuario.sudtitulo}>Dirección</Text>
            <Text style={StylePerfilDeUsuario.texto}>Calle ejemplo, col. ejemplo, Municipio, Estado, CP.0000</Text>
          </View>
          <View style={StylePerfilDeUsuario.buttonContainer}>
            <Boton texto={'Editar'} accion={()=>nav.navigate('PerfilDeUsuario')} colorA="#ffb703" colorB="#fb8500"
            estiloB={StylePerfilDeUsuario.button} estiloT={StylePerfilDeUsuario.buttonText}/>
          </View>
        </View>

        <View style={StylePerfilDeUsuario.Fcard}>
          <View>
            <Text style={StylePerfilDeUsuario.sudtitulo}>Contraseña</Text>
            <TextInput
              style={StylePerfilDeUsuario.input}
              placeholder="Contraseña"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
          <View style={StylePerfilDeUsuario.buttonContainer}>
            <Boton texto={'Editar'} accion={()=>nav.navigate('PerfilDeUsuario')} colorA="#ffb703" colorB="#fb8500"
            estiloB={StylePerfilDeUsuario.button} estiloT={StylePerfilDeUsuario.buttonText}/>
          </View>
        </View>

        <View style={StylePerfilDeUsuario.Fcard}>
          <View>
            <Text style={StylePerfilDeUsuario.sudtitulo}>Teléfono</Text>
            <TextInput
              style={StylePerfilDeUsuario.input}
              placeholder="Número telefónico"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
          <View style={StylePerfilDeUsuario.buttonContainer}>
            <Boton texto={'Editar'} accion={()=>nav.navigate('PerfilDeUsuario')} colorA="#ffb703" colorB="#fb8500"
            estiloB={StylePerfilDeUsuario.button} estiloT={StylePerfilDeUsuario.buttonText}/>
          </View>
        </View>
        
        <Boton texto={'Cerrar Sesión'} accion={()=>nav.navigate('Login')} colorA="#FD5852" colorB="#8B2E2A"
        estiloB={StylePerfilDeUsuario.button} estiloT={StylePerfilDeUsuario.buttonText}/>

      </View>
    </View>
  );
};

export default PerfilDeUsuario;