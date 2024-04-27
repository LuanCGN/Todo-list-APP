import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import { Icon, IconButton } from 'react-native-paper';
import Fallback from '../components/Fallback';


console.log(Date.now().toString());

const TodoSceen = () => {

    //iniciar estados locais

    const[todo, setTodo] = useState("");
    const[todoList, setTodoList] = useState([]);
    const[editedTodo, setEditedTodo] = useState(null);

    //adicionar tarefas
    
    const handleAddTodo = ()=>{

    //estrutura de um unico item de tarefa
      
      if(todo === ""){
        return;
      }
      
      setTodoList([...todoList, {id: Date.now().toString(), title: todo}]);
      setTodo("");
    };
    // exclusão

    const handleDeleteTodo = (id)=>{

      const updatedTodoList = todoList.filter((todo)=> todo.id !== id)
      
      setTodoList(updatedTodoList);
      
    };

    //Editar Tarefas

    const handleEditTodo = (todo)=>{

      setEditedTodo(todo);
      setTodo(todo.title);
     
          
    };

    // Atualizar tarefas

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




    //renderizar tarefas

    const renderTodos = ({ item, index }) => {
        return (
          <View style={{
            backgroundColor:"#40e0d0" , 
            borderRadius: 6, 
            paddingHorizontal:6, 
            paddingVertical:5, 
            marginBottom: 12, 
            flexDirection: "row", 
            alignItems:"center",
            shadowColor: "#000",
            shadowOffset:{width: 0, height: 2},
            shadowOpacity: 0.8,
            
            }}>

            

            <Text style={{color: "#000000", fontSize: 20, fontWeight: "400", flex: 1 }}>{item.title}</Text>

            <IconButton icon="pencil" iconColor='#fff' onPress={()=>handleEditTodo(item)}/>
            <IconButton icon="trash-can" iconColor='#fff' onPress={()=>handleDeleteTodo(item.id)}/>

          </View>
        );
      };
      
  return (
    


    <View style={{marginHorizontal: 16, paddingTop: 40,  }}>

      {/*Logo*/}

    <View style ={{
      flexDirection: 'row',
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
      }}>

      <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        }}>Todo
        </Text>

        <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#40e0d0',
        }}>Pixel
        </Text>

      </View>
    
       {/*Barra de adicionar e modificar Tarefas*/}

      <TextInput 
      style={{
      
      borderWidth:3, 
      borderColor: "#40e0d0", 
      borderRadius: 10, 
      paddingVertical: 8,
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
      

    {/*Renderizar lista de tarefas*/}
    
    <FlatList

    
     data={todoList}
     renderItem={renderTodos}
     keyExtractor={(item) => item.id}
     
     
/>

     {
      todoList.length <=0 && <Fallback/>
     }
    
    </View>
  )
}

export default TodoSceen

const styles = StyleSheet.create({})