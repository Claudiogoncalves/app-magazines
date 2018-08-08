import React, { Component } from 'react';
import { View, FlatList, Text, Image, Linking, TouchableHighlight } from 'react-native';

import Services from './../../services';
import styles from './styles';

const serviceMagazines = new Services();

export default class Magazine extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
    headerTitle: (
      <Image
        resizeMode="contain"
        style={{
          width: 90,
          height: 50,
          alignSelf: 'center',
        }}
        source={require('./../../image/logo.png')}
      />
    ),
  })
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      loading: false,
    };
  }

  componentDidMount() {
    this.getDataBaseMagazine();
  }

  async getDataBaseMagazine() {
    if (this.state.loading) return;

    const { page } = this.state;

    this.setState({ loading: true });

    const responseData = await serviceMagazines.getDataBaseMagazine();

    this.setState({
      data: responseData,
      page: page + 1,
      loading: false,
    });
    console.log('teste', this.state.data);
  }

  renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Image source={{ uri: item.image }} style={styles.imageView} />
      <Text style={styles.textView} >Edição: {item.titulo}</Text>
      <TouchableHighlight
        style={styles.button}
        onPress={() => { Linking.openURL(item.link); }}
      >
        <Text style={styles.textEdition}>
          Ler edição
        </Text>

      </TouchableHighlight>
    </View>
  );

  render() {
    return (
      <View >
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
        />
      </View>
    );
  }
}
