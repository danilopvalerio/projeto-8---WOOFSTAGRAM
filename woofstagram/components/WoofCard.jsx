import React from 'react';
import { View, StyleSheet } from 'react-native';
import Avatar from './Avatar';
import Title from './Title';

const WoofCard = ({ name, avatar }) => {
  return (
    <View style={styles.card}>
      <Avatar uri={avatar} />
      <Title style={styles.title}>{name}</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginRight: 16,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Sombra para Android
    elevation: 5,
    margin: 5,
  },
  title: {
    textAlign: 'center',
  },
});

export default WoofCard;
