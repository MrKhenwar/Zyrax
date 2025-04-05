import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Platform } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { themeColors } from '../src/screens/theme';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ProgressTrackingScreen() {
  const router = useRouter();
  const [selectedPoint, setSelectedPoint] = useState(null);
  
  // Transform data for LineChart
  const chartData = Array.from({ length: 30 }, (_, i) => ({
    value: 81.0 - (i * 0.25),
    label: (i + 1).toString(),
    dataPointText: (81.0 - (i * 0.25)).toFixed(1)
  }));

  const monthlyStats = {
    workouts: 22,
    caloriesBurned: 11000,
    avgDuration: 50
  };

  return (
    <ThemedView style={styles.container}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={28} color={themeColors.primaryPurple} />
          <ThemedText style={styles.backText}>Back</ThemedText>
        </TouchableOpacity>
      </View>

      {/* Monthly Progress Section */}
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Monthly Weight Progress</ThemedText>
        <View style={styles.chartContainer}>
          <LineChart
            data={chartData}
            width={Dimensions.get('window').width - 32}
            height={220}
            spacing={10}
            initialSpacing={10}
            color={themeColors.primaryPurple}
            thickness={2}
            startFillColor={`${themeColors.primaryPurple}50`}
            endFillColor={`${themeColors.primaryPurple}10`}
            startOpacity={0.9}
            endOpacity={0.2}
            backgroundColor={themeColors.cardBackground}
            rulesColor={`${themeColors.textSecondary}50`}
            rulesType="solid"
            yAxisColor={themeColors.textSecondary}
            xAxisColor={themeColors.textSecondary}
            xAxisLabelTextStyle={{ color: themeColors.textPrimary }}
            yAxisTextStyle={{ color: themeColors.textPrimary }}
            hideDataPoints={false}
            dataPointsColor={themeColors.primaryPurple}
            dataPointsRadius={3}
            showVerticalLines
            verticalLinesColor={`${themeColors.textSecondary}30`}
            onPress={(item: { value: number; label: string; dataPointText: string }, index: number) => {
              setSelectedPoint(item);
            }}
          />
        </View>
        {selectedPoint && (
          <View style={styles.selectedPointInfo}>
            <ThemedText style={styles.selectedPointText}>
              Day {selectedPoint.label}: {selectedPoint.value.toFixed(1)} kg
            </ThemedText>
          </View>
        )}
      </View>

      {/* Weekly Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <ThemedText style={styles.statValue}>{monthlyStats.workouts}</ThemedText>
          <ThemedText style={styles.statLabel}>Workouts</ThemedText>
        </View>
        <View style={styles.statCard}>
          <ThemedText style={styles.statValue}>{monthlyStats.caloriesBurned}</ThemedText>
          <ThemedText style={styles.statLabel}>Calories Burned</ThemedText>
        </View>
        <View style={styles.statCard}>
          <ThemedText style={styles.statValue}>{monthlyStats.avgDuration}min</ThemedText>
          <ThemedText style={styles.statLabel}>Avg Duration</ThemedText>
        </View>
      </View>

      {/* Progress Summary */}
      <View style={styles.summaryCard}>
        <ThemedText style={styles.summaryTitle}>Monthly Summary</ThemedText>
        <ThemedText style={styles.summaryText}>
          Total weight loss: 7 kg{'\n'}
          Achievement rate: 95%{'\n'}
          Target weight: 70 kg
        </ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.background,
    padding: 16,
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    marginBottom: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    marginLeft: 4,
    color: themeColors.primaryPurple,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: themeColors.primaryPurple,
  },
  chartContainer: {
    backgroundColor: themeColors.cardBackground,
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
  },
  selectedPointInfo: {
    alignItems: 'center',
    marginTop: 8,
    padding: 8,
    backgroundColor: themeColors.primaryPurple,
    borderRadius: 8,
    alignSelf: 'center',
  },
  selectedPointText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: themeColors.cardBackground,
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: themeColors.primaryPurple,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: themeColors.textSecondary,
    textAlign: 'center',
  },
  summaryCard: {
    backgroundColor: themeColors.cardBackground,
    padding: 16,
    borderRadius: 12,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: themeColors.primaryPurple,
  },
  summaryText: {
    fontSize: 14,
    lineHeight: 24,
    color: themeColors.textPrimary,
  },
});