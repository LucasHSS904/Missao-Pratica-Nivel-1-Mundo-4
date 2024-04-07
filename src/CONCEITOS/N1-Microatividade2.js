import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';

const logo = {
uri: 'https://reactnative.dev/img/tiny_logo.png',
width: 64,
height: 64,
};

// Supondo que temos um array de itens a serem renderizados pela FlatList
const items = [
{ key: '1', type: 'text', value: 'Scroll me plz' },
{ key: '2', type: 'image' },
{ key: '3', type: 'image' },
  // Repetindo alguns itens apenas para ilustração
{ key: '4', type: 'text', value: 'If you like' },
{ key: '5', type: 'image' },
{ key: '6', type: 'text', value: 'Scrolling down' },
{ key: '7', type: 'image' },
{ key: '8', type: 'text', value: "What's the best" },
{ key: '9', type: 'image' },
{ key: '10', type: 'text', value: 'Framework around?' },
{ key: '11', type: 'image' },
{ key: '12', type: 'text', value: 'React Native' },
];

const App = () => {
const renderItem = ({ item }) => {
    if (item.type === 'text') {
    return <Text style={styles.text}>{item.value}</Text>;
    } else if (item.type === 'image') {
    return <Image source={logo} style={styles.image} />;
    }
};

return (
    <FlatList
    data={items}
    renderItem={renderItem}
    keyExtractor={item => item.key}
    />
);
};

const styles = StyleSheet.create({
text: {
    fontSize: 32,
    padding: 10,
},
image: {
    width: 64,
    height: 64,
    alignSelf: 'center',
},
});

export default App;