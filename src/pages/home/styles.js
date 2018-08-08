import { StyleSheet } from 'react-native';
import { metrics } from './../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.baseMargin * 2,
  },
  img: {
    width: '450%',
    height: 350,
    alignSelf: 'center',
  },
  logoHome: {
    width: 90,
    height: 50,
    alignSelf: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'center',
    color: '#2e2e88',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#00963c',
    padding: 10,
    marginTop: 20,
    width: '50%',
    borderRadius: 5,
  },
  textButton: {
    color: '#FFF',
    alignSelf: 'center',
  }
});

export default styles;
