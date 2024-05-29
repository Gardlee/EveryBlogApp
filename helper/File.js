import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import mime from 'mime';

const requestPermission = async () => {
  const { status: mediaStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (mediaStatus !== 'granted') {
    console.log('Sorry, we need camera roll permissions to make this work!');
  }

  const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
  if (cameraStatus !== 'granted') {
    console.log('Sorry, we need camera permissions to make this work!');
  }
};

const getFromCamera = async () => {
  return await ImagePicker.launchCameraAsync();
};

const getFromGallery = async () => {
  return await ImagePicker.launchImageLibraryAsync();
};

const save = async (uri) => {
  if (!uri) {
    console.log('No URI provided');
    return null;
  }

  try {
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'ImagePicker', { intermediates: true });
    console.log('Folder Created!!!');
  } catch (error) {
    console.log('Folder already exists or cannot be created: ', error);
  }

  try {
    let filename = uri.split('/').pop();
    let newUri = FileSystem.documentDirectory + 'ImagePicker/' + filename;
    await FileSystem.copyAsync({ from: uri, to: newUri });
    console.log('File Created!!!');
    return newUri; // ต้องการส่งออก URI ที่ถูกเปลี่ยนแปลง
  } catch (error) {
    console.log('Error saving file: ', error);
    return uri;
  }
};


const download = async (uri) => {
  if (!uri) {
    console.log('No URI provided');
    return;
  }

  try {
    let randomName = Math.random().toString(36).substring(2, 9);
    let extension = mime.getExtension(mime.getType(uri));
    let filename = randomName + '.' + extension;
    const response = await FileSystem.downloadAsync(uri, FileSystem.cacheDirectory + filename);

    const asset = await MediaLibrary.createAssetAsync(response.uri);
    await MediaLibrary.createAlbumAsync('SCS337', asset, false);
    console.log('Download and save complete!');
  } catch (error) {
    console.error('Error downloading file: ', error);
  }
};

export default { requestPermission, getFromCamera, getFromGallery, save, download };
