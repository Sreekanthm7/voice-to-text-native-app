import { supabase } from "../supabase";

export const userDetails = async () => {
    try {
      const { data, error } = await supabase
        .from('user_info')
        .select('*'); 
  
      if (error) {
        console.error('Error fetching data:', error.message);
      } else {
        console.log('Fetched data:', data);
      }
    } catch (error) {
      console.error('Error in fetchTasks:', error);
    }
  }  