/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {Button} from 'react-native-elements';
import CodeInput from '../components/CodeInput';
import * as actions from '../actions';
import {fontName} from '../utils/helpers';

const window = Dimensions.get('window');

class VerifyCodeScreen extends Component {
  confirmCode = code => {
    this.props.confirmCode(code);
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <View style={{flex: 0.4, justifyContent: 'center'}}>
              <Text style={styles.title}>What’s the verification code</Text>
              <Text style={styles.subTitle}>
                Code sent to {this.props.phoneNumber}
              </Text>
              <Button
                title="Resend Code"
                type="clear"
                containerStyle={styles.buttonContainer}
                buttonStyle={{height: 56}}
                titleStyle={styles.buttonTitle}
                onPress={() => alert('this is button')}
              />
            </View>
            <View style={{flex: 0.6, justifyContent: 'flex-start'}}>
              <View style={{flex: 0.4}}>
                {this.props.loading ? (
                  <ActivityIndicator size="large" color="#DCDCDC" />
                ) : (
                  <CodeInput confirmCode={this.confirmCode} />
                )}
              </View>
              {this.props.error && (
                <View style={styles.codeErrorContainer}>
                  <Text style={{fontFamily: fontName.regular, color: 'red'}}>
                    {this.props.error.code}
                  </Text>
                </View>
              )}
            </View>
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
  subTitle: {
    fontFamily: fontName.regular,
    fontSize: 15,
    color: 'grey',
    textAlign: 'left',
    width: window.width / 1.5,
    marginLeft: 20,
    marginTop: 10,
  },
  buttonContainer: {
    marginLeft: 14,
    alignSelf: 'flex-start',
  },
  buttonTitle: {
    fontFamily: fontName.bold,
    fontSize: 14,
    color: '#00DEEB',
    fontWeight: '500',
  },
  codeErrorContainer: {
    flex: 0.6,
    textAlign: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = ({loading, error, authedPhone}) => {
  return {
    phoneNumber: authedPhone.phoneNumber,
    loading: loading,
    error: error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    confirmCode: code => dispatch(actions.confirmCode(code)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VerifyCodeScreen);
