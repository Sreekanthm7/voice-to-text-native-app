import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  homeTitleContainer: {
    padding: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  homeTitleText: {
    fontSize: 23,
    fontWeight: '600',
    color: '#1C1C1C',
  },
  audioRecordBtn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 100,
  },
  playPauseContainer: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  playContainer: {
    padding: 10,
    backgroundColor: 'orange',
    width: '40%',
  },
  pauseContainer: {
    padding: 10,
    backgroundColor: 'red',
    width: '40%',
  },
  showRecordingsText: {
    color: 'black',
  },
});
