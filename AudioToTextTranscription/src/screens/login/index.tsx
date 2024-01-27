import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Common} from '../../assets/svgs';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '../../types/navigation';
import {Button} from '../../Components/button';
import {useState} from 'react';
import {supabase} from '../../supabase';

export function Login() {
  const navigation = useNavigation<RootStackNavigationProps>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        Alert.alert('Login Error', error.message);
      } else {
        navigation.navigate('HOME');
      }
    } catch (error) {
      console.error('Unexpected error during login:', error);
    }
  };

  return (
    <View style={styles.loginContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('HOME')}>
        <Common.BackArrow />
      </TouchableOpacity>

      <View style={styles.createAccountContainer}>
        <Text style={styles.loginTitle}>Welcome!</Text>
        <Text style={styles.loginText}>Login with your credentials</Text>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.btnContainer} onPress={handleLogin}>
        <Button color="#171717" label="Login" width={300} />
      </TouchableOpacity>
    </View>
  );
}
