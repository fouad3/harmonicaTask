import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import AddPhoneScreen from '../src/screens/AddPhoneScreen';
import {render, fireEvent, waitFor} from 'react-native-testing-library';
import {createStore} from 'redux';
import middleware from '../src/middleware';
import reducer from '../src/reducers';

jest.mock('@react-native-firebase/auth', () => {
  return () => ({
    signInWithPhoneNumber: jest.fn(number => Promise.resolve(true)),
  });
});

test('should display error on an invalid phone number', async () => {
  const store = createStore(reducer, middleware);

  const component = (
    <Provider store={store}>
      <AddPhoneScreen />
    </Provider>
  );
  const page = render(component);
  const phoneInput = page.getByPlaceholder('1208816682');
  //   console.log(phoneInput);
  const ValidateButton = page.getByText('Send Code');
  fireEvent.changeText(phoneInput, '35567');
  fireEvent.press(ValidateButton);
  const ErrorMessage = await waitFor(() =>
    page.queryByText('invalid phone number!'),
  );
  expect(ErrorMessage).toBeTruthy();
});

test('should valid number exist in the store after pressing send code button', async () => {
  const store = createStore(reducer, middleware);

  const component = (
    <Provider store={store}>
      <AddPhoneScreen />
    </Provider>
  );
  const page = render(component);
  const phoneInput = page.getByPlaceholder('1208816682');
  const ValidateButton = page.getByText('Send Code');
  fireEvent.changeText(phoneInput, '1208816682');
  fireEvent.press(ValidateButton);
  await waitFor(() => {
    expect(store.getState().authedPhone.phoneNumber).toBe('+201208816682');
  });
});
