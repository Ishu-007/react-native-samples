import React, { useRef, useState } from 'react';
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


export default function TimerWithUseStateUseRef() {
  console.log(`Timer() functional component is called++++++++++++++++++++++++++++++++++++`);

  // this will presetve the interval id
  const intervalId = useRef(0);

  // state variable for starting timer
  const startTimer = useRef(false);

  // state variable for stopping timer
  const stopTimer = useRef(false);

  // state variable for stopping timer
  const resetTimer = useRef(true);

  // seconds hand
  const [seconds, setSeconds] = useState(0);


  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar barStyle='dark-content' />

      <Image source={require('../assets/images/science.png')} style={styles.img} />
      <Text style={styles.header}> React Native Timer </Text>
      <Text style={styles.description}> Using useState & useRef Hooks </Text>

      <Text style={styles.timer}> {formatSeconds(seconds)} </Text>

      <View style={{ justifyContent: 'space-evenly', flexDirection: 'column', backgroundColor: 'plum', margin: 20, }}>
        <Button color='green' title='Start' onPress={() => {
          //console.error(`START button clicked...`);
          if (!startTimer.current &&
            (stopTimer.current || !stopTimer.current) &&
            (resetTimer.current || !resetTimer.current)) {
            //console.log('starting TIMER...');
            startTimer.current = true;
            stopTimer.current = false;
            resetTimer.current = false;

            let interval = setInterval(() => {
              setSeconds(s => s + 1);
              aValue = !aValue;
            }, 1000);
            intervalId.current = interval;
          }
          //else console.log('TIMER started already...');
        }} />

        <Button color='red' title='Stop' onPress={() => {
          //console.error('STOP button clicked...')
          if (startTimer.current && !stopTimer.current && (resetTimer.current || !resetTimer.current)) {
            //console.log('stopping TIMER...');
            clearInterval(intervalId.current);
            startTimer.current = false;
            stopTimer.current = true;
            resetTimer.current = false;
          }
          //else console.log('TIMER stopeed already...');

        }} />
        <Button color='orange' title='Reset' onPress={() => {
          //console.error('RESET button clicked...')
          if ((startTimer.current || !startTimer.current) && (stopTimer.current || !stopTimer.current) && !resetTimer.current) {
            //console.log('resetting TIMER...');
            clearInterval(intervalId.current);
            setSeconds(0)
            startTimer.current = false;
            stopTimer.current = false;
            resetTimer.current = true;
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
