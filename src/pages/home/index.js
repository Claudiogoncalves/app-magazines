import React, { Component } from 'react';
import { View, Image, Text, Linking, Alert, TouchableHighlight } from 'react-native';
import styles from './styles';

import Services from './../../services';

const serviceMagazines = new Services();

export default class Home extends Component {
  /*
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
    headerTitle: (
      <Image
        resizeMode="contain"
        style={styles.logoHome}
        source={require('./../../image/logo.png')}
      />
    ),
  }) */

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      lastMagazine: { image: '' },
    };
  }

  componentDidMount() {
    this.getDataBaseMagazine();
  }
  onPress = () => {
    /* Linking.openURL(this.state.linkMagazine.link); */
    Alert.alert('PDF');
  }

  async getDataBaseMagazine() {
    const responseData = await serviceMagazines.getDataBaseMagazine();

    /* const dataTitle = JSON.stringify(responseData[60].titulo);
    console.log('dataTitle', dataTitle); */

    this.setState({
      data: responseData,
      lastMagazine: responseData.pop(),
      linkMagazine: responseData,
      title: responseData[60].titulo,
    });
    console.log('teste', this.state.data);
  }
  render() {
    return (
      <View style={styles.container}>
        {
          this.state.lastMagazine.image !== '' &&
          <Image
            style={styles.img}
            resizeMode="contain"
            source={{ uri: this.state.lastMagazine.image }}
          />
        }
        <Text style={styles.title}>{this.state.title} - Março</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => { Linking.openURL(this.state.linkMagazine[60].link); }}
        >
          <Text style={styles.textButton}> DOWNLOAD </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
