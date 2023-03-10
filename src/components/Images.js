import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Images = () => {
    return (
        <View>
            <Image
                source={require("../../assets/vehicle.jpeg")}
                style={styles.imageStyle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        position: 'absolute',
        width: 225,
        height: 225,
        left: 50,
        top: 10,
    }
});

export default Images;