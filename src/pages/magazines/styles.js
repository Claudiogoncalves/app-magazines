import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textView: {
    textAlignVertical: 'center',
    color: '#000',
    fontSize: 16,
    marginTop: 5,
    alignSelf: 'center',
  },
  textEdition: {
    color: '#FFF',
    marginTop: 5,
    alignSelf: 'center',
  },
  listItem: {
    flexGrow: 1,
    backgroundColor: '#EEE',
    padding: 10
  },
  imageView: {
    flex: 1,
    width: '100%',
    height: 220,
    borderRadius: 7,
    resizeMode: 'cover',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#2e2e88',
    padding: 6,
    marginTop: 8,
    width: '70%',
    borderRadius: 5,
  },
});

export default styles;
