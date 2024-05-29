// DisplayImage.js
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function DisplayImage({ image }) {
  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  placeholder: {
    width: 200,
    height: 200,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
