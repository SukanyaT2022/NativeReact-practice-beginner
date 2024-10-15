import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';

const Signin2 = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../Asset/Image/792.jpg')}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}>
        <TextInput placeholder="Username" style={styles.textInput} />
        <TextInput placeholder="Username" style={styles.textInput} />
        <TextInput placeholder="Username" style={styles.textInput} />
        <TextInput placeholder="Username" style={styles.textInput} />
        <TextInput placeholder="Username" style={styles.textInput} />
        <TextInput placeholder="Username" style={styles.textInput} />
        <TextInput placeholder="Username" style={styles.textInput} />
        <TextInput placeholder="Username" style={styles.textInput} />
        {/* <View style={styles.inner}>
          <TextInput placeholder="Username" style={styles.textInput} />

          <TouchableOpacity style={styles.styleInputBoxButton}>
            <Text style={styles.buttonText}>Click Me</Text>
          </TouchableOpacity>
          
          <Text style={styles.forgotPasswordText}>Forget Password</Text>
        </View> */}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  keyboardAvoidingView: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  inner: {
    padding: 20,
    width: '100%', // Ensure the inner container takes full width
     alignItems: 'center', // Center content
  },
  textInput: {
    height: 50,
    // width: '90%', // Responsive width
    // maxWidth: 400, // Max width for larger screens
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
    paddingHorizontal: 10,
    marginHorizontal:20,
  },
  styleInputBoxButton: {
    backgroundColor: 'pink',
    height: 40,
    // width: '90%', // Match the width with the text input
    maxWidth: 400, // Max width for consistency
     justifyContent: 'center',
     alignItems: 'center', // Center align text
  },
  buttonText: {
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    alignSelf: 'center',
    marginVertical: 10,
  },
});

export default Signin2;
