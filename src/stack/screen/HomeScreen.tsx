import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import IMAGE_PATH from '../../appconst/AppConst';
import { homeScreenStyles as styles } from '../../styles/HomeScreenStyle';
import AppScreenName from '../../appconst/ScreenName';

const HomeScreen = ({ navigation }) => {

    const goToDetails = () => {
        navigation.navigate(AppScreenName.ContentScreen)
    }

    return (
        <ScrollView style={styles.root}>
            <TouchableOpacity style={styles.back}>
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <View style={styles.section}>
                <Text style={styles.chipsStyle}>In Progress</Text>
                <FlatList
                    data={[1, 2,]}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={(item) => {
                        return (
                            <TouchableOpacity onPress={goToDetails} style={styles.card}>
                                <Image source={{ uri: IMAGE_PATH.IMAGE_LINK }} style={styles.image} />
                                <View style={styles.cardContent}>
                                    <Text style={styles.cardTitle}>Digital Shopper Journey</Text>
                                    <Text style={styles.cardText}>4 Learning hours left</Text>
                                    <View style={styles.progressBar}>
                                        <View style={styles.progress} />
                                    </View>
                                    <Text style={styles.cardText}>90%</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                    }
                />
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Recently Completed</Text>
                <FlatList
                    data={[1, 2,]}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={(item) => {
                        return (
                            <View style={styles.card}>
                                <Image source={{ uri: IMAGE_PATH.IMAGE_LINK }} style={styles.image} />
                                <View style={styles.cardContent}>
                                    <Text style={styles.cardTitle}>Digital Shopper Journey</Text>
                                    <Text style={[styles.cardText, { color: 'green' }]}>4 Learning hours left</Text>
                                </View>
                            </View>
                        )
                    }
                    }
                />
            </View>
            <View style={[styles.section, {
                elevation: 5,
                backgroundColor: '#fff',
                paddingTop: 12,
                paddingLeft: 12,
            }]}>
                <Text style={styles.sectionHeader}>Upcoming Modules</Text>
                <FlatList
                    data={[1, 2, 3, 4, 5, 6]}
                    showsHorizontalScrollIndicator={false}
                    renderItem={(item) => {
                        return (
                            <View style={[styles.card, { elevation: 0 }]}>
                                <Image source={{ uri: IMAGE_PATH.IMAGE_LINK }} style={styles.image} />
                                <View style={styles.cardContent}>
                                    <Text style={styles.cardTitle}>Digital Shopper Journey</Text>
                                    <Text style={styles.cardText}>4 hours Completed</Text>
                                    <View style={styles.progressBar}>
                                        <View style={styles.upcomingProgress} />
                                    </View>
                                </View>
                            </View>
                        )
                    }
                    }
                />
            </View>
        </ScrollView>
    );
};


export default HomeScreen;
