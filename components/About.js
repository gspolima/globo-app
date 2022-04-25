import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import imageA from '../assets/home-image-2.jpg';
import imageB from '../assets/our-story-image-2.jpg';
import imageC from '../assets/our-story-image-3.jpg';

const blockA = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue varius dui vitae vehicula. Maecenas imperdiet leo et purus mattis, at malesuada' augue aliquam. Suspendisse malesuada libero risus, cursus suscipit neque auctor eget. Cras eu tempus dui. Morbi finibus accumsan lorem, ac congue enim maximus eget. Vestibulum vulputate vitae ligula quis tempor. Donec id vehicula risus. Aenean vel nisl placerat nulla cursus porttitor non aliquet metus. Donec auctor ligula molestie orci fringilla ullamcorper. Mauris tempor faucibus lectus vitae convallis. Sed quis tempor velit, a commodo nisi.`;

const blockB = `Nulla facilisi. Duis euismod massa in pellentesque accumsan. Curabitur eu ligula laoreet lectus finibus vehicula. Donec aliquam commodo felis, vitae faucibus est congue et. Suspendisse volutpat malesuada sem, quis finibus justo pulvinar quis. Quisque ut nisi a orci lacinia auctor a at nunc. Donec at neque at libero interdum accumsan. Vestibulum efficitur eget eros eu imperdiet. Nullam posuere maximus sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec malesuada dolor sit amet sodales viverra. Maecenas vitae ligula vel lectus tincidunt tristique.`;

export default function AboutGlobo() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Image source={imageA} style={{width: '100%', height: 300}}/>
                <Text style={styles.heading}>We Are Different</Text>
                <Text style={styles.text}>{blockA}</Text>
                <Image source={imageB} style={{width: '100%', height: 300}}/>
                <Text style={styles.heading}>Leaders In Our Field</Text>
                <Text style={styles.text}>{blockB}</Text>
                <Image source={imageC} style={{width: '100%', height: 400}}/>
                <Text style={styles.heading}>We Are The Experts</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    heading: {
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        paddingTop: 5
    },
    text: {
        fontFamily: 'OpenSans'
    }
})