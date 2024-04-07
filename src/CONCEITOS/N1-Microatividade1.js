import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const PizzaTranslator = () => {
const [text, setText] = useState('');

  // Esta função poderia ser usada para fazer algo quando o usuário
  // pressiona o botão enviar/return no teclado, como por exemplo,
  // enviar o texto "traduzido" para um servidor ou para outro componente.
const handleSubmit = () => {
    console.log("Texto submetido: ", text);
    // Lógica adicional para lidar com a submissão do texto
};

return (
    <View style={styles.container}>
    <TextInput
        style={styles.input}
        placeholder="Digite aqui para traduzir!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        onSubmitEditing={handleSubmit} // Adicionado para lidar com a submissão do texto
    />
    <Text style={styles.text}>
        {text.split(' ').map(word => word && '🍕').join(' ')}
    </Text>
    </View>
);
};

const styles = StyleSheet.create({
container: {
    padding: 10,
},
input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
},
text: {
    padding: 10,
    fontSize: 42,
},
});

export default PizzaTranslator;