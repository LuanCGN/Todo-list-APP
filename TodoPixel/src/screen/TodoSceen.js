import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import { Icon, IconButton } from 'react-native-paper';


console.log(Date.now().toString());

const TodoSceen = () => {

    //init local states
    const[todo, setTodo] = useState("");
    const[todoList, setTodoList] = useState([]);
    const[editedTodo, setEditedTodo] = useState(null);
    //Handle add todo
    
    const handleAddTodo = ()=>{

      // sturtcure of a single todo item
      //{
      //  id:
      //  title:
      //} 
      if(todo === ""){
        return;
      }
      
      setTodoList([...todoList, {id: Date.now().toString(), title: todo}]);
      setTodo("");
    };
    // Hendle Delete
    const handleDeleteTodo = (id)=>{

      const updatedTodoList = todoList.filter((todo)=> todo.id !== id)
      
      setTodoList(updatedTodoList);
      
    };

    //Handle Edit todo

    const handleEditTodo = (todo)=>{

      setEditedTodo(todo);
      setTodo(todo.title);
     
          
    };

    // Handle Update

    const handleUpdateTodo = ()=>{

      const updatedTodos = todoList.map((item)=>{

        if(item.id === editedTodo.id){
          return {...item, title: todo}
        }

        return item

        

      });
      setTodoList(updatedTodos);
      setEditedTodo(null);
      setTodo("");
    };




    //render todo
    const renderTodos = ({ item, index }) => {
        return (
          <View style={{
            backgroundColor:"#1e90ff" , 
            borderRadius: 6, 
            paddingHorizontal:6, 
            paddingVertical:12, 
            marginBottom: 12, 
            flexDirection: "row", 
            alignItems:"center",
            shadowColor: "#000",
            shadowOffset:{width: 0, height: 2},
            shadowOpacity: 0.8,
            
            }}>

            

            <Text style={{color: "#fff", fontSize: 20, fontWeight: "800", flex: 1 }}>{item.title}</Text>

            <IconButton icon="pencil" iconColor='#fff' onPress={()=>handleEditTodo(item)}/>
            <IconButton icon="trash-can" iconColor='#fff' onPress={()=>handleDeleteTodo(item.id)}/>

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
      value={todo}
      onChangeText={(userText)=> setTodo(userText)}
      
      />

      {
        editedTodo ? 
        <TouchableOpacity style={{
          backgroundColor:"#000", 
          borderRadius: 6, 
          paddingVertical: 10, 
          marginVertical: 34, 
          alignItems: "center",}}
          onPress={()=> handleUpdateTodo()}
        >
          
          <Text style={{color: "#fff" , fontWeight: "bold", fontSize: 20}}>Salvar</Text>
        </TouchableOpacity> :
        <TouchableOpacity style={{
          backgroundColor:"#000", 
          borderRadius: 6, 
          paddingVertical: 10, 
          marginVertical: 34, 
          alignItems: "center",}}
          onPress={()=> handleAddTodo()}
        >
          
          <Text style={{color: "#fff" , fontWeight: "bold", fontSize: 20}}>Salvar</Text>
        </TouchableOpacity>
        
        

      }
      

    {/*Render todo list*/}

    <FlatList
  data={todoList}
  renderItem={renderTodos}
  keyExtractor={(item) => item.id}
/>

    
    </View>
  )
}

export default TodoSceen

const styles = StyleSheet.create({})