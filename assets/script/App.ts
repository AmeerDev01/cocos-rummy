import { _decorator, assetManager, find } from 'cc';
import * as Hall from './hall'
import Singleton from './utils/Singleton';
import encrypAesEcb from './utils/encryption'
import './extend'

assetManager.downloader.maxConcurrency = 1000
assetManager.downloader.maxRequestsPerFrame = 1000
export default class App extends Singleton {
	start() {
		// console.log('encrypAesEcb', encrypAesEcb('test-demo'))
		Hall.startUp(find('Canvas'))
	}
}