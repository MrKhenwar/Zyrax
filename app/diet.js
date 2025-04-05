import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { themeColors } from '../src/screens/theme';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Diet() {
  const router = useRouter();
  const [selectedMeal, setSelectedMeal] = useState('breakfast');

  const meals = {
    breakfast: {
      title: 'Breakfast',
      time: '8:00 AM',
      calories: '450 kcal',
      mainDish: 'Oatmeal with Fruits and Nuts',
      ingredients: [
        '1 cup rolled oats',
        '2 cups almond milk',
        '1 banana, sliced',
        '1/4 cup mixed berries',
        '2 tbsp chopped almonds',
        '1 tbsp honey'
      ],
      instructions: [
        'Bring almond milk to a boil in a pot',
        'Add oats and reduce heat to medium-low',
        'Cook for 5 minutes, stirring occasionally',
        'Top with sliced banana, berries, and almonds',
        'Drizzle with honey'
      ]
    },
    lunch: {
      title: 'Lunch',
      time: '1:00 PM',
      calories: '650 kcal',
      mainDish: 'Grilled Chicken with Quinoa',
      ingredients: [
        '200g chicken breast',
        '1 cup quinoa',
        'Mixed vegetables',
        'Olive oil',
        'Seasonings'
      ],
      instructions: [
        'Cook quinoa according to package instructions',
        'Season chicken with herbs and spices',
        'Grill chicken for 6-8 minutes each side',
        'Steam vegetables until tender',
        'Combine and serve'
      ]
    },
    dinner: {
      title: 'Dinner',
      time: '7:00 PM',
      calories: '550 kcal',
      mainDish: 'Baked Salmon with Vegetables',
      ingredients: [
        '200g salmon fillet',
        'Broccoli florets',
        'Cherry tomatoes',
        'Lemon',
        'Olive oil'
      ],
      instructions: [
        'Preheat oven to 400°F (200°C)',
        'Season salmon with lemon, salt, and pepper',
        'Bake for 12-15 minutes',
        'Steam broccoli until tender-crisp',
        'Serve with roasted tomatoes'
      ]
    }
  };

  const renderMealTabs = () => (
    <View style={styles.tabContainer}>
      {Object.keys(meals).map((meal) => (
        <TouchableOpacity
          key={meal}
          style={[
            styles.tab,
            selectedMeal === meal && styles.selectedTab
          ]}
          onPress={() => setSelectedMeal(meal)}
        >
          <ThemedText style={[
            styles.tabText,
            selectedMeal === meal && styles.selectedTabText
          ]}>
            {meals[meal].title}
          </ThemedText>
        </TouchableOpacity>
      ))}
    </View>
  );

  const selectedMealData = meals[selectedMeal];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={28} color={themeColors.primaryPurple} />
          <ThemedText style={styles.backText}>Back</ThemedText>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {renderMealTabs()}

        <ThemedView style={styles.mealCard}>
          <View style={styles.mealHeader}>
            <ThemedText style={styles.mealTitle}>{selectedMealData.mainDish}</ThemedText>
            <View style={styles.mealInfo}>
              <ThemedText style={styles.mealTime}>{selectedMealData.time}</ThemedText>
              <ThemedText style={styles.mealCalories}>{selectedMealData.calories}</ThemedText>
            </View>
          </View>

          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>Ingredients</ThemedText>
            {selectedMealData.ingredients.map((ingredient, index) => (
              <ThemedText key={index} style={styles.listItem}>
                • {ingredient}
              </ThemedText>
            ))}
          </View>

          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>Instructions</ThemedText>
            {selectedMealData.instructions.map((instruction, index) => (
              <ThemedText key={index} style={styles.listItem}>
                {index + 1}. {instruction}
              </ThemedText>
            ))}
          </View>
        </ThemedView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.background,
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingHorizontal: 16,
    paddingBottom: 8,
    backgroundColor: themeColors.background,
    borderBottomWidth: 1,
    borderBottomColor: themeColors.border,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  backText: {
    fontSize: 16,
    marginLeft: 4,
    color: themeColors.primaryPurple,
    fontWeight: '500',
  },
  scrollContent: {
    paddingTop: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 48 : 16,
    paddingBottom: 16,
    backgroundColor: themeColors.background,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 4,
    backgroundColor: themeColors.cardBackground,
  },
  selectedTab: {
    backgroundColor: themeColors.primaryPurple,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
  },
  selectedTabText: {
    color: '#FFFFFF',
  },
  mealCard: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: themeColors.cardBackground,
  },
  mealHeader: {
    marginBottom: 20,
  },
  mealTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themeColors.primaryPurple,
    marginBottom: 8,
  },
  mealInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mealTime: {
    fontSize: 16,
    color: themeColors.textSecondary,
  },
  mealCalories: {
    fontSize: 16,
    color: themeColors.textSecondary,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: themeColors.primaryPurple,
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
    color: themeColors.textPrimary,
  },
});