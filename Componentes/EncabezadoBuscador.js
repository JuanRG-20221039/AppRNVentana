import React from "react";
import { View, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {StyleEncabezadoBuscador} from './Styles'

export const EncabezadoBuscador = () => {
  return (
    <View style={StyleEncabezadoBuscador.header}>
      <View style={StyleEncabezadoBuscador.headerParte2}>
      <Image
        source={require("../assets/img/logo.png")}
        style={StyleEncabezadoBuscador.img}
      />
        <Text style={StyleEncabezadoBuscador.texto}>𝘾𝙧𝙪𝙣𝙘𝙝𝙮𝙁𝙧𝙪𝙞𝙩𝙨</Text>
      </View>
    </View>
  );
};

export default EncabezadoBuscador;
