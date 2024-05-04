import { StyleSheet, View , SafeAreaView } from 'react-native';
import TodoSceen from './src/screen/TodoSceen';

export default function App() {
  return (
    <SafeAreaView>
    <View >
     <TodoSceen/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
