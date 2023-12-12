import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import UnsplashImageGrid from './PinterestStyleImageGrid';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <UnsplashImageGrid />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
