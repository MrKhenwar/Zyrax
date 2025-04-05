import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ZoomMeetingComponent from '../components/ZoomIntegration'; // Import the ZoomMeetingComponent
import { theme, themeColors } from '../theme'; // Import the theme

const ClassesScreen = () => {
  return (
    <ScrollView style={theme.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Classes</Text>
        <Text style={styles.subtitle}>Join your favorite fitness classes!</Text>
      </View>

      <View style={theme.card}>
        <Text style={theme.sectionTitle}>6:00 PM - Yoga</Text>
        <Text style={theme.text}>With Riya</Text>
        <Text style={theme.text}>
          A relaxing yoga session to improve flexibility and reduce stress.
        </Text>
        <ZoomMeetingComponent link="https://zoom.us/j/987654321" meetingName="Yoga Class" />
      </View>

      <View style={theme.card}>
        <Text style={theme.sectionTitle}>8:00 PM - HIIT</Text>
        <Text style={theme.text}>With John</Text>
        <Text style={theme.text}>
          A high-intensity interval training session to boost your endurance.
        </Text>
        <ZoomMeetingComponent link="https://zoom.us/j/123456789" meetingName="HIIT Class" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: themeColors.background, // Use theme background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themeColors.primaryPurple, // Use theme primary purple
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: themeColors.primaryPurple, // Use theme primary purple
  },
});

export default ClassesScreen;