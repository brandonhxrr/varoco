import { AppRegistry } from 'react-native'
import App from './App'
import './index.css'

AppRegistry.registerComponent("VaroCo", () => App)
AppRegistry.runApplication("VaroCo", {
  initialProps: {},
  rootTag: document.getElementById('root'),
})
