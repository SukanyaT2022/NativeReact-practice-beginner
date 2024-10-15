import React from 'react';
import {
  ScrollView,
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import ReuseBox from '../component/ReuseBox';

const Sigin = () => {
  return (
    // wrapper
    <View style={{flex: 1}}>
      <ImageBackground
        //    style={{    }}
        //    resizeMode='cover'
        //    source={require('../Asset/Image/raibow2.jpg')}
        style={{flex: 1}}
        resizeMode="cover"
        source={require('../Asset/Image/raibow2.jpg')}>
        <View
          style={{flex: 0.15, justifyContent: 'flex-end', marginLeft: '5%'}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome!</Text>
        </View>

        {/* section 1 */}
        <View style={{flex: 0.35}}></View>
        {/* section 2-2 box */}
        <View
          style={{
            backgroundColor: 'yellow',
            flex: 0.2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'space-between',
          }}>
          <ReuseBox />
          <ReuseBox />
        </View>

        {/* section 3 input*/}
        <View style={{backgroundColor: 'orange', flex:0.3, justifyContent:'center'}}>

          <TouchableOpacity
            style={{
              backgroundColor: 'pink',
              borderWidth: 2,
              borderColor: 'red',
              paddingVertical:20,
              paddingHorizontal:20,
              borderRadius:30,
            //   marginVertical:20,
            // width:'80%',
    marginHorizontal:10,
            marginBottom: 10,
            }}>
                <Text style={{textAlign:'center', fontWeight:'bold',}}>Sign In</Text>
            </TouchableOpacity>

<TouchableOpacity
            style={{
              backgroundColor: 'pink',
              borderWidth: 2,
              borderColor: 'red',
              paddingVertical:20,
              paddingHorizontal:20,
              borderRadius:30,
            //   width:'80%',
            //   alignSelf:'center',
            marginHorizontal:10,
            }}>

<Text style={{textAlign:'center', fontWeight:'bold',}}>Sign Up</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Sigin;
