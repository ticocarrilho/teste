import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#23d2a8',
    paddingHorizontal: 10,
    paddingTop: 10,
    flex: 1,
  },

  text: {
    fontSize: 18,
    color: '#ffffff',
    marginLeft: 5,
  },

  input: {
    width: '100%',
    fontSize: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginVertical: 10,
    paddingLeft: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});
