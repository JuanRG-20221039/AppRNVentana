import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StylesIot } from './Styles';
import { Boton } from './Atomicos';
import {FontAwesome} from '@expo/vector-icons'

export const Grafica = () => {
  const nav = useNavigation();
  const [estadoVentana, setEstadoVentana] = useState('Cargando...');
  const [seguroVentana, setSeguroVentana] = useState('Cargando...');
  const [estadoMovimiento, setEstadoMovimiento] = useState('Cargando...');
  const [lluvia, setLluvia] = useState('Sin registros...');

  useEffect(() => {
    // Realizar solicitud HTTP a la URL
    fetch('https://apipry-dev-gjxn.1.us-1.fl0.io/devices/65f8773c13126bb56f600c1b')
      .then(response => response.json())
      .then(data => {
        // Actualizar los estados con los datos obtenidos
        setEstadoVentana(data.dispositivo.estado === 0 ? 'Ventana Abierta' : 'Ventana Cerrada');
        setSeguroVentana(data.dispositivo.cerradura === 0 ? 'Seguro Abierto' : 'Seguro Cerrado');
        setEstadoMovimiento(data.dispositivo.pir === 0 ? 'DESACTIVADA' : 'ACTIVADA');
        setLluvia(data.dispositivo.lluvia === 0 ? 'Sin registros' : 'Esta lloviendo');
      })
      .catch(error => console.error('Error al obtener los datos:', error));
  }, []); // Ejecutar solo una vez al montar el componente


//FUNCIONES DE LA VENTANA
  const handleToggleVentana = (valor) => {

    if (seguroVentana === 'Seguro Cerrado') {
      Alert.alert('No se puede abrir, esta colocado el seguro...');
      return;
    }

    fetch(`https://apipry-dev-gjxn.1.us-1.fl0.io/devices/65f8773c13126bb56f600c1b/estado/${valor}`, {
      method: 'PUT'
    })
    .then(response => {
      if (response.ok) {
        setEstadoVentana(valor === '0' ? 'Ventana Abierta' : 'Ventana Cerrada');
      } else {
        console.error('Error al cambiar el estado de la ventana');
      }
    })
    .catch(error => console.error('Error al cambiar el estado de la ventana:', error));
  };

  const handleToggleSeguro = (valor) => {
    if (estadoVentana === 'Ventana Abierta') {
      Alert.alert('No se puede usar el seguro cuando la ventana está abierta');
      return;
    }
  
    fetch(`https://apipry-dev-gjxn.1.us-1.fl0.io/devices/65f8773c13126bb56f600c1b/cerradura/${valor}`, {
      method: 'PUT'
    })
    .then(response => {
      if (response.ok) {
        setSeguroVentana(valor === '0' ? 'Seguro Abierto' : 'Seguro Cerrado');
      } else {
        console.error('Error al cambiar el estado del seguro de la ventana');
      }
    })
    .catch(error => console.error('Error al cambiar el estado del seguro de la ventana:', error));
  };  

  const handleToggleAlerta = (valor) => {
    fetch(`https://apipry-dev-gjxn.1.us-1.fl0.io/devices/65f8773c13126bb56f600c1b/pir/${valor}`, {
      method: 'PUT'
    })
    .then(response => {
      if (response.ok) {
        setEstadoMovimiento(valor === '0' ? 'DESACTIVADA' : 'ACTIVADA');
      } else {
        console.error('Error al cambiar el estado de la ventana');
      }
    })
    .catch(error => console.error('Error al cambiar el estado de la ventana:', error));
  };

  return (
    <View style={StylesIot.Fondo}>
      <ScrollView style={StylesIot.ScrollView}>
        <View style={StylesIot.Center}>
          <Text style={StylesIot.Titulo}> Centro de control</Text>
          <FontAwesome name='home' size={60} color={'#fff'} style={{marginTop:10, marginBottom:-20}}/>
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