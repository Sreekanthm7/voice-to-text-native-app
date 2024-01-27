import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import {Home} from '../screens/home';
import {Login} from '../screens/login';
import {NavigationContainer} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Session} from '@supabase/supabase-js';
import {supabase} from '../supabase';
import {Settings} from '../screens/settings';
import { Recordings } from '../screens/recordings';

export const Router = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const renderRoutes = () => {
    if (session && session.user) {
      return (
        <>
          <Stack.Screen
            name="HOME"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SETTINGS"
            component={Settings}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RECORDINGS"
            component={Recordings}
            options={{headerShown: false}}
          />
        </>
      );
    } else {
      return (
        <>
          <Stack.Screen
            name="LOGIN"
            component={Login}
            options={{headerShown: false}}
          />
        </>
      );
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>{renderRoutes()}</Stack.Navigator>
    </NavigationContainer>
  );
};
