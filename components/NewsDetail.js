import React, { useEffect, useState } from 'react';
import { 
    StyleSheet, Text, View, TouchableOpacity, 
    ActivityIndicator, Image, ScrollView 
} from 'react-native';

export default function NewsDetail({route, navigation}) {
    const [dataLoading, finishLoading] = useState(true);
    const [allPostData, setAllPostData] = useState([]);

    const { url } = route.params;
    const selectedPost = allPostData.find(post => post.url === url);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=1aea81ed76ea4123b23c9c26efddde2f')
            .then((responseBody) => responseBody.json())
            .then((json) => setAllPostData(json.articles))
            .catch((error) => console.error('An error occurred in NewsDetail: ', error))
            .finally(() => {
                finishLoading(false);
            });
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            {
                dataLoading ? <ActivityIndicator/> : (
                    <ScrollView>
                        <Text style={styles.title}>{selectedPost.title}</Text>
                        <Image 
                            source={{uri: selectedPost.urlToImage}}
                            style={styles.storyImage} 
                        />
                        {selectedPost.author ? (<Text style={styles.articleAuthor}>Written by {selectedPost.author}</Text>) : (<Text></Text>)}
                        <Text style={styles.blurb}> {selectedPost.description} </Text>
                        <Text style={styles.content}> {selectedPost.content} </Text>
                    </ScrollView>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    button: {
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'OpenSans',
        fontWeight: 'bold'
    },
    storyImage: {
        height: 300,
        width: '100%'
    },
    title: {
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 20
    },
    blurb: {
        fontFamily: 'OpenSans',
        fontSize: 14,
        padding: 20,
        fontStyle: 'italic',
    },
    content: {
        flex: 1,
        fontFamily: 'OpenSans',
        fontSize: 16,
        paddingTop: 30,
        paddingBottom: 100,
        paddingLeft: 20,
        paddingRight: 20
    },
    articleAuthor: {
        fontSize: 11,
        fontWeight: '400',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20
    }
});