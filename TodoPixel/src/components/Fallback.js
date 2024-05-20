import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Fallback = () => {
  return (
    <View style={styles.container}>
        <Image source={require("../../assets/todo.png")} style={styles.image} />
        <Text style={styles.text}>adicione suas tarefas</Text>
    </View>
  )
}

export default Fallback

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  image: {
    height: 290,
    width: 290,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: '150',
    backgroundColor: "#000",
    borderRadius: 70,
    marginTop: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
  }
});
