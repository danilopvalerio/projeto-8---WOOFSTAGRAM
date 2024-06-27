import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Avatar = ({ uri }) => {
  return <Image source={{ uri }} style={styles.avatar} />;
};

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
});

export default Avatar;
