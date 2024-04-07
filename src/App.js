import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, FlatList } from 'react-native';

// Dados de exemplo para a lista de fornecedores
const initialSuppliers = [
{
    id: '1',
    name: 'Fornecedor A',
    address: 'Endereço A',
    contact: 'Contato A',
    category: 'Categoria A',
    imageUrl: 'https://example.com/image-a.png',
},
  // Adicione mais fornecedores conforme necessário
];

const SupplierApp = () => {
const [suppliers, setSuppliers] = useState(initialSuppliers);
const [newSupplierName, setNewSupplierName] = useState('');

  // Função para adicionar um novo fornecedor
const addSupplier = () => {
    const newSupplier = {
      id: String(suppliers.length + 1), // Apenas para exemplo; use uma geração de ID mais robusta
    name: newSupplierName,
      // Adicione mais detalhes conforme necessário
      imageUrl: 'https://example.com/image-placeholder.png', // URL de placeholder
    };
    setSuppliers(currentSuppliers => [...currentSuppliers, newSupplier]);
    setNewSupplierName(''); // Limpar o campo após adicionar
};

return (
    <View style={styles.container}>
    <Text style={styles.header}>Cadastro de Fornecedores</Text>
    <TextInput
        style={styles.input}
        placeholder="Nome do Fornecedor"
        value={newSupplierName}
        onChangeText={setNewSupplierName}
    />
    <Button title="Adicionar Fornecedor" onPress={addSupplier} />
    <FlatList
        data={suppliers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
        <View style={styles.supplierItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.supplierImage} />
            <Text>{item.name}</Text>
            {/* Exibir mais detalhes conforme necessário */}
        </View>
        )}
    />
    </View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
},
header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
},
input: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
},
supplierItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
},
supplierImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25, // Círculo
},
});

export default SupplierApp;
