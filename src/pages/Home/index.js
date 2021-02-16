import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Logo from './../../../assets/produtos/mimos.png'
import BG from './../../../assets/produtos/papelparede.jpg';

const { height, width} = Dimensions.get('window')
export default function Home(props) {
    const { navigation } = props;
    
  return (
        <View style={styles.container}>
            <Image source={BG} style={styles.backgroundGif} />
            <ScrollView style={{flex: 1, width: '100%'}}>
                <View style={styles.containerScroll}>
                    <Image source={Logo} style={styles.logo} />
                    <View style={[styles.containerTexto, styles.border2]}>
                        <Text style={styles.titulo}>Seja bem-vindo à Mimos!</Text>
                        <Text style={styles.texto}>A loja mais fofa que você já viu! Aqui você vai encontrar o presente ideal para aconchegar o coração de quem você ama!</Text>
                    </View>
                    <TouchableOpacity style={[styles.botao, styles.border]} title="Ir para Sobre" onPress={() => navigation.navigate("Produtos")}>
                        <Text style={styles.botaoTexto}>Produtos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.botao, styles.border]} title="Ir para Sobre" onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.botaoTexto}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <StatusBar hidden />
            
        </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerScroll: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10
    },
    backgroundGif: {
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0,
        paddingVertical: 10
    },
    logo:{
        width: '80%',
        height: 100,
        resizeMode: 'contain',
        marginTop: 50,
        marginBottom: 0
    },
    containerTexto:{
        width: '80%',
        alignContent: 'center',
        marginVertical: 10,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'pink'
    },
    titulo:{
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        justifyContent: 'center',
    },
    texto:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center'
    },
    border:{
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, .1)',
        borderTopWidth: 1,
        borderTopColor: 'rgba(255, 255, 255, .1)',
        borderLeftWidth: 1,
        borderLeftColor: 'rgba(255, 255, 255, .1)',
        borderRightWidth: 1,
        borderRightColor: 'rgba(255, 255, 255, .1)',
    },
    border2:{
        borderBottomWidth: 3,
        borderBottomColor: 'rgba(255, 255, 255, 1)',
        borderTopWidth: 3,
        borderTopColor: 'rgba(255, 255, 255, 1)',
        borderLeftWidth: 3,
        borderLeftColor: 'rgba(255, 255, 255, 1)',
        borderRightWidth: 3,
        borderRightColor: 'rgba(255, 255, 255, 1)',
    },
    botao:{
        position: 'relative',
        width: '20%',
        height: 50,
        paddingVertical: 10,
        justifyContent: 'center',
        marginVertical: 5,
        backgroundColor: '#646081',
        borderRadius: 10

    },
    botaoTexto:{
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    }
});
