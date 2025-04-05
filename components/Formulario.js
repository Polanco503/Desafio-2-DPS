// components/Formulario.js
import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../styles/formStyles';

const Formulario = ({ onAgregar }) => {
  const [tipo, setTipo] = useState('');
  const [marca, setMarca] = useState('');
  const [serie, setSerie] = useState('');
  const [precio, setPrecio] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const formatDate = (date) => {
    let year = date.getFullYear();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  const agregar = () => {
    if (tipo && marca && serie && precio && date) {
      const pieza = {
        id: Date.now().toString(),
        tipo,
        marca,
        serie,
        precio,
        fecha: formatDate(date),
      };
      onAgregar(pieza);
      // Limpiar el formulario
      setTipo('');
      setMarca('');
      setSerie('');
      setPrecio('');
      setDate(new Date());
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
      {/* Botón para mostrar el selector de fecha */}
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
        <Text>{formatDate(date)}</Text>
      </TouchableOpacity>
      {/* Muestra el DateTimePicker cuando showDatePicker es true */}
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}
      <Button title="Agregar" onPress={agregar} />
    </View>
  );
};

export default Formulario;
