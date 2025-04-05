export const themeColors = {
  background: '#121212', // Dark background
  primaryPurple: '#A78BFA', // Purple for highlights
  textPrimary: '#E0E0E0', // Light grey for text
  textSecondary: '#6E6E6E', // Dark grey for secondary text
  cardBackground: '#1E1E1E', // Darker card background
  border: '#372948', // Subtle purple border
};

export const theme = {
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
    color: themeColors.primaryPurple, // Purple for section titles
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: themeColors.textPrimary, // Light grey for text
    lineHeight: 20,
  },
};