/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import {Button} from 'react-native-elements';
import IntlPhoneInput from 'react-native-intl-phone-input';
import {parsePhoneNumberFromString as parseMobile} from 'libphonenumber-js/mobile';
import * as actions from '../actions';
import {fontName} from '../utils/helpers';

const window = Dimensions.get('window');

class AddPhoneScreen extends Component {
  state = {
    phoneNumber: '',
    isValid: false,
    phoneError: false,
  };

  onChangeText = ({dialCode, phoneNumber}) => {
    const phone = dialCode + phoneNumber;
    const isValid = phone.length > 5 ? parseMobile(phone).isValid() : false;
    this.setState({
      phoneNumber: phone.replace(/\s/g, ''),
      isValid: isValid,
    });
  };

  onPhoneSignIn = () => {
    Keyboard.dismiss();
    if (this.state.isValid) {
      this.setState(
        {
          phoneError: false,
        },
        () => {
          this.props.signInWithPhoneNumber(this.state.phoneNumber);
        },
      );
    } else {
      this.setState({
        phoneError: true,
      });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.title}>What's your phone number?</Text>
            <View style={styles.phoneInput}>
              <IntlPhoneInput
                defaultCountry="EG"
                onChangeText={this.onChangeText}
                style={styles.phoneInput}
                phoneInputStyle={{
                  fontFamily: fontName.regular,
                  fontSize: 25,
                }}
                flagStyle={{width: 50, height: 50}}
                dialCodeTextStyle={{
                  fontFamily: fontName.regular,
                  fontSize: 25,
                }}
                placeholder="1208816682"
              />
              {this.state.phoneError && (
                <Text style={{fontFamily: fontName.regular, color: 'red'}}>
                  invalid phone number!
                </Text>
              )}
            </View>
            <Button
              testID={'phoneInput'}
              title="Send Code"
              type="solid"
              disabled={this.state.phoneNumber === '' || this.props.loading}
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.buttonStyle}
              titleStyle={{fontSize: 20}}
              onPress={this.onPhoneSignIn}
              loading={this.props.loading}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  subContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    padding: 10,
  },
  title: {
    fontFamily: fontName.extraBold,
    fontSize: 25,
    color: '#000000',
    textAlign: 'left',
    fontWeight: '800',
    width: window.width / 1.5,
    marginLeft: 20,
  },
  phoneInput: {
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  buttonContainer: {
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 40,
  },
  buttonStyle: {
    fontFamily: fontName.regular,
    backgroundColor: '#00DEEB',
    height: 56,
  },
});

const mapStateToProps = ({loading}) => {
  return {
    loading: loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signInWithPhoneNumber: phoneNumber =>
      dispatch(actions.signInWithPhoneNumber(phoneNumber)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPhoneScreen);
