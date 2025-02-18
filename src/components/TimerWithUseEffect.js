import React, { useEffect, useState } from 'react';
import {
  AppState,
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function TimerWthUseEffect() {

  // state variable for starting timer
  const [startTimer, setStartTimer] = useState(false);

  // state variable for stopping timer
  const [stopTimer, setStopTimer] = useState(false);

  // state variable for stopping timer
  const [resetTimer, setResetTimer] = useState(false);


  // seconds hand
  const [seconds, setSeconds] = useState(0);




  useEffect(() => {
    //console.log(`useEffect is called-------> for seconds : ` + seconds);
    //console.log(`useEffect startTimer ${startTimer}`);
    //console.log(`useEffect stopTimer ${stopTimer}`);
    //console.log(`useEffect resetTimer ${resetTimer}`);

    // const appStateListener = AppState.addEventListener('change', (state) => {
    //   console.log(`state is ${state}`);
    // })


    if (startTimer && !stopTimer && !resetTimer) {
      //console.log('CASE 1 seconds are ' + seconds);
      const interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);

      return () => { clearInterval(interval) };
    }
    else {
      //console.log('CASE 2 seconds are ' + seconds);
      if (!startTimer) {
        if (!stopTimer && resetTimer) {
          setSeconds(0);
        }
      }
    }

  }, [startTimer, stopTimer, resetTimer]);




  return (
    <SafeAreaView style={styles.parent}>
      {/* {console.log(`rendering...for ${seconds} ++++++++++++++++++++++++++++++++++++`)} */}
      <StatusBar barStyle='dark-content' />

      <Image source={require('../assets/images/science.png')} style={styles.img} />
      <Text style={styles.header}> React Native Timer </Text>
      <Text style={styles.description}> Using useState & useEffect Hooks </Text>

      <Text style={styles.timer}> {formatSeconds(seconds)} </Text>

      <View style={{ justifyContent: 'space-evenly', flexDirection: 'column', backgroundColor: 'plum', margin: 20, }}>
        <Button color='green' title='Start' onPress={() => {
          //console.log('START button clicked...');
          if (!startTimer && (stopTimer || !stopTimer) && (resetTimer || !resetTimer)) {
            //console.log('starting TIMER...');
            setStartTimer(true);
            setStopTimer(false);
            setResetTimer(false);

          }
          //else console.log('TIMER started already...');
        }} />

        <Button color='red' title='Stop' onPress={() => {
          //console.log('STOP button clicked...')
          if (startTimer && !stopTimer && (resetTimer || !resetTimer)) {
            //console.log('stopping TIMER...');
            setStartTimer(false);
            setStopTimer(true);
            setResetTimer(false);
          }
          //else console.log('TIMER stopeed already...');

        }} />
        <Button color='orange' title='Reset' onPress={() => {
          //console.log('RESET button clicked...')
          if ((startTimer || !startTimer) && (stopTimer || !stopTimer) && !resetTimer) {
            //console.log('resetting TIMER...');
            setStartTimer(false);
            setStopTimer(false);
            setResetTimer(true);
          }
          //else console.log('TIMER reset already...');
        }} />
      </View>

    </SafeAreaView>
  );
}


// used to format the seconds as hours:minutes:seconds
function formatSeconds(sec = 0) {
  //console.log('formatSeconds() is called for sec ' + sec);

  let finalTimerStr = '0h : 0m : 0s';

  if (sec !== 0) {
    let h = Math.floor(sec / 3600);
    let m = Math.floor((sec - (h * 3600)) / 60);
    let s = sec - (h * 3600) - (m * 60);

    finalTimerStr = h.toString().padStart(1, '0') + 'h : ' +
      m.toString().padStart(1, '0') + 'm : ' +
      s.toString().padStart(1, '0') + 's';

    //console.log(`s is : ${finalTimerStr}`)
  }

  return finalTimerStr;
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
  timer: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: '700',
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
