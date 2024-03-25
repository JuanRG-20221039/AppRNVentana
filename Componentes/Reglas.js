import { View, Text } from 'react-native'
import React from 'react'

import {StylesInfoEmpresa} from './Styles'
import { ScrollView } from 'react-native-gesture-handler'

const Reglas = () => {
  return (
    <View>
      <View style={StylesInfoEmpresa.Contenedor}>
        <ScrollView style={StylesInfoEmpresa.ScrollView}>
          <View style={StylesInfoEmpresa.Card}>
            <Text style={StylesInfoEmpresa.Titulo}>Reglas de Healthy & Nutritions:</Text>

            {/* Puntualidad */}
            <Text style={StylesInfoEmpresa.SubTitulo}>Puntualidad:</Text>
            <Text style={StylesInfoEmpresa.Texto}>
              Los trabajadores deben llegar a tiempo a su lugar de trabajo y respetar los horarios establecidos.
            </Text>

            {/* Uso adecuado de recursos */}
            <Text style={StylesInfoEmpresa.SubTitulo}>Uso adecuado de recursos:</Text>
            <Text style={StylesInfoEmpresa.Texto}>
              Los trabajadores deben utilizar los recursos de la empresa de manera responsable y eficiente, evitando desperdicios innecesarios.
            </Text>

            {/* Cumplimiento de normas de seguridad */}
            <Text style={StylesInfoEmpresa.SubTitulo}>Cumplimiento de normas de seguridad:</Text>
            <Text style={StylesInfoEmpresa.Texto}>
              Los trabajadores deben seguir todas las normas y procedimientos de seguridad establecidos para proteger su integridad física y la de sus compañeros.
            </Text>

            {/* Respeto y tolerancia */}
            <Text style={StylesInfoEmpresa.SubTitulo}>Respeto y tolerancia:</Text>
            <Text style={StylesInfoEmpresa.Texto}>
              Los trabajadores deben tratar a sus compañeros, superiores y subordinados con respeto y cortesía, evitando cualquier forma de discriminación, acoso o comportamiento inapropiado.
            </Text>

            {/* Confidencialidad */}
            <Text style={StylesInfoEmpresa.SubTitulo}>Confidencialidad:</Text>
            <Text style={StylesInfoEmpresa.Texto}>
              Los trabajadores deben mantener la confidencialidad de la información y los datos sensibles de la empresa y de sus compañeros de trabajo.
            </Text>

            {/* Uso adecuado de la tecnología */}
            <Text style={StylesInfoEmpresa.SubTitulo}>Uso adecuado de la tecnología:</Text>
            <Text style={StylesInfoEmpresa.Texto}>
              Los trabajadores deben utilizar los equipos y las herramientas tecnológicas de la empresa de acuerdo con las políticas y pautas establecidas, evitando el uso inapropiado o no autorizado.
            </Text>

            {/* Responsabilidad y rendimiento */}
            <Text style={StylesInfoEmpresa.SubTitulo}>Responsabilidad y rendimiento:</Text>
            <Text style={StylesInfoEmpresa.Texto}>
              Los trabajadores son responsables de cumplir con sus tareas y responsabilidades asignadas, así como de mantener un rendimiento adecuado y una productividad constante.
            </Text>

            {/* Comunicación efectiva */}
            <Text style={StylesInfoEmpresa.SubTitulo}>Comunicación efectiva:</Text>
            <Text style={StylesInfoEmpresa.Texto}>
              Los trabajadores deben comunicarse de manera clara, respetuosa y oportuna con sus compañeros y superiores, fomentando una buena comunicación interna en la empresa.
            </Text>

            {/* Vestimenta y apariencia profesional */}
            <Text style={StylesInfoEmpresa.SubTitulo}>Vestimenta y apariencia profesional:</Text>
            <Text style={StylesInfoEmpresa.Texto}>
              Los trabajadores deben mantener una apariencia profesional y acorde con los estándares de la empresa, siguiendo las pautas establecidas para la vestimenta y la presentación personal.
            </Text>

            {/* Cumplimiento de políticas y procedimientos */}
            <Text style={StylesInfoEmpresa.SubTitulo}>Cumplimiento de políticas y procedimientos:</Text>
            <Text style={StylesInfoEmpresa.Texto}>
              Los trabajadores deben cumplir con todas las políticas, normas y procedimientos establecidos por la empresa, siguiendo las directrices y las instrucciones proporcionadas.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Reglas