import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import FitnessCards from "../components/FitnessCards";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FitnessItems } from "../Context";

const HomeScreen = ({ onLogout }) => {
  const [showIcon, setShowIcon] = useState(false); // State for toggling theme
  const { calories, minutes, workout } = useContext(FitnessItems); // Context for fitness data
  const navigation = useNavigation();

  const themeStyles = showIcon ? styles.lightMode : styles.darkMode;

  return (
    <View style={[styles.container, themeStyles]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={[styles.header, themeStyles]}>
          <View style={styles.headerRow}>
            <Text style={[styles.headerText, themeStyles.text]}>
              Unleash Your Strength, Transform Your Life.
            </Text>

            <View style={styles.iconsRow}>
              {/* Toggle Theme Icon */}
              <TouchableOpacity onPress={() => setShowIcon(!showIcon)}>
                {showIcon ? (
                  <Ionicons name="sunny" size={24} color={themeStyles.text.color} />
                ) : (
                  <Ionicons name="moon" size={24} color={themeStyles.text.color} />
                )}
              </TouchableOpacity>

              {/* Logout Icon */}
              <TouchableOpacity onPress={onLogout} style={{ marginLeft: 20 }}>
                <Ionicons name="log-out-outline" size={24} color={themeStyles.text.color} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Cards Row */}
          <View style={styles.cardsRow}>
            <View style={[styles.shadowCards, themeStyles.card]}>
              <Text style={[styles.cardText, themeStyles.text]}>{calories.toFixed(2)}</Text>
              <Text style={themeStyles.text}>KCAL</Text>
            </View>

            <View style={[styles.shadowCards, themeStyles.card]}>
              <Text style={[styles.cardText, themeStyles.text]}>{workout}</Text>
              <Text style={themeStyles.text}>WORKOUTS</Text>
            </View>

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
    width: "100%",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 50,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  cardsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  shadowCards: {
    width: "32%",
    height: 80,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  darkMode: {
    backgroundColor: "#000000d7",
    text: {
      color: "white",
    },
    card: {
      backgroundColor: "#1a1a1a",
    },
  },
  lightMode: {
    backgroundColor: "#f5f5f5",
    text: {
      color: "black",
    },
    card: {
      backgroundColor: "#ffffff",
    },
  },
  iconsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default HomeScreen;