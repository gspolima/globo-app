import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as RootNavigation from "../RootNavigation";

export default function Footer() {

    return (
        <View style={styles.footer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('Globomantics')}
            >
                <Text>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('About')}
            >
                <Text>About</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                // onPress={() => RootNavigation.navigate('Globomantics')}
            >
                <Text>Quotes</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                // onPress={() => RootNavigation.navigate('Globomantics')}
            >
                <Text>Catalog</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 80,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    button: {
        padding: 20
    }
})