import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, TouchableOpacity, Modal, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as mime from 'mime';

const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
    }
};

export default function UploadArea({ image, setImage }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(image);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const localUri = await saveImage(result.assets[0].uri);
            setSelectedImage(localUri);
            setImage(localUri);
            setModalVisible(false);
        } else {
            alert('No image selected');
        }
    };

    const saveImage = async (uri) => {
        try {
            const filename = uri.split('/').pop();
            const newUri = `${FileSystem.documentDirectory}${filename}`;
            await FileSystem.copyAsync({ from: uri, to: newUri });
            return newUri;
        } catch (error) {
            console.error('Error saving image:', error);
            return uri;
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                {selectedImage ? (
                    <Image source={{ uri: selectedImage }} style={styles.image} />
                ) : (
                    <Text>Select Image</Text>
                )}
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalView}>
                    <Button title="Pick an image from camera roll" onPress={pickImage} />
                    <Button
                        title="Close"
                        onPress={() => setModalVisible(!modalVisible)}
                        color="red"
                    />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 10,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});
