import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Alert, Dimensions, Text } from 'react-native';
import { Svg, Polygon, Image, Defs, ClipPath } from 'react-native-svg';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function Home({ navigation }) {

    const [dimensions, setDimensions] = useState({ window, screen });

    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });

    const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png';
    const u = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg';
    return (
        <View style={styles.container}>
            {/* <Image source={url} style={styles.image} /> */}
            <Svg scale={dimensions.window.width / 300} fillOpacity='0' height="100" width="100" style={styles.image}>
                <Defs>
                    <ClipPath id="clip">
                        <Polygon
                            points="50,0 80,10 100,35 100,70 80,90 50,100 20,90 0,70 0,35 20,10"
                            fill="lime"
                            stroke="purple"
                            strokeWidth="1">
                        </Polygon>
                    </ClipPath>
                </Defs>
                <Image
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    opacity="1"
                    href={{ uri: u, }}
                    clipPath="url(#clip)"
                />
            </Svg>
            <Text style={styles.titleText}>Vinay</Text>
            <Text style={styles.subtitleText}>Software developer</Text>
            <View style={{ width: dimensions.window.width, flexDirection: "row", justifyContent: "space-around", position: 'absolute', bottom: dimensions.window.height / 20 }}>
                <View style={{ width: dimensions.window.width / 3 }} >
                    <Button
                        onPress={() => Alert.alert('Simple Button pressed')}
                        title="Reset"
                        color="#841584" />
                </View>
                <View style={{ width: dimensions.window.width / 3 }} >
                    <Button
                        onPress={() => navigation.navigate('Story', { name: 'Jane' })}
                        title="Add Image"
                        color="#841584" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    image: {
        // width: window.width / 3,
        // height: window.width / 3,
        marginTop: window.width / 6
    },
    titleText: {
        marginTop: window.height / 20,
        fontSize: 14,
        fontWeight: "bold",
        color: "#2c405a"
    },
    subtitleText: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#2c405a"

    }
});
