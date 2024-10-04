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
  return (
    <KeyboardAvoidingView style={style.styleWrapper}>

      <ScrollView style={style.styleMainBox}>

        <Image
        style={{
width:50,
height:50,
margin:'auto',
marginTop:30,

        }}
          source={{
            uri: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D',
          }}></Image>

        <View style={style.wrapTextInputBox}>
          <Text style={{marginVertical:10}}>UserName</Text>
          <TextInput
           style={style.styleInputBox} 
           placeholder="fill user name"
        
           />
          
        </View>

        <View style={style.wrapTextInputBox}>
          <Text style={{marginVertical:10}}>Password</Text>
          <TextInput
            style={style.styleInputBox}
            placeholder="fill password"/>
        </View>


        <View style={style.wrapTextInputBox}>
          <Text style={{marginVertical:10}}>UserName</Text>
          <TextInput
           style={style.styleInputBox} 
           placeholder="fill user name"
        
           />
          
        </View>

        <View style={style.wrapTextInputBox}>
          <Text style={{marginVertical:10}}>Password</Text>
          <TextInput
            style={style.styleInputBox}
            placeholder="fill password"/>
        </View>


        <TouchableOpacity onPress={submitFunc} style={style.submitButton}>
          <Text style={{margin:'auto'}}>Submit</Text>
        </TouchableOpacity>

      </ScrollView>

    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  styleWrapper: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'flex-start',
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
marginVertical:10,
  },
  styleInputBox: {
    height: 50,
    borderColor: 'red',
    borderWidth: 4,
    backgroundColor: 'pink',
  },
  submitButton: {
    backgroundColor: 'red',
    marginHorizontal: 20,// mean margin left and right
    marginVertical:20,//mean margin top and bottom
    paddingVertical:10,
    // margin:'auto',
 
    // margin:' 30px auto 30px auto',
    // margin:' 30 auto ',
    // marginTop:40,
    // marginBottom:
    //how to do css margin top left bottom right at the same time
    // margin: 'auto',
    // marginTop:30,
    // marginTop30,

  
    

  },
});
export default InputBox;
