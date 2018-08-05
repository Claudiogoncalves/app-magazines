import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, Image, Linking } from 'react-native';
import * as firebase from 'firebase';

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

  getDataBaseMagazine() {
    if (this.state.loading) return;

    const { page } = this.state;

    this.setState({ loading: true });

    firebase.database().ref('magazines').once('value', (snapshot) => {
      const response = snapshot.val();
      const resposeData = Object.keys(response).map(i => response[i]);
      console.log('response', resposeData);

      this.setState({
        data: resposeData,
        page: page + 1,
        loading: false,
      });
      console.log('teste', this.state.data);
    });
  }

  renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Image source={{ uri: item.image }} style={styles.imageView} />
      <Text style={styles.textView} >Edição: {item.titulo}</Text>
      <Text
        style={{ color: 'red', marginLeft: 7, }}
        onPress={() => { Linking.openURL(item.link); }}
      > Ler edição
      </Text>
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

const styles = StyleSheet.create({
  textView: {
    textAlignVertical: 'center',
    color: '#000',
    fontSize: 16,
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
});
