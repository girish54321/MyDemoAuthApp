// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, } from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={{
      flex: 1,
      padding: 8,
      backgroundColor: '#f5f5f5',
    }}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} // Replace with your logo image URL
          style={styles.logo}
        />
      </View>
      <View style={{
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} // Replace with your illustration image URL
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
          <View style={styles.checkboxContainer}>
            {/* <CheckBox
            value={isChecked}
            onValueChange={setIsChecked}
            style={styles.checkbox}
          /> */}
            <Text style={styles.checkboxText}>By signing up, you agree to our
              <Text style={styles.linkText}> terms of service </Text> and
              <Text style={styles.linkText}> privacy policy.</Text>
            </Text>
          </View>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInButtonText}>Sign-in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  checkboxContainer: {
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

export default App;
