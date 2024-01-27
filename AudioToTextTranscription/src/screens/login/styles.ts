import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  loginContainer: {
    margin: 24,
  },

  createAccountContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '80%',
  },
  textInput: {
    borderColor: '#7D7D7D',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 16,
    paddingRight: 86,
    paddingLeft: 16,
    width: '80%',
    marginTop: 40,
  },
  loginTitle: {
    fontSize: 40,
    color: '#1C1C1C',
    fontWeight: '600',
  },
  loginText: {
    color: '#101010',
    fontSize: 16,
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
  },
});
