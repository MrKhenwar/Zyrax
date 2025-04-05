// theme.js
import { StyleSheet } from 'react-native';

export const themeColors = {
  background: '#121212', // Dark background
  primaryPurple: '#A78BFA', // Purple for highlights
  secondaryPurple: '#673AB7', // A secondary purple
  textPrimary: '#E0E0E0', // Light grey for text
  textSecondary: '#6E6E6E', // Dark grey for secondary text
  cardBackground: '#1E1E1E', // Darker card background
  border: '#372948', // Subtle purple border
  lightBlue: '#ADD8E6', // Light blue color
  venetianRed: '#C80815', // Venetian red color
};

export const theme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.background, // Dark background
  },
  card: {
    backgroundColor: themeColors.cardBackground, // Card background
    borderRadius: 10,
    padding: 15,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderColor: themeColors.border, // Subtle purple border
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: themeColors.primaryPurple, // Default purple for section titles
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: themeColors.textPrimary, // Light grey for text
    lineHeight: 20,
  },
  button: {
    backgroundColor: themeColors.primaryPurple,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16, // Adjust as needed
  },
});