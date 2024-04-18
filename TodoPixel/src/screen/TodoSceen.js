import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { Icon, IconButton } from 'react-native-paper';

const dummyData = [
  {
    id: "01",
    title: "Lavar o Carro",
  },
  {
    id: "02",
    title: "Ler um livro",
  },
];

const TodoSceen = () => {

    const renderTodos = ({ item, index }) => {
        return (
          <View style={{backgroundColor:"#1e90ff" , borderRadius: 6, paddingHorizontal:6, paddingVertical:12, marginBottom: 12, 
          flexDirection: "row", alignItems:"center"}}>

            

            <Text style={{color: "#fff", fontSize: 20, fontWeight: "800", flex: 1 }}>{item.title}</Text>

            <IconButton icon="pencil" iconColor='#fff'/>
            <IconButton icon="trash-can" iconColor='#fff'/>

          </View>
        );
      };
      
  return (
    <View style={{ marginHorizontal: 16, paddingTop: 40, }}>
    

      <TextInput 
      style={{
      borderWidth:2, 
      borderColor: "#1e90ff", 
      borderRadius: 6, 
      paddingVertical: 12,
      paddingHorizontal: 16,
      
      }}

      placeholder='Adicione uma Tarefa'
      
      />

      <TouchableOpacity style={{backgroundColor:"#000", borderRadius: 6, paddingVertical: 10, marginVertical: 34, alignItems: "center",}}>
        <Text style={{color: "#fff" , fontWeight: "bold", fontSize: 20}}>Adicione</Text>
      </TouchableOpacity>

    {/*Render todo list*/}

    <FlatList
  data={dummyData}
  renderItem={renderTodos}
  keyExtractor={(item) => item.id}
/>

    
    </View>
  )
}

export default TodoSceen

const styles = StyleSheet.create({})