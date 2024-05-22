import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IconButton } from 'react-native-paper';
import Fallback from '../components/Fallback';

//Imports: Aqui estamos importando os componentes necessários do React Native, como FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, e também do AsyncStorage para armazenamento local, o IconButton do react-native-paper e um componente de fallback personalizado.

const TodoScreen = () => {

 // Define o componente funcional TodoSceen. 

    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [editedTodo, setEditedTodo] = useState(null);

// useState: Aqui são definidos os estados do componente. todo armazena a entrada atual do usuário, todoList armazena a lista de tarefas, e editedTodo armazena a tarefa que está sendo editada.

    useEffect(() => {

 // Carrega a lista de tarefas armazenadas ao iniciar o aplicativo. Este useEffect executa apenas uma vez, quando o componente é montado. 

        loadTodoList();
    }, []);

    useEffect(() => {

// Salva a lista de tarefas sempre que ela é modificada. Este useEffect é acionado toda vez que todoList é alterado.

        saveTodoList();
    }, [todoList]);

    const loadTodoList = async () => {

// Função para carregar as tarefas armazenadas

        try {
            const storedTodoList = await AsyncStorage.getItem('todoList');
            if (storedTodoList !== null) {
                setTodoList(JSON.parse(storedTodoList));
            }
        } catch (error) {
            console.error('Erro ao carregar a lista de tarefas:', error);
        }
    };

    const saveTodoList = async () => {

// Função para salvar a lista de tarefas

        try {
            await AsyncStorage.setItem('todoList', JSON.stringify(todoList));
        } catch (error) {
            console.error('Erro ao salvar a lista de tarefas:', error);
        }

//Funções de carregamento e salvamento: loadTodoList carrega as tarefas armazenadas e saveTodoList salva a lista de tarefas no AsyncStorage.

    };

    const handleAddTodo = () => {

// Função para adicionar uma nova tarefa à lista

        if (todo === '') {
            return;
        }
        setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
        setTodo('');
    };

    const handleDeleteTodo = (id) => {

// Função para excluir uma tarefa da lista

        const updatedTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(updatedTodoList);
    };

    const handleEditTodo = (todo) => {

// Função para editar uma tarefa da lista

        setEditedTodo(todo);
        setTodo(todo.title);
    };

    const handleUpdateTodo = () => {

// Função para atualizar uma tarefa da lista

        const updatedTodos = todoList.map((item) => {
            if (item.id === editedTodo.id) {
                return { ...item, title: todo };
            }
            return item;
        });
        setTodoList(updatedTodos);
        setEditedTodo(null);
        setTodo('');

 //Funções de manipulação de tarefas: handleAddTodo adiciona uma nova tarefa, handleDeleteTodo exclui uma tarefa, handleEditTodo permite editar uma tarefa e handleUpdateTodo atualiza uma tarefa editada.

    };

    const renderTodos = ({ item }) => {

// Função para renderizar cada item da lista de tarefas

        return (
            <View style={styles.todoItem}>
                <Text style={styles.todoText}>
                    {item.title}
                </Text>
                <IconButton icon="pencil" iconColor="#fff" onPress={() => handleEditTodo(item)} />
                <IconButton icon="trash-can" iconColor="#fff" onPress={() => handleDeleteTodo(item.id)} />
            </View>
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Todo</Text>
                <Text style={styles.titleAccent}>Pixel</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Adicione uma Tarefa"
                value={todo}
                onChangeText={(userText) => setTodo(userText)}
            />
            {editedTodo ? (
                <TouchableOpacity style={styles.button} onPress={() => handleUpdateTodo()}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.button} onPress={() => handleAddTodo()}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            )}
            {todoList.map((item) => (
                <View key={item.id} style={styles.todoItem}>
                    <Text style={styles.todoText}>{item.title}</Text>
                    <IconButton icon="pencil" iconColor="#fff" onPress={() => handleEditTodo(item)} />
                    <IconButton icon="trash-can" iconColor="#fff" onPress={() => handleDeleteTodo(item.id)} />
                </View>
            ))}
            {todoList.length <= 0 && <Fallback />}
        </ScrollView>
    );

// Função para renderizar cada item da lista de tarefas

};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 40,
        paddingBottom: 20, 
    },
    header: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    titleAccent: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#40e0d0',
    },
    input: {
        borderWidth: 3,
        borderColor: '#40e0d0',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    button: {
        backgroundColor: '#000',
        borderRadius: 6,
        paddingVertical: 10,
        marginVertical: 34,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    todoItem: {
        backgroundColor: '#40e0d0',
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 5,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
    },
    todoText: {
        color: '#000000',
        fontSize: 20,
        fontWeight: '400',
        flex: 1,
    },
});

export default TodoScreen;
