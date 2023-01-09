import React, {useState} from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';

function App() {
  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
  }
  function decreaseCounter() {
    setCounter(counter * 10);
  }
  return (
    <SafeAreaView>
      <Text style={{fontSize:40,}}>Counter: {counter} </Text>
      <Button title="Sayiyi Arttir" onPress={increaseCounter} />
      <Button title="Onlu Carp" onPress={decreaseCounter} />
    </SafeAreaView>
  );
}

export default App;
