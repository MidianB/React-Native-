import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, FlatList  } from 'react-native';
import BonecaAmarela1 from './../../../assets/produtos/BonecaAmarela1.jpeg';
import BonecaAzul1 from './../../../assets/produtos/BonecaAzul1.jpeg';
import BonecaRosa1 from './../../../assets/produtos/BonecaRosa1.jpeg';
import BonecaAmarela2 from './../../../assets/produtos/BonecaAmarela2.jpeg';
import BonecaRosa2 from './../../../assets/produtos/BonecaRosa2.jpeg';
import BonecaRoxo1 from './../../../assets/produtos/BonecaRoxo1.jpeg';

export default class Produtos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            produtos: []
        }
        this.Produto = this.Produto.bind(this);
    }
    async componentDidMount(){
        let resultado = [
            {
                nome: 'Boneca Aconchego',
                preco_antigo: '90',
                preco_atual: ' 60',
                imagem: BonecaAmarela1
            },
            {
                nome: "Boneca Carinho",
                preco_antigo: ' 100',
                preco_atual: " 70",
                imagem: BonecaRosa1
            },
            {
                nome: "Boneca Azaleia",
                preco_antigo: " 80",
                preco_atual: "60",
                imagem: BonecaAzul1
            },
            {
                nome: "Boneca Rosa",
                preco_antigo: "70",
                preco_atual: " 55",
                imagem: BonecaRosa2

            },
            {
                nome: "Bonceca Chamego",
                preco_antigo: " 90",
                preco_atual: " 70",
                imagem: BonecaAmarela2
            },
            {
                nome: "Boneca Dengo",
                preco_antigo: " 60",
                preco_atual: " 50",
                imagem: BonecaRoxo1
            }
        ]
        this.setState({produtos: resultado});
    }
    Produto = ({ item }) => {
        const atual = (parseInt(item.preco_atual)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        const antigo = (parseInt(item.preco_antigo)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        return <View style={styles.boxProduto}>
                    <Image style={styles.imagemProduto} source={item.imagem}/>
                    <Text style={styles.tituloProduto}>{item.nome}</Text>
                    <Text style={styles.novoProduto}>Preço antigo: <Text style={styles.antigoProduto}>{antigo}</Text></Text>
                    <Text style={styles.novoProduto}>Preço novo: <Text style={styles.novoProduto}>{atual}</Text></Text>
                </View>
    }
    render(){
        return (
            <View style={styles.main}>
                <StatusBar hidden />
                <View style={styles.container}>
                    <FlatList
                    style={styles.flat}
                    data={this.state.produtos}
                    renderItem={this.Produto}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 	'pink',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        width: '100%',
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    boxProduto:{
        marginVertical: 10,
        width: '80',
        alignSelf: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
    },
    imagemProduto:{
        width: '100%',
        height: 200,
        borderRadius: 10
    },
    tituloProduto:{
        fontSize: 20,
        color: 'white',
    },
    antigoProduto:{
        color: 'red'
    },
    novoProduto:{
        fontSize: 18,
        color: '#000'
    },
    flat:{
        width: '100%'
    }
});

