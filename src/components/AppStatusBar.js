import React from 'react';
import {View, StatusBar} from 'react-native';

export default function AppStatusBar({backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: 48}}>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        {...props}
        hidden={false}
      />
    </View>
  );
}
