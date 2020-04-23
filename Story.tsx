import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native';

const window = Dimensions.get("window");

export default function Story() {

    const url = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg";
    return (
        <View style={styles.container}>
            <Image source={url} style={styles.image} />
            <View style={{ width: window.width, flexDirection: "row", justifyContent: "space-around", position: 'absolute', bottom: window.height / 20 }}>
                <Text style={styles.titleText}>Some crazy news </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#2c405a"
    },
    image: {
        width: window.width / 1.1,
        height: window.height / 3,
        marginTop: window.width / 3
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
      }
});
