import { View, Text } from 'react-native'
import React from 'react'

import {StylesInfoEmpresa} from './Styles'
import { ScrollView } from 'react-native-gesture-handler'

const Valores = () => {
  return (
    <View>
      <View style={StylesInfoEmpresa.Contenedor}>
        <ScrollView style={StylesInfoEmpresa.ScrollView}>
          <View style={StylesInfoEmpresa.Card}>
            <Text style={StylesInfoEmpresa.Titulo}>Valores de Healthy & Nutritions:</Text>

            {/* Salud y Bienestar */}
            <Text style={StylesInfoEmpresa.SubTitulo}>Salud y Bienestar:</Text>
            <Text style={StylesInfoEmpresa.Texto}>
              Valorar la salud y el bienestar de las personas, promoviendo un estilo de vida saludable y ofreciendo productos que contribuyan a una alimentación equilibrada.
            </Text>

            {/* Integridad */}
            <Text style={StylesInfoEmpresa.SubTitulo}>Integridad:</Text>
            <Text style={StylesInfoEmpresa.Texto}>
              Actuar con honestidad, transparencia y ética en todas las relaciones comerciales, manteniendo altos estándares de conducta profesional.
            </Text>

            {/* Responsabilidad */}
            <Text style={StylesInfoEmpresa.SubTitulo}>Responsabilidad:</Text>
            <Text style={StylesInfoEmpresa.Texto}>
              Asumir la responsabilidad de las acciones y decisiones tomadas, cumpliendo los compromisos adquiridos y asumiendo las consecuencias de los resultados.
            </Text>

            {/* Calidad */}
            <Text style={StylesInfoEmpresa.SubTitulo}>Calidad:</Text>
            <Text style={StylesInfoEmpresa.Texto}>
              Brindar productos de alta calidad para nuestros clientes mejorando cada vez más.
            </Text>

            {/* Atención */}
            <Text style={StylesInfoEmpresa.SubTitulo}>Atención:</Text>
            <Text style={StylesInfoEmpresa.Texto}>
              Escuchar las opiniones y comentarios de los clientes hacia nuestro producto para mejorar este, así como el proceso de venta.
            </Text>

            {/* Sostenibilidad */}
            <Text style={StylesInfoEmpresa.SubTitulo}>Sostenibilidad:</Text>
            <Text style={StylesInfoEmpresa.Texto}>
              Implementar estrategias para reducir, reciclar y reutilizar los residuos generados durante la producción de chips de frutas.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Valores