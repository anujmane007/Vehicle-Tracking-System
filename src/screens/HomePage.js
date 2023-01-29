import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HoImages from '../components/HoImages';

const HomePage = ({ navigation }) => {
    return (
        <View style={styles.mainC}>
            <View style={styles.conF}>
                <Text style={styles.textH}>Home</Text>

            </View>
            <HoImages />
            <Text style={styles.textHd} onPress={() => navigation.navigate('VehicleLocation')}>Tap on the Text to view live location of the nearest truck</Text>
            <View style={styles.container}>
                <Text style={styles.timeUp}>Time {"\n"}34 Min</Text>
                <Text style={styles.DistUp}>Distance 34 m</Text>
            </View>
            <View style={styles.subC}>
                <Text style={styles.locText} onPress={() => navigation.navigate('UserLocation')}>Location</Text>
                <Text style={styles.alaText} onPress={() => navigation.navigate('SetAlarm')}>Alarm</Text>
            </View>

            <Text style={styles.repText} onPress={() => navigation.navigate('Report')}>Report</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainC: {
        backgroundColor: '#ffffff',
    },
    conF: {
        position: 'absolute',
        width: 360,
        height: 60,
        left: 1,
        borderRadius: 16,
        alignItems: 'center',
        top: 10,
        backgroundColor: '#F99220',
    },
    textH: {
        position: 'absolute',
        width: 348,
        height: 60,
        left: 30,
        top: 10,
        fontWeight: '700',
        fontSize: 32,
        lineHeight: 39,
        display: 'flex',
        alignItems: 'center',
        textTransform: 'capitalize',
        color: '#FFFFFF',
    },
    textHd: {
        top: 300,
        textAlign: 'center',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 320,
    },
    timeUp: {
        width: 147,
        fontWeight: '700',
        fontSize: 28,
        lineHeight: 34,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        backgroundColor: '#0066FF',
        borderRadius: 16,
        padding: 10,
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    },
    DistUp: {
        width: 147,
        fontWeight: '700',
        fontSize: 28,
        lineHeight: 34,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        backgroundColor: '#0066FF',
        borderRadius: 16,
        padding: 10,
        marginLeft: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    },
    subC: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 320,
    },
    locText: {
        width: 355,
        fontWeight: '700',
        fontSize: 28,
        lineHeight: 34,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        backgroundColor: '#3CB503',
        borderRadius: 16,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        margin: 20,
    },
    alaText: {
        width: 355,
        fontWeight: '700',
        fontSize: 28,
        lineHeight: 34,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        backgroundColor: '#3CB503',
        borderRadius: 16,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    },
    repText: {
        top: 330,
        width: 355,
        fontWeight: '700',
        fontSize: 28,
        lineHeight: 34,
        display: 'flex',
        left: 2,
        color: '#FFFFFF',
        backgroundColor: '#FF4F03',
        borderRadius: 16,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    }
});
export default HomePage;
