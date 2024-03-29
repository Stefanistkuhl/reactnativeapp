import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {useState} from 'react'; 


import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('./assets/messmer.png')

export default function App() {
    const [selectedImage, setSelectedImage] = useState(null);
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          quality: 1,
        });
        if(!result.canceled){
            setSelectedImage(result.assets[0].uri);
        }else{
            alert('You did not select any image idiot')
        }
    }
    return (
        <View style={styles.container}>
            <Text style={{color: '#fff'}}>Hiiiiii :3</Text>
            <View style={styles.imageContainer}>
                <ImageViewer 
                placeholderImageSource={PlaceholderImage}
                selectedImage={selectedImage}
                />
                
            </View>
            <View style={styles.footerContainer}>
                <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
                <Button label="Use this photo"/>
            </View>
            
        <StatusBar style="auto" />
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
