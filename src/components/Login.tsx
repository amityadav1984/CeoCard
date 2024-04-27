import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Login = () => {
    return (<View style={styles.centered}>
        <Text style={{ color: 'red', fontSize: 24 }}> Login Screen</Text>
    </View>);
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Login;
