import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React from 'react'

const dummyData = [
  {
    id: "01",
    title: "Lavar o Carro",
  },
  {
    id: "02",
    title: "Lar um livro",
  },
];

const TodoSceen = () => {

    const renderTodos = ({ item }) => {
        return (
          <View>
            <Text>{item.title}</Text>
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

      <TouchableOpacity style={{backgroundColor:"#000", borderRadius: 6, paddingVertical: 10, marginTop: 24, alignItems: "center",}}>
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