import React, { useState, useEffect } from "react";
import EncabezadoDetalle from './EncabezadoDetalle'
import {
  View,
  Text,
  TextInput,
  Image,
} from "react-native";

import { useNavigation, useRoute } from '@react-navigation/native'
import {StylesDetalleProducto} from './Styles'
import {Boton} from './Atomicos'

const Card = ({ children }) => {
  return <View style={StylesDetalleProducto.card}>{children}</View>;
};

export const DetalleProducto = () => {
  const nav = useNavigation();
  const route = useRoute();
  const { id } = route.params; // Obtener el ID del producto de los parámetros de ruta
  const [product, setProduct] = useState(null);
  const [unitsToBuy, setUnitsToBuy] = useState(1);

  useEffect(() => {
    async function fetchProducto() {
      try {
        const response = await fetch(`https://apipry-dev-gjxn.1.us-1.fl0.io/productos/${id}`);
        if (!response.ok) {
          throw new Error("No se pudo obtener el producto");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    }

    fetchProducto();
  }, [id]);

  if (!product) {
    return <Text>Cargando...</Text>; // Muestra un mensaje de carga mientras se obtienen los datos del producto
  }

  const {
    nombre,
    descripcion,
    precio,
    stock,
    imagen
  } = product;

  const decreaseUnits = () => {
    if (unitsToBuy > 1) {
      setUnitsToBuy(unitsToBuy - 1);
    }
  };

  const increaseUnits = () => {
    if (unitsToBuy < stock) {
      setUnitsToBuy(unitsToBuy + 1);
    }
  };

  const handleBuy = () => {
    // Lógica para realizar la compra
    console.log("Producto comprado:", nombre, unitsToBuy);
  };

  return (
    <View style={StylesDetalleProducto.container}>
      <EncabezadoDetalle />
      <Card>
        <View style={StylesDetalleProducto.imageContainer}>
          <Image
            source={{ uri: imagen }}
            style={StylesDetalleProducto.image}
          />
          <View style={StylesDetalleProducto.nameContainer}>
            <Text style={StylesDetalleProducto.title}>Nombre del Producto:</Text>
            <TextInput
              style={StylesDetalleProducto.input}
              value={nombre}
              editable={false}
            />
          </View>
        </View>
        <Text style={StylesDetalleProducto.title}>Descripción del producto:</Text>
        <TextInput
          style={StylesDetalleProducto.multilineInput}
          value={descripcion}
          multiline={true}
          editable={false}
        />
      </Card>
      <Card>
        <Text style={StylesDetalleProducto.title}>Precio (por unidad):</Text>
        <TextInput
          style={StylesDetalleProducto.input}
          value={`${precio}`}
          keyboardType="numeric"
          editable={false}
        />
        <Text style={StylesDetalleProducto.title}>Total de unidades:</Text>
        <Text style={StylesDetalleProducto.unitsText}>{stock}</Text>
      </Card>
      {/* <View style={StylesDetalleProducto.unitsContainer}>
        <Boton texto={'-'} accion={decreaseUnits}
          estiloB={StylesDetalleProducto.unitButton} estiloT={StylesDetalleProducto.unitButtonText}/>
        <Text style={StylesDetalleProducto.unitsText}>{unitsToBuy}</Text>
        <Boton texto={'+'} accion={increaseUnits}
          estiloB={StylesDetalleProducto.unitButton} estiloT={StylesDetalleProducto.unitButtonText}/>
      </View> */}
      <View style={StylesDetalleProducto.buttonContainer}>
        <Boton texto={'Comprar'} accion={handleBuy} colorA="#50E06F" colorB="#41B059"
          estiloB={StylesDetalleProducto.saveButton} estiloT={StylesDetalleProducto.buttonText}/>
      </View>
      <View style={StylesDetalleProducto.buttonContainer}>
        <Boton texto={'Regresar'} accion={()=>nav.navigate('Busqueda')} colorA="#ffb703" colorB="#BF8A03"
          estiloB={StylesDetalleProducto.deleteButton} estiloT={StylesDetalleProducto.buttonText}/>
      </View>
    </View>
  );
};

export default DetalleProducto;