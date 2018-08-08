import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Welcome from './pages/welcome';
import Magazine from './pages/magazines';
import Contacts from './pages/contacts';
import Home from './pages/home';

const TabNav = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        headerTitle: 'Home',
        tabBarLabel: 'Home',
      },
    },
    Magazine: {
      screen: Magazine,
      navigationOptions: {
        title: 'Magazine',
        headerTitle: 'Magazine',
        tabBarLabel: 'Magazine',
      },
    },
    Contacts: {
      screen: Contacts,
      navigationOptions: {
        title: 'Contacts',
        headerTitle: 'Contacts',
        tabBarLabel: 'Contacts',
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#2e2e88',
      labelStyle: {
        fontSize: 16,
        justifyContent: 'center',
        alignSelf: 'center',
      },
    },
  },
);


TabNav.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  let title;
  let headerStyle;
  if (routeName === 'Home') {
    headerStyle = {
      backgroundColor: '#e5e5e5',
    };
    return {
      title,
      headerStyle,
      headerTitle: (
        <Image
          resizeMode="contain"
          style={styles.logoHome}
          source={require('./../src/image/logo.png')}
        />
      ),
    };
  } else if (routeName === 'Magazine') {
    title = 'Magazine';
    headerStyle = {
      backgroundColor: '#e5e5e5',
    };
    return {
      title,
      headerStyle,
      headerTitle: (
        <Image
          resizeMode="contain"
          style={styles.logoHome}
          source={require('./../src/image/logo.png')}
        />
      ),
    };
  } else if (routeName === 'Contacts') {
    title = 'Contacts';
    headerStyle = {
      backgroundColor: '#e5e5e5',
    };
    return {
      title,
      headerStyle,
      headerTitle: (
        <Image
          resizeMode="contain"
          style={styles.logoHome}
          source={require('./../src/image/logo.png')}
        />
      ),
    };
  }
  return title;
};

const Routes = createStackNavigator({
  Welcome: {
    screen: Welcome,
  },
  user: {
    screen: TabNav,
  },
}, {
  initialRouteName: 'Welcome',
});

const styles = StyleSheet.create({
  logoHome: {
    width: 90,
    height: 50,
    alignSelf: 'center',
  },
});

export default Routes;
