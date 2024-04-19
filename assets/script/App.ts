import { _decorator, find } from 'cc';
import * as Hall from './hall'
import Singleton from './utils/Singleton';
import encrypAesEcb from './utils/encryption'
import './extend'

export default class App extends Singleton {
	start() {
		// console.log('encrypAesEcb', encrypAesEcb('test-demo'))
		Hall.startUp(find('Canvas'))
	}
}