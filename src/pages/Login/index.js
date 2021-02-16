import { StatusBar } from 'expo-status-bar';
import React from 'react';
import  {useState} from 'react';
import { StyleSheet, User, Text, View,Image, TextInput, Alert,Button, TouchableOpacity ,SafeAreaView, ImageBackground} from 'react-native';
import BG from './../../../assets/produtos/papelparede.jpg';

export default function App() {

  <SafeAreaView style={styles.container}>

  <Text style={styles.h1}>CADASTRE-SE</Text>
  <Image source={BG} style={styles.backgroundGif} />
        <ImageBackground style={styles.logo} source={User}>
       
        </ImageBackground>
  
        <StatusBar style="auto " />
      </SafeAreaView>


  
  const [email, setEmail] =useState('');
  const [senha, setSenha] =useState('');


  const cadastro =()=>{

    Alert(email);
    Alert(senha);
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden/>

     <Text style={styles.text}>Seja Bem-vinda(o)!</Text>
      <StatusBar  />

   

      <Image source={require('../../../assets/produtos/mimos.png')}
      style={styles.logo}
      ></Image>
      <Text style={styles.h1}>Login</Text>




<Text style={styles.h2}>Email</Text>
      <TextInput style={styles.input} 
      placeholder="email@exemplo.com" onChangeText={text=>setEmail(text)}/>

<Text style={styles.h2}>Senha</Text>
      <TextInput style={styles.input} 
      placeholder="Digite sua senha" onChangeText={text=>setSenha(text)}
      secureTextEntry={true}
      />

      <TouchableOpacity style ={styles.btncadastro} onPress={()=>cadastro()}>
        <Text>CADASTRAR</Text></TouchableOpacity>


   

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  logo:{
    width:300,
    height:300,
    borderRadius:20,
    Align:'left'

  },
  button:{
   
    marginTop:1,
    padding:100

  },

  text:{
    
    marginTop:10,
    padding:100,
    width:1274,
    textAlign:'center',
    fontSize: 20
  

  },
  input:{
    marginTop:30,
    marginVertical: 10,
    padding:10,
    width:350,
    backgroundColor:'#fff',
    fontSize: 15,
    borderRadius:5
  },
  btncadastro:{
    
    width: 300,
    height:40 ,
    backgroundColor:'pink',
    textAlign:'center',
    borderRadius:5,
    justifyContent: 'center',
    height:40,
    marginVertical: 30,
    marginTop:30
  },
  
  backgroundGif: {
  
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0,
    paddingVertical: 10
}




});
