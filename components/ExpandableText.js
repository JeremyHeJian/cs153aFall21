import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const App = ({title, text}) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title={title} onPress={() => setVisible(!visible)} />
      {visible ? <Text style={{padding: 10}}>{text}</Text> : <></>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ddd',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
    margin: 5,
  },
});

export default App;
