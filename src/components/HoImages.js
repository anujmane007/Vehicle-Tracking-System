import React from "react";
import { View, Image, StyleSheet } from "react-native";

const HoImages = () => {
    return (
        <View>
            <Image
                source={require("../../assets/hVehicle.jpeg")}
                style={styles.imageStyle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        position: 'absolute',
        width: 350,
        height: 205,
        left: 15,
        top: 75,
    }
});

export default HoImages;