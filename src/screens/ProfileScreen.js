/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Platform,
} from 'react-native';
import {Image, Icon, Text, Card} from 'react-native-elements';
import * as actions from '../actions';
import SelfieVerifiedIcon from '../assets/icons/SelfieVerified.svg';
import {fontName} from '../utils/helpers';
import BasicInfo from '../components/BasicInfo';
import About from '../components/About';

const window = Dimensions.get('window');

class ProfileScreen extends Component {
  componentDidMount() {
    this.props.getProfileData();
  }

  render() {
    const {profileData, loading} = this.props;
    return (
      <View style={styles.container}>
        {loading ? (
          <View style={styles.spinner}>
            <ActivityIndicator size="large" color="#DCDCDC" />
          </View>
        ) : (
          <ScrollView>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image
                source={require('../assets/images/profileImage.jpeg')}
                style={styles.profileImage}
              />
              <View style={styles.basicInfoContainer}>
                <View style={{flex: 0.1, flexDirection: 'row'}}>
                  <Text style={styles.title}>{profileData.name}</Text>
                  <Icon
                    Component={SelfieVerifiedIcon}
                    style={{
                      marginTop: Platform.OS === 'ios' ? 14 : 18,
                      marginLeft: 8,
                    }}
                  />
                </View>
                {profileData.basicInfo && (
                  <BasicInfo list={profileData.basicInfo} />
                )}
                <Card containerStyle={styles.bio}>
                  <Text style={{fontFamily: fontName.regular}}>
                    {profileData.bio}
                  </Text>
                </Card>
                {profileData.about && <About list={profileData.about} />}
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  spinner: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  profileImage: {
    width: window.width - 50,
    height: window.height / 3,
    borderRadius: 10,
    paddingTop: 5,
    alignSelf: 'center',
  },
  title: {
    fontFamily: fontName.extraBold,
    fontSize: 35,
    color: 'black',
    textAlign: 'left',
    fontWeight: '800',
    textTransform: 'capitalize',
    paddingLeft: 12,
  },
  basicInfoContainer: {
    flex: 1,
    textAlign: 'left',
    alignSelf: 'flex-start',
    alignItems: 'stretch',
    padding: 12,
  },
  basicInfoItem: {
    padding: 3,
    paddingLeft: 12,
    backgroundColor: '#f9f9f9',
    textAlign: 'left',
  },
  bio: {
    borderWidth: 0,
    borderRadius: 10,
    shadowColor: 'transparent',
  },
});

const mapStateToProps = ({loading, profile}) => {
  return {
    profileData: profile,
    loading: loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfileData: () => dispatch(actions.getProfileData()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen);
