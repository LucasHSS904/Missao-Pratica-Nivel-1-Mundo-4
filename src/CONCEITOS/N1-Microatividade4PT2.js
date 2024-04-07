import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
container: {
    paddingTop: 50,
},
tinyLogo: {
    width: 50,
    height: 50,
},
logo: {
    width: 66,
    height: 58,
},
stretch: {
width: 100,
height: 200,
resizeMode: 'stretch',
},
});

const DisplayAnImage = () => {
return (
    <View style={styles.container}>
    <Image
        style={styles.tinyLogo}
        source={require('./assets/react-native-logo.png')}
    />
    <Image
        style={styles.tinyLogo}
        source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
    />
    <Image
        style={styles.logo}
        source={{
        uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
    />
    <Image
        style={styles.stretch}
        source={require('./assets/react-native-logo.png')}
    />
    </View>
    );
};

export default DisplayAnImage;