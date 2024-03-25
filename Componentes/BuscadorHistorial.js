import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, Image } from "react-native";
import EncabezadoBuscador from './EncabezadoBuscador'
import { useNavigation } from '@react-navigation/native'

import { StyleBuscadorHistorial } from './Styles'
import { Boton } from './Atomicos'

const BuscadorHistorial = () => {
  const nav = useNavigation();
  const [busqueda, setBusqueda] = useState("");
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function fetchProductos() {
      try {
        const response = await fetch("https://apipry-dev-gjxn.1.us-1.fl0.io/productos");
        if (!response.ok) {
          throw new Error("No se pudieron obtener los productos");
        }
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    }

    fetchProductos();
  }, []);

  return (
    <View style={StyleBuscadorHistorial.Contenedor}>
      <EncabezadoBuscador />
      <View>
        <TextInput
          style={StyleBuscadorHistorial.input}
          placeholder="Busqueda..."
          value={busqueda}
          onChangeText={setBusqueda}
          autoCapitalize="none"
        />
      </View>

      <FlatList
        data={productos}
        renderItem={({ item }) => (
          <View style={StyleBuscadorHistorial.AllCard}>
            <View style={StyleBuscadorHistorial.card}>
              <Text style={StyleBuscadorHistorial.NombreProducto}>{item.nombre}</Text>
              <View style={StyleBuscadorHistorial.cardRow}>
              <Image source={{ uri: item.imagen }} style={StyleBuscadorHistorial.image}/>
                <View style={StyleBuscadorHistorial.cardColum}>
                  <Text style={StyleBuscadorHistorial.DescripcionProducto}>{item.descripcion}</Text>
                  <Text style={StyleBuscadorHistorial.DescripcionProducto}>Precio: ${item.precio}</Text>
                  <Text style={StyleBuscadorHistorial.DescripcionProducto}>Stock: {item.stock}</Text>
                </View>
              </View>
              <View style={StyleBuscadorHistorial.ContBoton}>
                <Boton 
                  texto={'Ver más detalles del producto'} 
                  accion={() => nav.navigate('DetalleProducto', { id: item._id })} // Pasa el ID del producto como parámetro
                  colorA="#50E06F" 
                  colorB="#41B059" 
                  estiloB={StyleBuscadorHistorial.button}
                  estiloT={StyleBuscadorHistorial.buttonText} 
                />
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export default BuscadorHistorial;