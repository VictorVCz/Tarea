import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, View, Dimensions, Modal, Pressable, Text } from 'react-native';
import { UNSPLASH_ACCESS_KEY } from '@env';

const numColumns = 2;
const windowWidth = Dimensions.get('window').width;

const PinterestStyleImageGrid = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${UNSPLASH_ACCESS_KEY}&count=30`);
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => {
    const imageWidth = windowWidth / numColumns;
    const imageHeight = imageWidth * (item.height / item.width);
    return (
      <Pressable onPress={() => openModal(item)}>
        <View style={styles.card}>
          <Image
            source={{ uri: item.urls.regular }}
            style={{ width: imageWidth, height: imageHeight, borderRadius: 10 }}
          />
        </View>
      </Pressable>
    );
  };

  return (
    <View>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.container}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </Pressable>
          {selectedImage && (
            <Image
              source={{ uri: selectedImage.urls.regular }}
              style={styles.modalImage}
              resizeMode="contain"
            />
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  card: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalImage: {
    width: '90%',
    height: '80%',
    borderRadius: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  closeButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default PinterestStyleImageGrid;
