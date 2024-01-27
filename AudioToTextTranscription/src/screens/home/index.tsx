import {useNavigation} from '@react-navigation/native';
import {PermissionsAndroid, Text, TouchableOpacity, View} from 'react-native';
import {RootStackNavigationProps} from '../../types/navigation';
import {styles} from './styles';
import {Common} from '../../assets/svgs';
import {useEffect, useState} from 'react';
import AudioRecord from 'react-native-audio-record';
import RNFS from 'react-native-fs';

export function Home() {
  const checkMicrophone = async () => {
    const result = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    );
    console.log(result, 'permission');
    return result;
  };

  useEffect(() => {
    checkMicrophone();
  }, []);

  const navigation = useNavigation<RootStackNavigationProps>();

  const [isRecording, setIsRecording] = useState<boolean>(false);

  const startRecording = async () => {
    try {
      const option = {
        sampleRate: 16000,
        channels: 1,
        bitsPerSample: 16,
        audioSource: 6,
        wavFile: 'test.wav',
      };
      AudioRecord.init(option);
      await AudioRecord.start();
      setIsRecording(true);
    } catch (error) {
      console.log(error);
    }
  };

  const stopRecording = async () => {
    try {
      const audioFile = await AudioRecord.stop();
      const currentTime = Date.now();
      setIsRecording(false);
      const filePath = `${RNFS.DocumentDirectoryPath}/Audio_${currentTime}.mp3`;
      await RNFS.moveFile(audioFile, filePath);
      console.log(audioFile, 'audio data');
      console.log(filePath);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.homeTitleContainer}>
        <Text style={styles.homeTitleText}>Home</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SETTINGS')}>
          <Common.SettingsIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.audioRecordBtn}>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: isRecording ? 'red' : 'green',
            width: '50%',
          }}
          onPress={isRecording ? stopRecording : startRecording}>
          <Text style={{color: 'white', textAlign: 'center'}}>
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('RECORDINGS')}>
        <Text style={styles.showRecordingsText}>show Recordings</Text>
      </TouchableOpacity>
    </>
  );
}
