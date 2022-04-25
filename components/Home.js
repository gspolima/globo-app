import React,{ useEffect, useState } from "react";
import { 
    StyleSheet, View, Text, ActivityIndicator, FlatList, Image, TouchableWithoutFeedback
} from "react-native";

export default function Homepage({navigation}) {

    const [dataLoading, finishLoading] = useState(true);
    const [newsData, setData] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=1aea81ed76ea4123b23c9c26efddde2f')
            .then((responseBody) => responseBody.json())
            .then((json) => setData(json.articles))
            .catch((error) => console.error('An error occurred in Home: ', error))
            .finally(() => { 
                finishLoading(false);
            });
    }, []);

    const storyItem = ({item}) => {
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    navigation.navigate('NewsDetail', {url: item.url})
                }}
            >
                <View style={styles.listing}>
                    <Text style={styles.title}> {item.title} </Text>
                    <Image
                        style={styles.thumbnail}
                        source={{uri: item.urlToImage}}
                    />
                    <Text style={styles.blurb}> {item.description} </Text>
                    <Text style={styles.articleSource} >From {item.source.name}</Text>
                </View>

            </TouchableWithoutFeedback>
        )
    }

    return (
        <View style={styles.container}>
            { dataLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={newsData}
                    renderItem={storyItem}
                    keyExtractor={(item) => item.url}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20
    },
    thumbnail: {
        height: 150,
        width: '98%'
    },
    listing: {
        paddingTop: 15,
        paddingBottom: 25,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    title: {
        paddingBottom: 10,
        fontSize: 16,
        fontFamily: 'OpenSans',
        fontWeight: 'bold'
    },
    blurb: {
        fontFamily: 'OpenSans',
        fontStyle: 'normal'
    },
    articleSource: {
        color: 'blue',
        fontSize: 11,
        fontWeight: '400',
        paddingTop: 5
    }
});