import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';

const InputBox = () => {
  const submitFunc = () => {};
  return (
    <View style={style.styleWrapper}>

      <View style={style.styleMainBox}>

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
          <Text>UserName</Text>
          <TextInput
           style={style.styleInputBox} 
           defaultValue="fill user name">
           </TextInput>
        </View>

        <View>
          <Text>Password</Text>
          <TextInput
            style={style.styleInputBox}
            defaultValue="fill password"></TextInput>
        </View>

        <TouchableOpacity onPress={submitFunc} style={style.submitButton}>
          <Text style={{margin:'auto'}}>Submit</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

const style = StyleSheet.create({
  styleWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleMainBox: {
    backgroundColor: 'green',
    height: '500px',
    width: '80%',

    // display:'flex',
    // alignItems:'center'
    // margin:'auto'
  },
  wrapTextInputBox: {
//    flex:1,
  },
  styleInputBox: {
    height: 50,
    width: 80,
    borderRightColor: 'green',
    borderBottomWidth: 2,
  },
  submitButton: {
    backgroundColor: 'red',
    width: '50%',
    padding:' 5px 30px',
    margin:'auto',
 
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
