/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ToDo from './src/components/ToDoList';
import Drawer from './src/components/Drawer';
import Network from './src/components/Network';
import NavSample from './src/components/NavSample';

AppRegistry.registerComponent(appName, () => App);
