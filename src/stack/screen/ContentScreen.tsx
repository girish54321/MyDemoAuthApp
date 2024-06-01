import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

const ContentScreen = () => {
    return (
        <ScrollView style={styles.container}>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f8f8',
    },
});

export default ContentScreen;
