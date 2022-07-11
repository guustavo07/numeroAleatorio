import React, { useState } from 'react'
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'

const App = () => {
  const [numero, setNumero] = useState(10)

  function handleNumero() {
    const novo_numero = Math.floor(Math.random() * 10)
    setNumero(novo_numero)
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={style.botao}>
        <Text>Gerar Número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default App

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BA181B',
    alignItems: 'center',
    justifyContent: 'center'
  },
  numero: {
    fontSize: 50,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  botao: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  }
})
