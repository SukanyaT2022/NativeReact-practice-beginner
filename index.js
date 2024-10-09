/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import Yoon from './src/screen/Yoon';
import lolo from './src/screen/lolo';
import LogIn from './src/screen/LogIn';
import InputBox from './src/screen/InputBox';
import Register from './src/screen/Register';
import NewLogin from './src/screen/NewLogin';
import {name as appName} from './app.json';
import ChatBox from './src/screen/ChatBox';

AppRegistry.registerComponent(appName, () => ChatBox);
// line 10 what page you want to get start when open app

// Entry Point of App
// Your First Component
