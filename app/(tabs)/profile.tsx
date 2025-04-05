import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { theme, themeColors } from '../../src/screens/theme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { withSpring } from 'react-native-reanimated';

const ProfileScreen = () => {
  const totalClasses = 30;
  const attendedClasses = 25;
  // Round to nearest integer
  const attendancePercentage = Math.round((attendedClasses / totalClasses) * 100);

  const achievements = [
    { icon: '🏃', label: 'Workout Streak', value: '15 days' },
    { icon: '🎯', label: 'Goals Met', value: '8/10' },
    { icon: '🏋️', label: 'Total Workouts', value: '45' },
  ];

  const AnimatedProgressRing = () => {
    // Divide by 100 for animation progress but keep the display value as whole number
    const progress = withSpring(attendancePercentage / 100);
    
    return (
      <Animated.View 
        style={[
          styles.progressRing,
          {
            borderColor: `${themeColors.primaryPurple}${Math.floor(progress * 255).toString(16)}`,
          }
        ]}
      >
        <Text style={styles.progressPercentage}>{attendancePercentage}%</Text>
        <Text style={styles.progressLabel}>Attended</Text>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={theme.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with Profile Picture */}
        <View style={styles.header}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editButton}>
              <Ionicons name="camera" size={20} color={themeColors.primaryPurple} />
            </TouchableOpacity>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Vidit</Text>
            <Text style={styles.bio}>Fitness enthusiast and trainer.</Text>
          </View>
        </View>

        {/* Achievement Cards */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.achievementsContainer}
        >
          {achievements.map((achievement, index) => (
            <LinearGradient
              key={index}
              colors={[`${themeColors.primaryPurple}10`, `${themeColors.primaryPurple}20`]}
              style={styles.achievementCard}
            >
              <Text style={styles.achievementIcon}>{achievement.icon}</Text>
              <Text style={styles.achievementValue}>{achievement.value}</Text>
              <Text style={styles.achievementLabel}>{achievement.label}</Text>
            </LinearGradient>
          ))}
        </ScrollView>

        {/* Personal Information */}
        <View style={[theme.card, styles.infoCard]}>
          <Text style={[theme.sectionTitle, styles.cardTitle]}>Personal Information</Text>
          <View style={styles.infoGrid}>
            <View style={styles.infoItem}>
              <Text style={styles.infoValue}>19</Text>
              <Text style={styles.infoLabel}>Age</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoValue}>80 kg</Text>
              <Text style={styles.infoLabel}>Weight</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoValue}>186 cm</Text>
              <Text style={styles.infoLabel}>Height</Text>
            </View>
          </View>
        </View>

        {/* Attendance Card */}
        <View style={[theme.card, styles.infoCard]}>
          <Text style={[theme.sectionTitle, styles.cardTitle]}>Attendance</Text>
          <View style={styles.attendanceContainer}>
            <AnimatedProgressRing />
            <Text style={styles.attendanceText}>
              {attendedClasses} out of {totalClasses} classes
            </Text>
          </View>
        </View>

        {/* Subscription Card */}
        <View style={[theme.card, styles.infoCard]}>
          <View style={styles.subscriptionHeader}>
            <Text style={[theme.sectionTitle, styles.cardTitle]}>Premium Member</Text>
            <Ionicons name="star" size={24} color={themeColors.primaryPurple} />
          </View>
          <Text style={styles.subscriptionDate}>Expires on April 30, 2025</Text>
          <TouchableOpacity style={styles.upgradeButton}>
            <Text style={styles.upgradeButtonText}>Renew Subscription</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: themeColors.primaryPurple,
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  profileInfo: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themeColors.textPrimary,
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: themeColors.textSecondary,
  },
  achievementsContainer: {
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  achievementCard: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: `${themeColors.primaryPurple}30`,
    padding: 15,
    borderRadius: 16,
    marginRight: 12,
    width: 120,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  achievementIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  achievementValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: themeColors.primaryPurple,
    marginBottom: 4,
  },
  achievementLabel: {
    fontSize: 12,
    color: themeColors.textSecondary,
    textAlign: 'center',
  },
  infoCard: {
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 16,
    padding: 20,
    shadowColor: themeColors.primaryPurple,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTitle: {
    marginBottom: 15,
  },
  infoGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  infoItem: {
    alignItems: 'center',
  },
  infoValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: themeColors.primaryPurple,
    marginBottom: 4,
  },
  infoLabel: {
    fontSize: 14,
    color: themeColors.textSecondary,
  },
  attendanceContainer: {
    alignItems: 'center',
  },
  progressRing: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 8,
    borderColor: themeColors.primaryPurple,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  progressPercentage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themeColors.primaryPurple,
  },
  progressLabel: {
    fontSize: 14,
    color: themeColors.textSecondary,
  },
  attendanceText: {
    fontSize: 16,
    color: themeColors.textSecondary,
  },
  subscriptionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  subscriptionDate: {
    fontSize: 16,
    color: themeColors.textSecondary,
    marginBottom: 15,
  },
  upgradeButton: {
    backgroundColor: themeColors.primaryPurple,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: themeColors.primaryPurple,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    transform: [{ scale: 1.02 }],
  },
  upgradeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;