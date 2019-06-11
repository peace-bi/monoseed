import { AppRegistry } from 'react-native';

import { App } from 'components/src/App';

AppRegistry.registerComponent('MyAwesomeProject', () => App);
AppRegistry.runApplication('MyAwesomeProject', {
  rootTag: document.getElementById('root'),
});
