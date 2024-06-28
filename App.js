/**
 * Created by #IshuSharma
 * 
 * Sample React Native App to demonstrate an incremental Timer
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  Text
} from 'react-native';
import TimerWithUseState from './src/components/TimerWithUseState';
import TimerWthUseEffect from './src/components/TimerWithUseEffect';



function App() {

  return (
    <SafeAreaView style={styles.parent}>
      {/* {console.log(`rendering...for ${seconds} ++++++++++++++++++++++++++++++++++++`)} */}
      <StatusBar barStyle='dark-content' />





      {/* 
      #IshuSharma : This section is Under Development 
      
      
      <Image source={require('./src/assets/images/science.png')} style={styles.img} />
      <Text style={styles.header}> React Native Training </Text>
      <Text style={styles.description}> Please choose from below options: </Text> */}




      {/* 
      #IshuSharma : Working Examples - Please enable one component at a time (Navgation will be implemented soon)
      */}

      {/* A component for timer example using useState hook */}
      <TimerWithUseState />



      {/* A component for timer example using useState & useEffect hooks */}
      {/* <TimerWthUseEffect /> */}


    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    marginTop: 20,
    fontSize: 28,
    alignSelf: 'center',
    borderColor: 'black',
    borderBottomWidth: 1,
    fontWeight: '800',
    color: 'black',
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
  },
  img: {
    marginTop: 140,
    alignSelf: 'center',
    height: 100,
    width: 100
  }
});

export default App;
