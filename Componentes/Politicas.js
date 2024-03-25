import { View, Text } from 'react-native'
import React from 'react'

import {StylesInfoEmpresa} from './Styles'
import { ScrollView } from 'react-native-gesture-handler'

const Politicas = () => {
    return (
        <View>
            <View style={StylesInfoEmpresa.Contenedor}>
                <ScrollView style={StylesInfoEmpresa.ScrollView}>
                    <View style={StylesInfoEmpresa.Card}>

                        <Text style={StylesInfoEmpresa.Titulo}>Políticas de Healthy & Nutritions:</Text>

                        <Text style={StylesInfoEmpresa.SubTitulo}>Política de Calidad:</Text>
                        <Text style={StylesInfoEmpresa.Texto}>Compromiso de ofrecer productos saludables y de alta calidad a través de ingredientes naturales, procesos de producción controlados y estándares de calidad rigurosos.</Text>

                        <Text style={StylesInfoEmpresa.SubTitulo}>Política de Ingredientes Naturales:</Text>
                        <Text style={StylesInfoEmpresa.Texto}>Utilización exclusiva de ingredientes naturales en la elaboración de los chips de frutas deshidratadas, evitando aditivos artificiales, colorantes o conservantes.</Text>

                        <Text style={StylesInfoEmpresa.SubTitulo}>Política de Sostenibilidad:</Text>
                        <Text style={StylesInfoEmpresa.Texto}>Compromiso con la sostenibilidad ambiental a través de prácticas responsables de abastecimiento, minimización de residuos y uso eficiente de los recursos naturales.</Text>

                        <Text style={StylesInfoEmpresa.SubTitulo}>Política de Salud y Nutrición:</Text>
                        <Text style={StylesInfoEmpresa.Texto}>Desarrollo de productos que promuevan la salud y el bienestar, con un enfoque en la selección de frutas nutritivas y la reducción de grasas saturadas, azúcares añadidos y sodio.</Text>

                        <Text style={StylesInfoEmpresa.SubTitulo}>Política de Transparencia:</Text>
                        <Text style={StylesInfoEmpresa.Texto}>Proporcionar información clara y precisa sobre los ingredientes utilizados, los valores nutricionales y los beneficios para la salud de los chips de frutas deshidratadas.</Text>

                        <Text style={StylesInfoEmpresa.SubTitulo}>Política de Etiquetado:</Text>
                        <Text style={StylesInfoEmpresa.Texto}>Cumplir con las regulaciones y normativas aplicables en cuanto al etiquetado de alimentos, brindando a los consumidores información veraz y comprensible sobre los productos.</Text>

                        <Text style={StylesInfoEmpresa.SubTitulo}>Política de Investigación y Desarrollo:</Text>
                        <Text style={StylesInfoEmpresa.Texto}>Invertir en investigación y desarrollo para mejorar continuamente la calidad, variedad y valor nutricional de los chips de frutas deshidratadas, así como explorar nuevas opciones de sabores y formatos.</Text>

                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Politicas