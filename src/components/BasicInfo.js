/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import {getItemInfo, fontName} from '../utils/helpers';

const styles = StyleSheet.create({
  basicInfoItem: {
    padding: 3,
    paddingLeft: 12,
    backgroundColor: '#f9f9f9',
    textAlign: 'left',
  },
});

export default function BasicInfo({list}) {
  return list.map(item => {
    let fullText = '';
    if (getItemInfo(item.type).getText) {
      fullText = getItemInfo(item.type).getText(item.text);
    } else {
      fullText = item.text;
    }
    return (
      <ListItem
        title={fullText}
        leftIcon={getItemInfo(item.type).getIcon()}
        key={item.type}
        titleStyle={{
          fontFamily: fontName.regular,
          fontSize: 13,
        }}
        containerStyle={styles.basicInfoItem}
      />
    );
  });
}
