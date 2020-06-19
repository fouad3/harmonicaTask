import React from 'react';
import {Icon, Text} from 'react-native-elements';
import {Platform, Button, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AddPhoneScreen from '../screens/AddPhoneScreen';
import VerifyCodeScreen from '../screens/VerifyCodeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {navigationRef} from './NavRef';
import NewPreferencesIcon from '../assets/icons/iconPreferences-New.svg';
import MoreIcon from '../assets/icons/iconMore.svg';

const OnboardingStack = createStackNavigator();
const DiscoverStack = createStackNavigator();
const RootStack = createStackNavigator();

const OnBoradingNav = () => {
  return (
    <OnboardingStack.Navigator>
      <OnboardingStack.Screen
        name="AddPhone"
        component={AddPhoneScreen}
        options={{headerShown: false}}
      />
      <OnboardingStack.Screen
        name="VerifyCode"
        component={VerifyCodeScreen}
        options={{headerShown: false}}
      />
    </OnboardingStack.Navigator>
  );
};

const DiscoverNav = () => {
  return (
    <DiscoverStack.Navigator>
      <DiscoverStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: '',
          headerRight: () => (
            <TouchableOpacity
              style={{padding: 24}}
              onPress={() => alert('This is a button!')}>
              <MoreIcon width="25" height="25" />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{padding: 19}}
              onPress={() => alert('This is a button!')}>
              <NewPreferencesIcon width="25" height="25" />
            </TouchableOpacity>
          ),
          headerStyle: {
            height: 70,
            backgroundColor: '#f9f9f9',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            elevation: 0,
          },
        }}
      />
    </DiscoverStack.Navigator>
  );
};

export default function AppNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Onboarding"
          options={{headerShown: false}}
          component={OnBoradingNav}
        />
        <RootStack.Screen
          name="Discover"
          options={{headerShown: false}}
          component={DiscoverNav}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
