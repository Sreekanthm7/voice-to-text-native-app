import {Text, View} from 'react-native';
import {styles} from './styles';

type ButtonProps = {
  color: string;
  label: string;
  width: number;
};

export const Button = ({color, label, width}: ButtonProps) => {
  return (
    <View style={{backgroundColor: color, width: width, borderRadius: 30}}>
      <Text style={styles.btnText}>{label}</Text>
    </View>
  );
};
