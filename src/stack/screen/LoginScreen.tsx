import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, } from 'react-native';
import IMAGE_PATH from '../../appconst/AppConst';
import { LoginScreenStyle as styles } from '../../styles/LoginScreenStyle'
import AppScreenName from '../../appconst/ScreenName';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate(AppScreenName.HomeScreen);
    }

    return (
        <View style={{
            flex: 1,
            padding: 8,
            backgroundColor: '#fff',
        }}>
            <View style={styles.logoContainer}>
                <Image
                    source={{ uri: IMAGE_PATH.LOGO_IMAGE_URL }}
                    style={styles.logo}
                />
            </View>
            <View style={{
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: IMAGE_PATH.HERO_IMAGE_URL }}
                        style={styles.image}
                        resizeMode='stretch' />
                </View>
            </View>
            <View style={styles.signInContainer}>
                <View>
                    <Text style={styles.signInText}>Sign-in</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter email or user name"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Forgot password ?</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.checkboxRoot}>
                        <Text style={styles.checkboxText}>By signing up, you agree to our
                            <Text style={styles.linkText}> terms of service </Text> and
                            <Text style={styles.linkText}> privacy policy.</Text>
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
                        <Text style={styles.signInButtonText}>Sign-in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};



export default LoginScreen;
