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
  FlatList,
  ImageBackground,
} from 'react-native';
import Box from '../component/Box';
const ChatBox = () => {
  const DATA = [
    {id: '1', title: 'Item 1'},
    {id: '2', title: 'Item 2'},
    {id: '3', title: 'Item 3'},
    {id: '4', title: 'Item 4'},
    {id: '4', title: 'Item 4'},
    {id: '4', title: 'Item 4'},
    {id: '4', title: 'Item 4'},
  ];

  const containImg = "../Asset/Image/raibow2.jpg"

  const renderItem = () => {
    return DATA.map((item, index) => <Box />);
  };


  return (
    // wrap whole screen
    <View style={styles.wrapper}>
      {/* header section */}
<ImageBackground
 source={require(containImg)}
 resizeMode='cover'
 style={{flex:1, }}
>

      {/* first section-image section */}
      <View style={styles.firstSection}>
        <View style={styles.headerSection}>
          <Text style={styles.headerText}>
            Quick {'\n'}
            <Text>Chat</Text>{' '}
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

        <View style={{flex:1, flexDirection:'row',backgroundColor:'pink',justifyContent:'center',}}>
          <View style={{flex:0.8, backgroundColor:'purple', flexDirection:'row', justifyContent:'space-between', alignItems:'center',}}>
            <Text>Test!</Text>
            <Text>Test!</Text>
          </View>
          {/* <View style={{flex:0.2, backgroundColor:'blue'}}></View> */}
        </View>

      </View>

      <View style={styles.secondSection}>
        <ScrollView style={{flex: 1}}>{renderItem()}</ScrollView>

        {/* <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={1}
        /> */}

        {/* <View style={{flex:1,backgroundColor:'green',flexDirection:'row'}}>
  <Box/>
  <Box/>
  </View>

  
  <View style={{flex:1,backgroundColor:'green',flexDirection:'row'}}>
  <Box/>
  <Box/>
  </View> */}
        {/* <View style={{flex:1,backgroundColor:'green',}}>
  <Box/>
  <Box/>
  </View> */}
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'orange',
    // height: '100%',
    flex: 1,
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
    flexDirection: 'column',
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
