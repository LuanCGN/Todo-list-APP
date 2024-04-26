import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Fallback = () => {
  return (
    

    
    <View>

        <Image source={require("../../assets/todo.png")} 
        style={{
            height: 300, 
            width: 300,
            marginHorizontal: 45,
            top: '5%',

            }}/>



      <Text style = {{
        color: "#fff" ,
        fontSize: 20,
        textAlign: 'center',
        top: '20%', 
        fontWeight: '200',
        backgroundColor:"#000", 
        borderRadius: 70,
        marginHorizontal: 70,

      }}>comece a adicionar sua tarefa</Text>
    </View>
  )
}

export default Fallback

const styles = StyleSheet.create({})