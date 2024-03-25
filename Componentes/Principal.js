import React from "react";
import { useNavigation } from '@react-navigation/native'
import EncabezadoBuscador from './EncabezadoBuscador'
import {ScrollView} from "react-native";

import {StylePrincipal} from './Styles'
import {Boton} from './Atomicos'

import {
  View,
  Text,
} from "react-native";

export const Principal = () => {
  const nav=useNavigation();
  return (
    <View style={StylePrincipal.Contenedor}>
      
      <EncabezadoBuscador/>

      <ScrollView
        contentContainerStyle={{justifyContent:'center', alignItems:'center'}}>

        <View style={StylePrincipal.Bienvenida}>
          <Text style={StylePrincipal.titulo1}>Bienvenido:</Text>
          <Text style={StylePrincipal.texto1}>Disfrute de nuestra gran 
          variedad de productos que tenemos disponibles para usted; 
          Nuestros snacks combinan auténtico sabor, salud y conveniencia 
          para aquellos que buscan un estilo de vida saludable.</Text>
        </View>

        <View style={StylePrincipal.card}>

          <Text style={StylePrincipal.titulo}>Información de la empresa:</Text>
          <Text style={StylePrincipal.texto}>
            Especificaciones de la empresa, descripción de las políticas, reglas de la empresa y detalles de los valores generales de la corporación.
          </Text>
          <View style={StylePrincipal.buttonInfoC}>
            <Boton texto={'Ver Información de la empresa'} accion={()=>nav.navigate('Politicas')}
            colorA="#ffb703" colorB="#fb8500" estiloB={StylePrincipal.buttonInfo} estiloT={StylePrincipal.buttonText}/>
          </View>

        </View>

        <Text style={StylePrincipal.titulo1}>¿Qué es CrunchyFruits?</Text>

        <View style={StylePrincipal.Bienvenida}>
          <Text style={StylePrincipal.titulo1}>Misión:</Text>
          <Text style={StylePrincipal.texto1}>
          Satisfacer el gusto de las personas con la elaboración de un snack delicioso y saludable que promueve una buena alimentación.
          </Text>
        </View>

        <View style={StylePrincipal.Bienvenida}>
          <Text style={StylePrincipal.titulo1}>Visión:</Text>
          <Text style={StylePrincipal.texto1}>
            A 5 años: Tener un desarrollo sustentable, así como distribuir nuestros productos por todo el estado de hidalgo y sus colindantes.
          </Text>
          <Text style={StylePrincipal.texto1}>
            A 10 años: Ser la empresa líder en la elaboración de productos hechos a base de frutas en toda la zona centro de México.
          </Text>
        </View>

        <View style={StylePrincipal.Bienvenida}>
          <Text style={StylePrincipal.titulo1}>Objetivo:</Text>
          <Text style={StylePrincipal.texto1}>
            Elaborar el producto con las características organolépticas deseadas y con un empaquetado al vacío que conserve su calidad y frescura.
          </Text>
        </View>
        
        <View style={StylePrincipal.ContBoton}>
          <Boton texto={'Ver productos...'} accion={()=>nav.navigate('Busqueda')}
          colorA="#fb8500" colorB="#A46007" estiloB={StylePrincipal.button} estiloT={StylePrincipal.buttonText}/>
        </View>
        
        </ScrollView>

    </View>
  );
};

export default Principal;
