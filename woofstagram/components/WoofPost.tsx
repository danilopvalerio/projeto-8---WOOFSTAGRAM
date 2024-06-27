import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WoofPost = ({ image, title, description }) => {
  return (
    <View style={styles.post}>
      <Image source={{ uri: image }} style={styles.postImage} />
      <View style={styles.postContent}>
        <Text style={styles.postTitle}>{title}</Text>
        <Text style={styles.postDescription} numberOfLines={2}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  postImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  postContent: {
    flex: 1,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  postDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default WoofPost;
