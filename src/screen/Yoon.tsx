import {Text, View, TouchableOpacity, Alert,StyleSheet} from 'react-native';

export default function yoon() {
  function tapMePress() {
    Alert.alert('Tappppppped');
  }

  return (
    <View style={styles.container}>
      <Text>My Name is Yoon</Text>
      <TouchableOpacity
        onPress={tapMePress}
        style={{backgroundColor: 'green', padding: 10}}>
        {/* touchableopacity is a button on reactnativ and on pree is on clik */}
        <Text> Tap Me</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
