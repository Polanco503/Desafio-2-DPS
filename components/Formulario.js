// components/Formulario.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from '../styles/formStyles';

const Formulario = ({ onAgregar }) => {
  const [tipo, setTipo] = useState('');
  const [marca, setMarca] = useState('');
  const [serie, setSerie] = useState('');
  const [precio, setPrecio] = useState('');
  const [fecha, setFecha] = useState('');

  const agregar = () => {
    if (tipo && marca && serie && precio && fecha) {
      const pieza = {
        id: Date.now().toString(),
        tipo,
        marca,
        serie,
        precio,
        fecha,
      };
      onAgregar(pieza);
      // Limpiar el formulario
      setTipo('');
      setMarca('');
      setSerie('');
      setPrecio('');
      setFecha('');
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        placeholder="Tipo de pieza"
        value={tipo}
        onChangeText={setTipo}
        style={styles.input}
      />
      <TextInput
        placeholder="Marca"
        value={marca}
        onChangeText={setMarca}
        style={styles.input}
      />
      <TextInput
        placeholder="Número de serie"
        value={serie}
        onChangeText={setSerie}
        style={styles.input}
      />
      <TextInput
        placeholder="Precio"
        value={precio}
        onChangeText={setPrecio}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Fecha (YYYY-MM-DD)"
        value={fecha}
        onChangeText={setFecha}
        style={styles.input}
      />
      <Button title="Agregar" onPress={agregar} />
    </View>
  );
};

export default Formulario;
