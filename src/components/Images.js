import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ImagesFile = () => {
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
        left: -5,
        top: -290,
    }
});

export default ImagesFile;