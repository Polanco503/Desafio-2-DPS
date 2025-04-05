import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Formulario from './components/Formulario';
import Lista from './components/Lista';
import DetalleModal from './components/DetalleModal';

export default function App() {
  const [piezas, setPiezas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [piezaSeleccionada, setPiezaSeleccionada] = useState(null);

  const agregarPieza = (pieza) => {
    setPiezas(prev => {
      const nuevasPiezas = [...prev, pieza];
      // Se ordena la lista por fecha de cambio
      nuevasPiezas.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
      return nuevasPiezas;
    });
  };

  const eliminarPieza = (id) => {
    setPiezas(prev => prev.filter(p => p.id !== id));
  };

  const abrirModal = (pieza) => {
    setPiezaSeleccionada(pieza);
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
    setPiezaSeleccionada(null);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, textAlign: 'center', marginBottom: 10 }}>
        Histórico de Piezas
      </Text>
      <Formulario onAgregar={agregarPieza} />
      <Lista piezas={piezas} onEliminar={eliminarPieza} onSeleccionar={abrirModal} />
      {piezaSeleccionada && (
        <DetalleModal
          visible={modalVisible}
          pieza={piezaSeleccionada}
          onCerrar={cerrarModal}
        />
      )}
    </View>
  );
};