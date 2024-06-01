import { StyleSheet } from "react-native";


export const LoginScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    imageContainer: {
        marginBottom: 20,
    },
    image: {
        width: 250,
        height: 180,
        resizeMode: 'contain',
        borderRadius: 14
    },
    signInContainer: {
        // width: '80%',
        flex: 1,
        marginHorizontal: 22,
        marginBottom: 20,
        // alignItems: 'center',
        justifyContent: 'space-between'
    },
    signInText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 54,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 16,
        paddingHorizontal: 10,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 20,
        fontWeight: '700',
        color: '#1E90FF',
    },
    checkboxRoot: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        marginRight: 10,
    },
    checkboxText: {
        fontSize: 16,
        color: '#333',
        lineHeight: 25
    },
    linkText: {
        color: '#1E90FF',
    },
    signInButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#1E90FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    signInButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});