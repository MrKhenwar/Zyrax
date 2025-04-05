import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { themeColors } from '../src/screens/theme';

export default function LoginSelection() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Logo/Brand Image */}
      <View style={styles.logoContainer}>
        {/* Update the image source path */}
        <Image
          source={require('../assets/logo.png')} // Changed path
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.welcomeText}>Welcome to Zyrax Fitness</Text>
      </View>

      {/* Login Selection Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('/login')}
        >
          <Text style={styles.buttonText}>I already have an account</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.signupButton]}
          onPress={() => router.push('/signup')}
        >
          <Text style={[styles.buttonText, styles.signupButtonText]}>Create new account</Text>
        </TouchableOpacity>
      </View>

      {/* Terms and Privacy */}
      <Text style={styles.terms}>
        By continuing, you agree to our{' '}
        <Text style={styles.link}>Terms of Service</Text> and{' '}
        <Text style={styles.link}>Privacy Policy</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.background,
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themeColors.primaryPurple,
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
    gap: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: themeColors.primaryPurple,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signupButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: themeColors.primaryPurple,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  signupButtonText: {
    color: themeColors.primaryPurple,
  },
  terms: {
    color: themeColors.textSecondary,
    textAlign: 'center',
    fontSize: 12,
    marginTop: 20,
  },
  link: {
    color: themeColors.primaryPurple,
    textDecorationLine: 'underline',
  },
});