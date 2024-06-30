import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"


export default function Network() {

    const [postList, setPostList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchData() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20}`);
        const data = await response.json();
        setPostList(data);
        //setPostList({});
        setIsLoading(false);
    }

    useEffect(() => {
        console.log('useEffect called...');
        fetchData();
    }, []);


    // if (isLoading) {
    //     return (
    //         <SafeAreaView style={styles.loadingContainer}>
    //             <ActivityIndicator size='large' color='orange' />
    //             <Text>Loading...</Text>
    //         </SafeAreaView>
    //     );
    // }


    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../assets/images/grad.jpeg')} style={{ flex: 1, alignSelf: 'stretch' }}>
                <Text style={styles.header}>News feed:</Text>

                {isLoading ?
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size='large' color='orange' />
                        <Text>Loading...</Text>
                    </View>
                    :
                    <FlatList
                        data={postList}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.itemContainer}>
                                    <Text style={styles.itemTitle}>{item.title}</Text>
                                    <Text style={styles.itemBody}>{item.body}</Text>
                                </View>
                            )
                        }}
                        ListEmptyComponent={<Text style={styles.emptyList}>No items found</Text>}
                    //ListHeaderComponent={<Text style={styles.listHeader}>Top News</Text>} 
                    />
                }

            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },
    loadingContainer: {
        flex: 1,
        //backgroundColor: 'red',
        //alignSelf: 'center',
        alignItems: 'center',
        //alignContent: 'center',
        justifyContent: 'center',
    },
    header: {
        color: 'orange',
        fontSize: 24,
        marginStart: 18,
        marginBottom: 10,
        fontStyle: 'italic',
        fontWeight: '800'
    },
    listHeader: {
        color: 'orange',
        fontSize: 22,
        alignSelf: 'center',
        fontStyle: 'normal',
        fontWeight: '600'
    },
    itemContainer: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        borderColor: 'orange',
        borderWidth: 2,
        padding: 10
    },
    emptyList: {
        fontSize: 18,
        fontWeight: '600',
        alignSelf: 'center',
        margin: 40,
    },
    itemTitle: {
        color: 'black',
        fontSize: 20,
        fontWeight: '600'
    },
    itemBody: {
        color: 'grey',
        fontSize: 16
    },
});