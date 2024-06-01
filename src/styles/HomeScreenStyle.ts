import { StyleSheet } from "react-native";

export const homeScreenStyles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5fafa'
    },
    back: {
        marginBottom: 16,
    },
    backButtonText: {
        color: '#007bff',
    },
    section: {
        marginBottom: 24,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    chipsStyle: {
        margin: 14,
        backgroundColor: '#9cc8ff',
        borderRadius: 16,
        padding: 9,
        width: 100,
        alignContent: 'center',
        alignItems: 'center',
        height: 35,
        color: '#1368d1'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        elevation: 5,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 14,
    },
    image: {
        width: 80,
        height: 60,
        marginRight: 16,
        borderRadius: 8,
        backgroundColor: 'red'
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardText: {
        color: '#6c757d',
    },
    progressBar: {
        height: 6,
        borderRadius: 3,
        backgroundColor: '#e9ecef',
        overflow: 'hidden',
        marginVertical: 8,
    },
    progress: {
        width: '90%',
        height: '100%',
        backgroundColor: '#007bff',
    },
    upcomingProgress: {
        width: '10%',
        height: '100%',
        backgroundColor: '#007bff',
    },
});

