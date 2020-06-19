/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {Card, Icon, Text} from 'react-native-elements';
import {getItemInfo, fontName} from '../utils/helpers';

const styles = StyleSheet.create({
  aboutContainer: {
    borderWidth: 0,
    borderRadius: 10,
    shadowColor: 'transparent',
  },
  aboutItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 30,
  },
  aboutItemText: {
    fontFamily: fontName.regular,
    fontSize: 12,
    marginLeft: 4,
  },
});

export default function About({list}) {
  return (
    <Card
      containerStyle={[styles.aboutContainer, {flex: 1}]}
      title="About"
      titleStyle={{fontFamily: fontName.regular}}
      dividerStyle={{display: 'none'}}>
      <FlatList
        data={list}
        horizontal
        renderItem={({item}) => (
          <Card containerStyle={styles.aboutItemContainer}>
            <View style={{flex: 0.1, flexDirection: 'row'}}>
              <Icon
                Component={() => {
                  return getItemInfo(item.type).getIcon();
                }}
              />
              <Text style={styles.aboutItemText}>{item.text}</Text>
            </View>
          </Card>
        )}
        keyExtractor={item => item.type}
      />
    </Card>
  );
}
