import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ImgLog = () => {
    return (
        <View>
            <Image
                source={require("../../assets/LogVehicle.jpeg")}
                style={styles.imageStyle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        position: 'absolute',
        width: 225,
        height: 180,
        left: 65,
        top: 10,
    }
});

export default ImgLog;