import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [numero, setNumero] = useState(null);

  const sortearNumero = () => {
    const numeroAleatorio = Math.floor(Math.random() * 11); // Gera um número entre 0 e 10
    setNumero(numeroAleatorio);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Escolha um número entre 0 e 10</Text>
      <Button title="Sortear" onPress={sortearNumero} />
      <Text style={styles.resultado}>
        {numero !== null ? `Número: ${numero}` : 'Nenhum número sorteado.'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  titulo: {
    fontSize: 18,
    marginBottom: 20,
  },
  resultado: {
    marginTop: 20,
    fontSize: 60,
    fontWeight: 'bold',
    color:'#aacc22',
  },
});
