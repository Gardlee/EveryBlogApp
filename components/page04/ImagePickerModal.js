import React from 'react';
import { Modal, View, Button, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import fileHelper from '../../helper/File';

export default function ImagePickerModal({ modalVisible, setModalVisible, onImagePicked }) {
  const pickImage = async (source) => {
    let result;
    if (source === 'camera') {
      result = await fileHelper.getFromCamera();
    } else {
      result = await fileHelper.getFromGallery();
    }

    setModalVisible(false);
    if (!result.cancelled) {
      onImagePicked(result.uri);
    } else {
      console.log('Image selection cancelled');
    }
  };

  return (
    <Modal transparent={true} visible={modalVisible}>
      <View style={styles.modal}>
        <Button title="Take Photo" onPress={() => pickImage('camera')} />
        <Button title="Choose from Gallery" onPress={() => pickImage('gallery')} />
        <Button title="Cancel" onPress={() => setModalVisible(false)} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
