import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FitnessCards from '../components/FitnessCards';
import { Ionicons } from '@expo/vector-icons';
import { useContext, useState } from 'react';
import { FitnessItems } from '../Context';

const HomeScreen = () => {
  const [showIcon, setShowIcon] = useState(false);
  const { calories, minutes, workout } = useContext(FitnessItems);

  // Dynamic styles for dark and light mode
  const themeStyles = showIcon
    ? styles.lightMode
    : styles.darkMode;

  return (
    <View style={[styles.container, themeStyles]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {/* Header Section */}
        <View style={[styles.header, themeStyles]}>
          <View style={styles.headerRow}>
            <Text style={[styles.headerText, themeStyles.text]}>
              Welcome to Self Fitness Center
            </Text>

            {/* Dark Mode Toggle */}
            <TouchableOpacity onPress={() => setShowIcon(!showIcon)}>
              {showIcon ? (
                <Ionicons name="sunny" size={24} color={themeStyles.text.color} />
              ) : (
                <Ionicons name="moon" size={24} color={themeStyles.text.color} />
              )}
            </TouchableOpacity>
          </View>

          {/* Cards Row */}
          <View style={styles.cardsRow}>
            {/* First Card */}
            <View style={[styles.shadowCards, themeStyles.card]}>
              <Text style={[styles.cardText, themeStyles.text]}>{calories.toFixed(2)}</Text>
              <Text style={themeStyles.text}>KCAL</Text>
            </View>

            {/* Second Card */}
            <View style={[styles.shadowCards, themeStyles.card]}>
              <Text style={[styles.cardText, themeStyles.text]}>{workout}</Text>
              <Text style={themeStyles.text}>WORKOUTS</Text>
            </View>

            {/* Third Card */}
            <View style={[styles.shadowCards, themeStyles.card]}>
              <Text style={[styles.cardText, themeStyles.text]}>{minutes}</Text>
              <Text style={themeStyles.text}>MINUTES</Text>
            </View>
          </View>
        </View>

        {/* Fitness Cards */}
        <FitnessCards />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: 160,
    width: '100%',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  cardsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  shadowCards: {
    width: '32%',
    height: 80,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  darkMode: {
    backgroundColor: '#000000d7',
    text: {
      color: 'white',
    },
    card: {
      backgroundColor: '#1a1a1a',
    },
  },
  lightMode: {
    backgroundColor: '#f5f5f5',
    text: {
      color: 'black',
    },
    card: {
      backgroundColor: '#ffffff',
    },
  },
});
