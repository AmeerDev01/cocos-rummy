import { _decorator, assetManager, find } from "cc";
import * as Hall from "./hall";
import Singleton from "./utils/Singleton";
import "./extend";

assetManager.downloader.maxConcurrency = 1000;
assetManager.downloader.maxRequestsPerFrame = 1000;
export default class App extends Singleton {
  start() {
    Hall.startUp(find("Canvas"));
  }
}
