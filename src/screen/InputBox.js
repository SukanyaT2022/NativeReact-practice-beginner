import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

const InputBox = () => {
  const submitFunc = () => {};

  // alignSelf  => direct on whatever item / compoment (..image , text , view )
  // alignItem => Parent => Apply on child 
  return (
    <KeyboardAvoidingView style={style.styleWrapper}>
      <ScrollView style={style.styleMainBox}>

        
        <Image
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center' ,
            marginTop: 30,
            borderRadius: 50, //put half value of height or width  to make it round circle
          }}
          // source={{
          //   uri: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D',
          // }}
          source={require('../Asset/Image/raibow2.jpg')}
          
          >

          </Image>

        <View style={style.wrapTextInputBox}>
          <Text style={style.styleText}>UserName</Text>
          {/* flex.0.3 means text only 30% of whole wrap div */}
          <TextInput style={style.styleInputBox} placeholder="fill user name" />
        </View>

        <View style={style.wrapTextInputBox}>
          <Text style={style.styleText}>Password</Text>
          <TextInput
            style={style.styleInputBox}
            placeholder="fill password"/>
        </View>

        <TouchableOpacity onPress={submitFunc} style={style.submitButton}>
          <Text style={{margin: 'auto'}}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  styleWrapper: {
    flex: 1,
    marginTop: 30, // need to put justifyContent so we can use margin top and bottom
  },
  styleMainBox: {
    backgroundColor: 'green',
    flexGrow: 1,
    // height: '500px', never add hight otherwise the screen can not scroll
    // flex:1,
    // padding:20,
  },
  wrapTextInputBox: {
    marginVertical: 10,
    alignItems: 'center',
    flex: 1,
    //flex:1 mean flex 100% width
    flexDirection: 'row',
    backgroundColor: 'purple',
    paddingHorizontal: 10, //10 mean 10% padding left and right
  },
  styleText:{
    marginVertical: 10,
     flex: 0.3,
  },

  styleInputBox: {
    height: 50,
    flex: 0.7,
    borderColor: 'red',
    borderWidth: 4,
    backgroundColor: 'pink',
  },
  submitButton: {
    backgroundColor: 'red',
    marginHorizontal: 20, // mean margin left and right
    marginVertical: 20, //mean margin top and bottom
    paddingVertical: 10,
    borderRadius: 20,
  },
});
export default InputBox;
