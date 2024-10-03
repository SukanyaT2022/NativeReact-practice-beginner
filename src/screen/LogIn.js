import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,

} from 'react-native';

const LogIn = () => {
  const [name, setName] = useState('Yoon');
  const [isON, setOn] = useState(false);

  const changeTextFunc = () => {
    //!
    // !=
    // ==
    // ===
    // setOn(!isON);
    if (isON === false) {
      setOn(true);
    } else {
      setOn(false);
    }

    setName(isON == true ? 'Emma' : 'Yoon');
  };

  return (
    <View style={style.styleHeader}>

<Image
          style={style.image}
          resizeMode="cover"
          source={{
            uri: 'https://images.unsplash.com/photo-1668028594599-9530c1bcdb79?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxldHRlciUyMGN8ZW58MHx8MHx8fDA%3D',
          }}></Image>
      {/* <View style={style.firstView}>
        <Text style={style.textStyle}>Good morning! my name is {name}!</Text>
        <TouchableOpacity onPress={changeTextFunc}>
          <Text>Click me! </Text>
        </TouchableOpacity>
       
      </View>

      <View style={styles.secondView}>
        <Text>Second</Text>
      </View> */}
    </View>
  );
};

const style = StyleSheet.create({
  styleHeader: {
    flex: 1,
    //flex is background  1 is full screen 100% - 0.5 half screen 50%
    backgroundColor: 'blue',
    size: '20px',
  },
  firstView: {
    flex: 0.7,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondView: {
    flex: 0.3,
    backgroundColor: 'yellow',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '500',
    // color: '#000000',
    color: 'rgb(231, 76, 60)',
    // red, green , blue , alpha
  },
  image: {
    width: 200, // Set width
    height: 200, // Set height
  },
});

export default LogIn;
