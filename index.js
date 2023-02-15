/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import LogInBind from './src/views/non-voyants/LoginBind';
import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => LogInBind);
