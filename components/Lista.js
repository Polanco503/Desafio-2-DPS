// components/Lista.js
import React from 'react';
import { FlatList } from 'react-native';
import Item from './Item';

const Lista = ({ piezas, onEliminar, onSeleccionar }) => {
  return (
    <FlatList
      data={piezas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Item
          pieza={item}
          onEliminar={onEliminar}
          onSeleccionar={onSeleccionar}
        />
      )}
    />
  );
};

export default Lista;
