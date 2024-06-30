import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, SafeAreaView, StyleSheet } from "react-native";



const Stack = createNativeStackNavigator();

export default function NavSample() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Screen_1"
                    component={Screen_1}
                />
                <Stack.Screen
                    name="Screen_2"
                    component={Screen_2}
                />
                <Stack.Screen
                    name="Screen_3"
                    component={Screen_3}
                />
                <Stack.Screen
                    name="Screen_4"
                    component={Screen_4}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



const Screen_1 = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.basescreen}>
            <Button title="Go to Screen_2" onPress={() => {
                //console.log('home screen button pressed');
                navigation.navigate('Screen_2')
            }}
            />
            <Button title="Go to Screen_3" onPress={() => {
                //console.log('home screen button pressed');
                navigation.navigate('Screen_3')
            }}
            />
            <Button title="Go to Screen_4" onPress={() => {
                //console.log('home screen button pressed');
                navigation.navigate('Screen_4')
            }}
            />
        </SafeAreaView>
    )
}

const Screen_2 = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.basescreen}>
            <Button title="Go to Screen_1" onPress={() => {
                //console.log('home screen button pressed');
                navigation.navigate('Screen_1')
            }} />
            <Button title="Go to Screen_3" onPress={() => {
                //console.log('home screen button pressed');
                navigation.navigate('Screen_3')
            }}
            />
            <Button title="Go to Screen_4" onPress={() => {
                //console.log('home screen button pressed');
                navigation.navigate('Screen_4')
            }}
            />
        </SafeAreaView>
    )
}

const Screen_3 = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.basescreen}>
            <Button title="Go to Screen_1" onPress={() => {
                //console.log('home screen button pressed');
                navigation.navigate('Screen_1')
            }} />
            <Button title="Go to Screen_2" onPress={() => {
                //console.log('home screen button pressed');
                navigation.navigate('Screen_2')
            }}
            />
            <Button title="Go to Screen_4" onPress={() => {
                //console.log('home screen button pressed');
                navigation.navigate('Screen_4')
            }}
            />
        </SafeAreaView>
    )
}

const Screen_4 = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.basescreen}>
            <Button title="Go to Screen_1" onPress={() => {
                //console.log('home screen button pressed');
                navigation.navigate('Screen_1')
            }} />
            <Button title="Go to Screen_2" onPress={() => {
                //console.log('home screen button pressed');
                navigation.navigate('Screen_2')
            }}
            />
            <Button title="Go to Screen_3" onPress={() => {
                //console.log('home screen button pressed');
                navigation.navigate('Screen_4')
            }}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    basescreen: {
        flex: 1,
        backgroundColor: 'plum',
        justifyContent: 'center',
        alignItems: 'center'
    },
});