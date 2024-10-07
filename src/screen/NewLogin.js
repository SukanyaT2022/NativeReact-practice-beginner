import React from 'react';
import {
  ScrollView,
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

const NewLogin = () => {
  return (
    <View style={styles.wrapperStyle}>
      <View style={{flex: 0.3, backgroundColor: 'blue'}}>
        <Image
          source={require('../Asset/Image/panicCatBG.webp')}
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
            marginTop: 30,
            borderRadius: 50, //put half value of height or width  to make it round circle
          }}></Image>
        <Text style={styles.headerStyle}>Welcome!</Text>
      </View>

      <View style={{flex: 0.7, }}>
        <TextInput placeholderTextColor={'black'} style={styles.inputStyle} placeholder="User Name" />
        <TextInput placeholderTextColor={'black'}  style={styles.inputStyle} placeholder="User Name" />
      </View>

      <Text>Forget my password</Text>

      {/* below close div for wrapper */}
    </View>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 20,
  },

  wrapperStyle: {
    flex: 1,
    justifyContent: 'space-start',
 
  },
  wrapInputStyle: {
    // backgroundColor: 'yellow',
  },
  inputStyle: {
    // backgroundColor: 'red',
    paddingVertical: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    textAlign: 'center',
borderWidth:3,
borderRadius:10,
borderColor:'green',

  },

  wrapInputStyle: {},
});

export default NewLogin;
