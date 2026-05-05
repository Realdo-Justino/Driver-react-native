import {  StyleSheet, ScrollView, StatusBar, Image, Text, View } from 'react-native';
import {SafeAreaView } from 'react-native-safe-area-context';
import { drivers } from "../../data/drivers.js";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView>
        {
          drivers.map((currentDriver) => (
            <View style={styles.container}>
              <Text style={styles.title}>Super Trunfo F1</Text>
              <Image source={{ uri: currentDriver.image }} style={styles.image}></Image>
              <Text style={styles.name}>{currentDriver.name}</Text>
              <Text style={styles.country}>País: {currentDriver.country}</Text>
              <Text style={styles.description}>{currentDriver.description}</Text>
              <Text style={styles.starsTitle}>Estrelas:</Text>
              <Text style={styles.stars}>{"⭐".repeat(currentDriver.stars)}</Text>
            </View>
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 50,
    alignItems: "center",
    justifyContent: "center",
  },
   title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8
  },
  team: {
    fontSize: 16
  },
  country: {
    fontSize: 16,
    marginBottom: 8
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 16
  },
  starsTitle: {
    fontWeight: '600',
    fontSize: 16
  },
  stars: {
    fontSize: 20
  }
});
