import React, {useState} from 'react';
import {
  TouchableOpacity,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [radius, setRadius] = useState('');
  const [height, setHeight] = useState('');
  const [answer, setAnswer] = useState('');
  const [debugging, setDebugging] = useState(false);
  let debugView = '';
  if (debugging) {
    debugView = (
      <View>
        <Text style={{fontSize: 36}}>radius = {radius} inches</Text>
        <Text style={{fontSize: 36}}>height = {height} inches</Text>
        <Text style={{fontSize: 36}}>
          area of base = {radius * radius * Math.PI} square inches
        </Text>
        <Text style={{fontSize: 36}}>
          volume of cylinder = {radius * radius * Math.PI * height} cubic inches
        </Text>
        <Text style={{fontSize: 36}}>
          volume of cylinder = {(radius * radius * Math.PI * height) / 231}
          gallons
        </Text>
      </View>
    );
  }

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={{fontSize: 120}}>Quiz 3</Text>
        <Text style={{fontSize: 36}}>CS153a Fall21</Text>
      </View>
      <View>
        <Text style={{fontSize: 36}} style={{fontSize: 36}}>
          Enter the radius and height of a cylinder in inches and we will
          calculate the volume in gallons. A 6 inch radius and 12 inch height
          will have volume 5.88. Divide cubic inches by 231 to get gallons, and
          show only 2 digits after the decimal point in the volume.
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          backgroundColor: 'pink',
          width: 500,
        }}
      >
        <Text style={{fontSize: 36}}>radius: </Text>
        <TextInput
          style={{fontSize: 36}}
          placeholder="radius"
          onChangeText={text => {
            setRadius(parseFloat(text));
          }}
          value={radius}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          backgroundColor: 'pink',
          width: 500,
        }}
      >
        <Text style={{fontSize: 36}}>height: </Text>
        <TextInput
          style={{fontSize: 36}}
          placeholder="height"
          onChangeText={text => {
            setHeight(parseFloat(text));
          }}
          value={height}
        />
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            height: 60,
            borderRadius: 8,
            width: 400,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            setAnswer(((radius * radius * Math.PI * height) / 231).toFixed(2));
          }}
        >
          <Text style={{fontSize: 36, color: '#fff'}}>CALCULATE VOLUME</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{fontSize: 36, backgroundColor: 'pink', width: 450}}>
          The volume is {answer} gallons
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#4895ef',
            height: 60,
            borderRadius: 8,
            width: 530,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => setDebugging(!debugging)}
        >
          <Text style={{fontSize: 36, color: '#fff'}}>
            TOGGLE CALCULATIONS VIEW
          </Text>
        </TouchableOpacity>
        {debugView}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'lightgreen',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'thick solid red',
    margin: '20px',
    padding: '20px',
  },
  textinput: {
    margin: 20,
    fontSize: 20,
  },
  header: {
    fontSize: 40,
    color: 'blue',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;
