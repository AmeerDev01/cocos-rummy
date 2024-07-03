import { Prefab, Widget, find, instantiate } from 'cc'
import { Node } from 'cc'
import { PrefabPathDefine } from '../hall/sourceDefine/prefabDefine'
import { sourceManageSeletor } from '../hall'
import { effectFade } from './NodeIOEffect'
import { getNodePositionInCanvas } from './tool'

export default class Guide {
  private focusNode: Node
  private explainNode: Node
  private mainBgNode: Node
  private doneHandler: () => void
  constructor(focusNode: Node, explainNode: Node) {
    this.focusNode = focusNode
    this.explainNode = explainNode
  }
  private creatorBg(): Promise<Node> {
    return new Promise((resovle, reject) => {
      sourceManageSeletor().getFileAsync(PrefabPathDefine._GUIDE_PANEL, Prefab).then(({ source }) => {
        resovle(instantiate(source))
      }).catch(() => {
        reject('error')
      })
    })
  }
  public begin() {
    this.creatorBg().then(bgNode => {
      this.mainBgNode = bgNode
      find('Canvas').addChild(this.mainBgNode)
      effectFade(this.mainBgNode).enter()
      const position = getNodePositionInCanvas(this.focusNode)
      const _focusNode = instantiate(this.focusNode)
      const _explainNode = instantiate(this.explainNode)
      _explainNode.active = true
      _focusNode.setPosition(position)
      this.mainBgNode.addChild(_focusNode)
      this.mainBgNode.addChild(_explainNode)
      this.mainBgNode.once(Node.EventType.TOUCH_END, () => {
        effectFade(this.mainBgNode).out().then(() => {
          this.mainBgNode.destroy()
        })
        this.doneHandler && this.doneHandler()
      })
    })
    return this
  }
  public bindDone(done) {
    this.doneHandler = done
  }
}