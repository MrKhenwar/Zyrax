// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';
import { theme, themeColors } from './theme';
import { useRouter } from 'expo-router'; // Add this import at the top

const HomeScreen = () => {
  const router = useRouter(); // Add this inside the component

  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/zyraxhealth/');
  };

  const handleUpgrade = () => {
    // Handle premium plan upgrade
    alert('Navigate to Premium Plans');
  };

  return (
    <ScrollView 
      style={theme.container}
      contentContainerStyle={styles.scrollContent}
    >
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Vidit</Text>
        <Text style={styles.subtitle}>Welcome to Zyrax! Your Fitness Partner</Text>
      </View>


      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton} onPress={() => alert('Video Tutorials')}>
          <Text style={styles.actionIcon}>📹</Text>
          <Text style={styles.actionText}>Video Tutorials</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={() => alert('Talk to Expert')}>
          <Text style={styles.actionIcon}>💪</Text>
          <Text style={styles.actionText}>Talk to Expert</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => alert('Get Help')}>
          <Text style={styles.actionIcon}>❓</Text>
          <Text style={styles.actionText}>Get Help</Text>
        </TouchableOpacity>
      </View>

      {/* Leaderboard Section */}
      <View style={theme.card}>
        <Text style={[theme.sectionTitle, { color: themeColors.lightBlue }]}>Leaderboard</Text>
        <View style={styles.leaderboard}>
          <Text style={theme.text}>1. Mukul - 1200 points</Text>
          <Text style={theme.text}>2. Avigya - 1100 points</Text>
          <Text style={theme.text}>3. Vidit - 1050 points</Text>
          <Text style={theme.text}>4. You - 1000 points</Text>
        </View>
      </View>

      {/* Premium Services */}
      <View style={theme.card}>
        <Text style={[theme.sectionTitle, { color: themeColors.primaryPurple }]}>Services</Text>
        <View style={styles.services}>
          <TouchableOpacity 
            style={styles.serviceItem}
            onPress={() => router.push('/diet')} // Add navigation to DietScreen
          >
            <Text style={styles.serviceIcon}>🥗</Text>
            <Text style={styles.serviceText}>Diet</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.serviceItem}
            onPress={() => router.push('/progresst')}
          >
            <Text style={styles.serviceIcon}>📊</Text>
            <Text style={styles.serviceText}>Progress Tracking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Text style={styles.serviceIcon}>👥</Text>
            <Text style={styles.serviceText}>Trainer</Text>
          </TouchableOpacity>
        </View>
      </View>

            {/* Contact Us Section */}
            <View style={theme.card}>
              <Text style={[theme.sectionTitle, { color: themeColors.primaryPurple }]}>Contact Us</Text>
              <View style={styles.contactContainer}>
                <TouchableOpacity 
                  style={styles.contactItem}
                  onPress={() => Linking.openURL('mailto:support@zyrax.com')}
                >
                  <Text style={styles.contactIcon}>📧</Text>
                  <View>
                    <Text style={styles.contactTitle}>Email Us</Text>
                    <Text style={styles.contactDetail}>support@zyrax.com</Text>
                  </View>
                </TouchableOpacity>
      
                <TouchableOpacity 
                  style={styles.contactItem}
                  onPress={() => Linking.openURL('tel:+1234567890')}
                >
                  <Text style={styles.contactIcon}>📞</Text>
                  <View>
                    <Text style={styles.contactTitle}>Call Us</Text>
                    <Text style={styles.contactDetail}>+1 (234) 567-890</Text>
                  </View>
                </TouchableOpacity>
      
                <TouchableOpacity 
                  style={styles.contactItem}
                  onPress={() => Linking.openURL('https://wa.me/1234567890')}
                >
                  <Text style={styles.contactIcon}>💬</Text>
                  <View>
                    <Text style={styles.contactTitle}>WhatsApp</Text>
                    <Text style={styles.contactDetail}>Message us directly</Text>
                  </View>
                </TouchableOpacity>
              </View>
      
              <TouchableOpacity 
                style={styles.supportButton}
                onPress={() => router.push('/support')}
              >
                <Text style={styles.supportButtonText}>Get Support 24/7</Text>
              </TouchableOpacity>
            </View>
      {/* Social Media & Feedback */}
      <View style={styles.socialSection}>
        <TouchableOpacity style={styles.socialButton} onPress={openInstagram}>
          <Text style={styles.socialText}>Follow us on Instagram</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.rateButton} onPress={() => alert('Rate us!')}>
          <Text style={styles.rateText}>Rate Our Service ⭐</Text>
        </TouchableOpacity>
      </View>
      {/* Marketing Banner */}
      <TouchableOpacity style={styles.banner} onPress={handleUpgrade}>
        <Text style={styles.bannerTitle}>🌟 Upgrade to Premium!</Text>
        <Text style={styles.bannerText}>Get unlimited access to all features</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: themeColors.background, // Use theme background color
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themeColors.primaryPurple, // Use theme primary purple
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: themeColors.primaryPurple, // Use theme primary purple
  },
  leaderboard: {
    marginTop: 10,
  },
  banner: {
    backgroundColor: themeColors.primaryPurple,
    margin: 15,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  bannerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bannerText: {
    color: 'white',
    opacity: 0.9,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  actionText: {
    color: themeColors.textPrimary,
    fontSize: 12,
  },
  services: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  serviceItem: {
    width: '30%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: themeColors.cardBackground,
    borderRadius: 8,
    marginVertical: 5,
  },
  serviceIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  serviceText: {
    color: themeColors.textPrimary,
    fontSize: 14,
    textAlign: 'center',
  },
  socialSection: {
    padding: 15,
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: '#E1306C',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  socialText: {
    color: 'white',
    fontWeight: 'bold',
  },
  rateButton: {
    backgroundColor: themeColors.cardBackground,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: themeColors.border,
  },
  rateText: {
    color: themeColors.textPrimary,
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingBottom: 90, // Adds space below the last element to account for tabs
  },
  contactContainer: {
    marginTop: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: `${themeColors.border}50`,
  },
  contactIcon: {
    fontSize: 24,
    marginRight: 15,
    width: 30,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: themeColors.textPrimary,
    marginBottom: 2,
  },
  contactDetail: {
    fontSize: 14,
    color: themeColors.textSecondary,
  },
  supportButton: {
    backgroundColor: themeColors.primaryPurple,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  supportButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default HomeScreen;