// components/Item.js
import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import styles from '../styles/itemStyles';

const Item = ({ pieza, onEliminar, onSeleccionar }) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onSeleccionar(pieza)}
      activeOpacity={0.7}
    >
      <View style={styles.textContainer}>
        <Text style={styles.textTipo}>{pieza.tipo}</Text>
        <Text style={styles.textFecha}>{pieza.fecha}</Text>
      </View>
      <Button title="Eliminar" onPress={() => onEliminar(pieza.id)} />
    </TouchableOpacity>
  );
};

export default Item;
