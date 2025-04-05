// components/DetalleModal.js
import React from 'react';
import { Modal, View, Text, Button } from 'react-native';
import styles from '../styles/modalStyles';

const DetalleModal = ({ visible, pieza, onCerrar }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Detalle de la Pieza</Text>
          <Text>Tipo: {pieza.tipo}</Text>
          <Text>Marca: {pieza.marca}</Text>
          <Text>Número de Serie: {pieza.serie}</Text>
          <Text>Precio: {pieza.precio}</Text>
          <Text>Fecha: {pieza.fecha}</Text>
          <Button title="Cerrar" onPress={onCerrar} />
        </View>
      </View>
    </Modal>
  );
};

export default DetalleModal;
