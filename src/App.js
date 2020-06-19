import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import middleware from './middleware';
import reducer from './reducers';
import {SafeAreaView, View} from 'react-native';
import AppStatusBar from './components/AppStatusBar';
import AppNavigator from './navigation/Navigator';
import {isMountedRef} from './navigation/NavRef';

const store = createStore(reducer, middleware);

export default class App extends Component {
  componentDidMount() {
    isMountedRef.current = true;
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <AppStatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
          <SafeAreaView style={{flex: 1, justifyContent: 'space-around'}}>
            <AppNavigator />
          </SafeAreaView>
        </View>
      </Provider>
    );
  }
}
