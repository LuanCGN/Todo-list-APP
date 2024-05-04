import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Fallback = () => {
  return (
    

    
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',

      }}>

        <Image source={require("../../assets/todo.png")} 
        style={{
            height: 300, 
            width: 300,
            justifyContent: 'center',
            alignItems: 'center',
            top: '5%',

            }}/>



      <Text style = {{
        color: "#fff" ,
        fontSize: 23,
        top: '20%', 
        fontWeight: '200',
        backgroundColor:"#000", 
        borderRadius: 70,
        marginHorizontal: 70,

      }}>---adicione suas tarefas---</Text>
    </View>
  )
}

export default Fallback

const styles = StyleSheet.create({})