import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  HOME: undefined;
  LOGIN: undefined;
  SETTINGS: undefined;
  RECORDINGS: undefined;
};

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;
