import React from "react";
import { StyleSheet,View, Text, } from "react-native";

export default function Homepage() {
    return (
        <View style={styles.container}>
            <Text>This will be the Home Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});