import {Text, View, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import {useState} from 'react';

export default function yoon() {

  // Declare.  //Nameof 
              //var    //Methodtoset value 
  const  [name, setName] = useState('jasbdkasbdabk');
  
  const [age, setAge] = useState(0)
  
   const [count, setCount] = useState(0)

  // Created Array 
  let names = ['lolo', 'henry', 'yoon', 'darshan', 'Sala'];
                //0.  // 1.    // 2.    // 3.      // 4

let ages = [10,5,40,30,50]

  // Get the number between 0 to 4 
  function getRandomNumber() {
    return Math.floor(Math.random() * 4) + 1;
  }

  function tapMePress() {
    // let number = getRandomNumber();
    const newCount = (count + 1) % names.length;
     setCount(newCount);
    setName(names[newCount]);
  }

  function tapMePress2() {
    const newCount = (count + 1) % ages.length;
    setCount(newCount);
    setAge(ages[newCount])
  }

  

  return (
    
    <View style={styles.container}>
      
      {/* 1 */}
    <View style={{padding:10,backgroundColor:'black', margin:10}}>
      <Text>My Name is {name}</Text>
      <TouchableOpacity
        onPress={tapMePress}
        style={{backgroundColor: 'green', padding: 10}}>
        {/* touchableopacity is a button on reactnativ and on pree is on clik */}
        <Text> Tap Me to show my name</Text>
      </TouchableOpacity>
      </View>


        {/* 2 */}
        <View style={styles.pattern1}>
      <Text>My age is {age}</Text>
      <TouchableOpacity
        onPress={tapMePress2}
        style={{backgroundColor: 'pink', padding: 10}}>
        {/* touchableopacity is a button on reactnativ and on pree is on clik */}
        <Text> Tap Me to show my age</Text>
      </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  pattern1:{
    padding:10, backgroundColor:'yellow', margin:10
  }
});
