import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';
import Config from 'react-native-config';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://dutnihurvmprjbhamriz.supabase.co';
const supabaseKey = Config.SERVICE_KEY || '';
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
