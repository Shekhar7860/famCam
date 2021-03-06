import {Navigation} from 'react-native-navigation';
import home from './Screens/home';
import * as React from 'react';
import register from './Screens/register';
import otpInput from './Screens/otpInput';
import login from './Screens/login';
import forgotPassword from './Screens/forgotPassword';
import famcamHome from './Screens/famcamHome';
import orders from './Screens/orders';
import profile from './Screens/profile';
import talentInfo from './Screens/talentInfo';
import shoutout from './Screens/shoutout';
import profileSetup from './Screens/profileSetup';
import editProfile from './Screens/editProfile';
import termsAndConditions from './Screens/termsAndConditions';
import PrivacyPolicy from './Screens/PrivacyPolicy';
import contact from './Screens/contact';
import PlayVideo from './Screens/PlayVideo';
import Language from './Screens/Language';
import Suggestion from './Screens/Suggestion';
import AfterPayment from './Screens/AfterPayment';
import PaymentInfo from './Screens/PaymentInfo';
import paymentWeb from './Screens/paymentWeb';
import ChangePassword from './Screens/ChangePassword';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
const store = configureStore();

const createApp = (Component, ...props) => {
  return class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Component/>
        </Provider>
      );
    }
  }
}

export function registerScreens(store, Provider) {
  Navigation.registerComponent('home', () => createApp(home));
  Navigation.registerComponent('register', () => createApp(register));
  Navigation.registerComponent('otpInput', () => createApp(otpInput));
  Navigation.registerComponent('login', () => createApp(login));
  // Navigation.registerComponent('register', ()=> register, store, Provider);
  // Navigation.registerComponent('otpInput', ()=> otpInput, store, Provider);
  // Navigation.registerComponent('login', () => login, store, Provider);
  // Navigation.registerComponent('forgotPassword', () => forgotPassword, store, Provider);
  // Navigation.registerComponent('famcamHome', () => famcamHome, store, Provider);
  // Navigation.registerComponent('orders', () => orders, store, Provider);
  // Navigation.registerComponent('profile', () => profile, store, Provider);
  // Navigation.registerComponent('talentInfo', () => talentInfo, store, Provider);
  // Navigation.registerComponent('shoutout', () => shoutout, store, Provider);
  // Navigation.registerComponent('profileSetup', () =>  profileSetup, store, Provider);
  // Navigation.registerComponent('editProfile', () => editProfile, store, Provider);
  // Navigation.registerComponent('termsAndConditions', () => termsAndConditions, store, Provider);
  // Navigation.registerComponent('PrivacyPolicy', () => PrivacyPolicy, store, Provider);
  // Navigation.registerComponent('contact', () => contact, store, Provider);
  // Navigation.registerComponent('PlayVideo', () => PlayVideo, store, Provider);
  // Navigation.registerComponent('Language', () => Language, store, Provider);
  // Navigation.registerComponent('Suggestion', () => Suggestion, store, Provider);
  // Navigation.registerComponent('AfterPayment', () => AfterPayment, store, Provider);
  // Navigation.registerComponent('PaymentInfo', () => PaymentInfo, store, Provider);
  // Navigation.registerComponent('paymentWeb', () => paymentWeb, store, Provider);
  // Navigation.registerComponent('ChangePassword', () => ChangePassword, store, Provider);
}
