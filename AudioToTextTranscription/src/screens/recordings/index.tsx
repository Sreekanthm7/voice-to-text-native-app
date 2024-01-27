import {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native';
import RNFS from 'react-native-fs';
import Sound from 'react-native-sound';
import {styles} from './styles';

interface FileUnitProps {
  name: string;
  onPress: (file: any) => void;
}

export const FileUnit: React.FC<FileUnitProps> = ({name, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{color: 'black'}}>{name}</Text>
    </TouchableOpacity>
  );
};

export const Recordings = () => {
  const [audioFile, setAudioFile] = useState<RNFS.ReadDirItem[]>();
  const [soundInstance, setSoundInstance] = useState<Sound | null>(null);

  console.log(audioFile, 'audio files');
  const retrieveAudioFiles = async () => {
    const documentsPath = RNFS.DocumentDirectoryPath;

    try {
      const files = await RNFS.readDir(documentsPath);
      const audios = files.filter(file => {
        const lowerCaseFile = file.path.toLowerCase();
        return lowerCaseFile.endsWith('.mp3') || lowerCaseFile.endsWith('.wav');
      });
      setAudioFile(audios);
    } catch (err) {
      console.log(err, 'error');
    }
  };

  const playAudio = async (file: any) => {
    console.log(file, 'file');

    try {
      setTimeout(() => {
        var sound = new Sound(file?.path, '', error => {
          if (error) {
            console.log(error, 'error');
          }
        });
        setTimeout(() => {
          sound.play(success => {
            if (success) {
              console.log('success');
            } else {
              console.log('error is playing');
            }
          });
        }, 100);
      }, 100);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    retrieveAudioFiles();
    return () => {
      if (soundInstance) {
        soundInstance.release();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      {audioFile?.reverse()?.map(file => (
        <>
          <FileUnit
            name={file?.name ?? ''}
            key={file?.path}
            onPress={() => playAudio(file)}
          />
        </>
      ))}
    </View>
  );
};
