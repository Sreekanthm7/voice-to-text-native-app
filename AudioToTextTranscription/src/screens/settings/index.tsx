import {TouchableOpacity, View} from 'react-native';
import {Button} from '../../Components/button';
import {supabase} from '../../supabase';
import {Common} from '../../assets/svgs';
import {styles} from './styles';
import {Text} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '../../types/navigation';

export function Settings() {
  const signOut = async () => {
    const {error} = await supabase.auth.signOut();
  };
  const navigation = useNavigation<RootStackNavigationProps>();

  return (
    <>
      <View style={styles.settingsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('HOME')}>
          <Common.BackArrow />
        </TouchableOpacity>
        <TouchableOpacity onPress={signOut} style={{marginTop: 40}}>
          <Button color="black" label="sign out" width={200} />
        </TouchableOpacity>
      </View>
    </>
  );
}
