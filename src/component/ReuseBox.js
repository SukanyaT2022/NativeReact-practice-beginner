import React from 'react'
import { View,Text, } from 'react-native'

const ReuseBox = () => {
  return (
    <View style={{backgroundColor:'grey', width:'40%', flex:1,justifyContent:'center'
     , alignItems:'center', 
     position:'relative',
     marginHorizontal:5
     }}>
   {/* black circle */}
    <View style={{backgroundColor:'black', width:80, height:80, borderRadius:50 }}>
    </View>
    <Text style={{position:'absolute', bottom:5, left:5 }}>Speed</Text>
    </View>
  )
}

export default ReuseBox