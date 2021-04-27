import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Currency from './assets/currency.png';
import Bank from './assets/bank.png';
import Snackbar from 'react-native-snackbar';

const currencyPerRupee = {
  DOLLER: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLER: 0.2,
  CANDOLLER: 0.019,
  YAN: 1.14,
  DINAR: 0.0043,
  BITCOIN: 0.000004,
};

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(0);

  const calculate = function (currency) {
    if (!inputValue) {
      return Snackbar.show({
        text: 'you should enter a value first',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#FF6666',
        textColor: '#000000',
      });
    }
    console.log(currencyPerRupee[currency]);
    console.log(parseFloat(inputValue));
    let resultvalue = parseFloat(inputValue) * currencyPerRupee[currency];
    setResult(resultvalue.toFixed(2));
  };

  return (
    <>
      <ScrollView
        keyboardDismissMode={true}
        style={{backgroundColor: '#ffffff'}}>
        <SafeAreaView style={styles.safe}>
          <Image style={styles.image} source={Currency} />
          <TextInput
            keyboardType="numeric"
            placeholder="Enter in rupees"
            placeholderTextColor="black"
            style={styles.inputfield}
            value={inputValue}
            onChangeText={(input) => {
              return setInputValue(input);
            }}
          />
          <View style={styles.resultcontainer}>
            <View style={styles.resultop}>
              <Image source={Bank} />
              <Text style={{margin: 5, fontSize: 20}}>{result}</Text>
            </View>
          </View>
        </SafeAreaView>
        <View style={styles.convertButtoncontainer}>
          {Object.keys(currencyPerRupee).map(currencyname => (
            <TouchableOpacity
              style={styles.converterbtn}
              onPress={() => {
                calculate(currencyname);
              }}
              key={currencyname}>
              <Text style={styles.btnstyle}>{currencyname}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  textstyle: {
    fontSize: 50,
  },
  image: {
    marginVertical: 3,
    marginHorizontal: 3,
    width: 300,
    height: 200,
  },
  inputfield: {
    borderBottomColor: '#120E43',
    borderBottomWidth: 2,
    color: 'black',
    fontSize: 20,
  },
  resultcontainer: {
    marginVertical: 20,
    marginHorizontal: 60,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#e2e2e2',
  },
  resultop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  convertButtoncontainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    marginVertical: 40,
  },
  converterbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: '30%',
    borderColor: '#EDC126',
    backgroundColor: '#02B290',
    borderRadius: 10,
    borderWidth: 5,
    margin: 5,
  },
  btnstyle: {
    color: 'white',
  },
});

export default App;
