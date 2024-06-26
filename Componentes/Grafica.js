import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, Alert, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StylesIot } from './Styles';
import { Boton } from './Atomicos';
import { FontAwesome } from '@expo/vector-icons';

export const Grafica = () => {
  const nav = useNavigation();
  const [estadoVentana, setEstadoVentana] = useState('Cargando...');
  const [seguroVentana, setSeguroVentana] = useState('Cargando...');
  const [estadoMovimiento, setEstadoMovimiento] = useState('Cargando...');
  const [lluvia, setLluvia] = useState('Sin registros...');
  const [token, setToken] = useState('');
  const [deviceId, setDeviceId] = useState('');
  const [inputToken, setInputToken] = useState('');

  useEffect(() => {
    if (token.trim() !== '') {
      // Realizar solicitud HTTP para obtener el dispositivo por token
      fetch(`https://apipry.onrender.com/devices/token/${token}`)
        .then(response => response.json())
        .then(data => {
          setDeviceId(data._id); // Obtener el _id del dispositivo
        })
        .catch(error => console.error('Error al obtener el dispositivo:', error));
    }
  }, [token]); // Ejecutar cuando cambie el token

  useEffect(() => {
    if (deviceId !== '') {
      // Realizar solicitud HTTP para obtener los datos del dispositivo por su _id
      fetch(`https://apipry.onrender.com/devices/${deviceId}`)
        .then(response => response.json())
        .then(data => {
          // Actualizar los estados con los datos obtenidos
          setEstadoVentana(data.estado === 0 ? 'Ventana Abierta' : 'Ventana Cerrada');
          setSeguroVentana(data.cerradura === 0 ? 'Seguro Abierto' : 'Seguro Cerrado');
          setEstadoMovimiento(data.pir === 0 ? 'DESACTIVADA' : 'ACTIVADA');
          setLluvia(data.lluvia === 0 ? 'Sin registros' : 'Esta lloviendo');
        })
        .catch(error => console.error('Error al obtener los datos del dispositivo:', error));
    }
  }, [deviceId]); // Ejecutar cuando cambie el deviceId

  const handleBuscarToken = () => {

    if (inputToken.trim() === '') {
      Alert.alert('Token inválido', 'Por favor ingrese un token válido.');
      return 1;
    }
  
    fetch(`https://apipry.onrender.com/devices/token/${inputToken}`)
      .then(response => {
        if (!response.ok) {
          Alert.alert('Token inválido', 'El token ingresado no es válido.');
          return 1;
        }
        return response.json();
      })
      .then(data => {
        setToken(inputToken);
        setDeviceId(data._id);
      })
      .catch(error => {
        Alert.alert('Token inválido', 'El token ingresado no es válido.');
        console.error('Error al obtener el dispositivo:', error);
        return 1;
      });
  };

  const validarToken = () => {
    if (token.trim() === '') {
      Alert.alert('Token inválido', 'Por favor ingrese un token válido.');
      return false;
    }
    return true;
  };
  

//FUNCIONES DE LA VENTANA
  const handleToggleVentana = (valor) => {

    if(handleBuscarToken() === 1){
      return;
    }
    if (!validarToken()) {
      return;
    }

    fetch(`https://apipry.onrender.com/devices/${deviceId}/estado/${valor}`, {
      method: 'PUT'
    })
    .then(response => {
      if (seguroVentana === 'Seguro Cerrado') {
        Alert.alert('No se puede abrir, esta colocado el seguro...');
        return;
      }
      if (response.ok) {
        setEstadoVentana(valor === '0' ? 'Ventana Abierta' : 'Ventana Cerrada');
      } else {
        console.log('Error al cambiar el estado de la ventana');
      }
    })
    .catch(error => console.log('Error al cambiar el estado de la ventana:', error));
  };

  const handleToggleSeguro = (valor) => {
    
    if(handleBuscarToken() === 1){
      return;
    }
    if (!validarToken()) {
      return;
    }

    fetch(`https://apipry.onrender.com/devices/${deviceId}/cerradura/${valor}`, {
      method: 'PUT'
    })
    .then(response => {
      if (estadoVentana === 'Ventana Abierta') {
        Alert.alert('No se puede usar el seguro cuando la ventana está abierta');
        return;
      }
      if (response.ok) {
        setSeguroVentana(valor === '0' ? 'Seguro Abierto' : 'Seguro Cerrado');
      } else {
        console.log('Error al cambiar el estado del seguro de la ventana');
      }
    })
    .catch(error => console.log('Error al cambiar el estado del seguro de la ventana:', error));
  };  

  const handleToggleAlerta = (valor) => {
    
    if(handleBuscarToken() === 1){
      return;
    }
    if (!validarToken()) {
      return;
    }
    
    fetch(`https://apipry.onrender.com/devices/${deviceId}/pir/${valor}`, {
      method: 'PUT'
    })
    .then(response => {
      if (response.ok) {
        setEstadoMovimiento(valor === '0' ? 'DESACTIVADA' : 'ACTIVADA');
      } else {
        console.log('Error al cambiar el estado de la ventana');
      }
    })
    .catch(error => console.log('Error al cambiar el estado de la ventana:', error));
  };

  return (
    <View style={StylesIot.Fondo}>
      <ScrollView style={StylesIot.ScrollView}>
        <View style={StylesIot.Center}>
          <Text style={StylesIot.Titulo}> Centro de control</Text>
          <FontAwesome name='home' size={60} color={'#fff'} style={{marginTop:10, marginBottom:-20}}/>
        </View>
        <View style={StylesIot.CenterToken}>
          <View style={StylesIot.Row}>
            <TextInput
              style={StylesIot.inputToken}
              placeholder={'Ingrese su token...'}
              value={inputToken}
              onChangeText={setInputToken} // Para manejar cambios en el estado del token
            />
            <Boton
              texto={'Buscar'}
              colorA="#ffcd2b"
              colorB="#BB961D"
              estiloB={StylesIot.button}
              estiloT={StylesIot.buttonText}
              accion={handleBuscarToken}
            />
          </View>
        </View>
        <View style={StylesIot.Center}>
          <View style={StylesIot.Card}>
            <View style={StylesIot.CenterCard}>
              <View style={StylesIot.Col}>
                <Text style={StylesIot.Texto}>Estado de la ventana</Text>
                <TextInput
                  style={StylesIot.input}
                  placeholder={'Estado de la ventana...'}
                  value={estadoVentana}
                  editable={false}
                />
                <View style={StylesIot.Row}>
                  <Boton texto={'Abrir'} colorA="#ffcd2b" colorB="#BB961D" estiloB={StylesIot.button} estiloT={StylesIot.buttonText} accion={() => handleToggleVentana('0')} />
                  <Boton texto={'Cerrar'} colorA="#8ecae6" colorB="#6A9AB0" estiloB={StylesIot.button} estiloT={StylesIot.buttonText} accion={() => handleToggleVentana('1')} />
                </View>
              </View>
              <View style={StylesIot.Col}>
                <Text style={StylesIot.Texto}>Seguro de la ventana</Text>
                <TextInput
                  style={StylesIot.input}
                  placeholder={'Seguro de la ventana...'}
                  value={seguroVentana}
                  editable={false}
                />
                <View style={StylesIot.Row}>
                  <Boton texto={'Cerrado'} colorA="#ffcd2b" colorB="#BB961D" estiloB={StylesIot.button} estiloT={StylesIot.buttonText} accion={() => handleToggleSeguro('1')} />
                  <Boton texto={'Abierto'} colorA="#8ecae6" colorB="#6A9AB0" estiloB={StylesIot.button} estiloT={StylesIot.buttonText} accion={() => handleToggleSeguro('0')} />
                </View>
              </View>
              <View style={StylesIot.Col}>
                <Text style={StylesIot.Texto}>Alerta de Movimiento</Text>
                <TextInput
                  style={StylesIot.input}
                  placeholder={'Alerta...'}
                  value={estadoMovimiento}
                  editable={false}
                />
                <View style={StylesIot.Row}>
                  <Boton texto={'Activar'} colorA="#ffcd2b" colorB="#BB961D" estiloB={StylesIot.button} estiloT={StylesIot.buttonText} accion={() => handleToggleAlerta('1')} />
                  <Boton texto={'Desactivar'} colorA="#8ecae6" colorB="#6A9AB0" estiloB={StylesIot.button} estiloT={StylesIot.buttonText} accion={() => handleToggleAlerta('0')} />
                </View>
              </View>
              <View style={StylesIot.Col}>
                <Text style={StylesIot.Texto}>Lluvia</Text>
                <TextInput
                  style={StylesIot.input}
                  placeholder="Sin registros..."
                  value={lluvia}
                  editable={false}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Grafica;