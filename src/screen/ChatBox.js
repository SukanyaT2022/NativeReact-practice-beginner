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
const ChatBox = () => {
  return (
    // wrap whole screen
    <View style={styles.wrapper}>
      {/* header section */}

      {/* first section-image section */}
      <View style={styles.firstSection}>
        <View style={styles.headerSection}>
          <Text style={styles.headerText}>
            Quick {'\n'}<Text>Chat</Text>{' '}
          </Text>
          {/* {"\n"} this is br tag      */}
        </View>

        <Image
          source={require('../Asset/Image/panicCatBG.webp')}
          style={{
            width: 150,
            height: 150,
             alignSelf: 'center',
            // marginTop: 30,

            borderRadius: 50, //put half value of height or width  to make it round circle
          }}></Image>
      </View>

<View style={styles.secondSection}>

<View style={{flex:1, backgroundColor:'green'}}>
    <View style={{flex:0.5, backgroundColor:'black',margin:5, flexDirection:'row'}}>
          <View style={{flex:0.5, backgroundColor:'red' , marginHorizontal:5}}></View>
          <View style={{flex:0.5, backgroundColor:'yellow'}}></View>
          

    </View>
    

    <View style={{flex:0.5, backgroundColor:'black',margin:5, flexDirection:'row'}}>
          <View style={{flex:0.5, backgroundColor:'red' , marginHorizontal:5}}></View>
          <View style={{flex:0.5, backgroundColor:'yellow'}}></View>
          

    </View>
      </View>
</View>
      
          
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'orange',
    // height: '100%',
    flex:1
  },
  headerText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },

  //   image cat box
  firstSection: {
    flex: 0.5,
    // backgroundColor: 'green',
    // alignItems: 'center',    
    justifyContent: 'center',
  },
  //   quick chat header
  headerSection: {
    // backgroundColor: 'pink',
    //  flexDirection:'row',
    justifyContent: 'flex-start',

    paddingLeft: 20,
  },
  secondSection: {
    flex: 0.5,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  smallBox: {
    width: '40%',
    height: '80%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lastSection: {
    flex: 0.2,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default ChatBox;
