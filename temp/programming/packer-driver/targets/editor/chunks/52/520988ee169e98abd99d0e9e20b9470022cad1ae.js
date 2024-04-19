System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Task, TaskScheduler, _crd, taskMap, taskScheduler, TaskSchedulerDefault;

  _export({
    Task: void 0,
    default: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3f379nxaHVF5K33KSNWIeq0", "TaskScheduler", undefined);

      __checkObsolete__(['math']);

      /**
       * 任务类，可以放置一段待执行的代码，且将任务完成点放在代码的任一位置，任务完成的函数亦可支持执行多个代码段。之后，随时自由控制启动任务此，并按照预制的方案执行完成的函数
       * 
       *  使用方式
      
       const taskStacker = new TaskStacker((done) => {
          window.setTimeout(() => {
            done()
          }, 1000)
        })
      
        // some time
      
        taskStacker.subscribeDone('done_1', (key) => {
          console.log('done', key)
        })
        taskStacker.subscribeDone('done_2', (key) => {
          console.log('done', key)
        })
      
        // finally
      
        taskStacker.execute()
      
        // 不想等待，提前执行
      
        taskStacker.forceComplete()
      
        推荐配合使用调度器TaskScheduler
       */
      taskMap = {};

      _export("Task", Task = class Task {
        /**切记，声明主执行函数中，done一定要确保执行，否则任务无法停止，若使用了任务调度器，那么队列将会被挂起 */
        constructor(fn, name) {
          this.name = `task_${Date.parse(new Date()) + parseInt(Math.random() * 1000 + '')}`;

          /**完成后是否自爆，为调度器预留使用的字段，不要手贱自行设置。当然也有脱离调度器使用的方式，但是劳资不告诉你，要么自己看代码 */
          this.isAutoDestroy = true;

          /**任务是否已经完整执行了，要重启，需要重新执行execute函数 */
          this.hasDone = true;
          this.isExecute = false;
          this.isForceComplete = false;
          this.doneHandlerMap = [];
          this.startUpHandler = void 0;
          this.startUpHandler = fn;
          name && (this.name = name);
          this.isExecute = false; // taskMap[this.name] = this
        }

        /**结束 */
        finally() {}
        /**绑定任务执行完之后的函数，主要为任务调度器使用，判断是否需要销毁，所以，若使用了调度器，请勿手动调用此函数，因为调用了也没啥卵用，会被覆盖掉 */


        bindFinally(fn) {
          this.finally = fn;
        }

        execute() {
          if (!this.hasDone) {
            console.error('The task has not been completed');
            return;
          }

          this.hasDone = false;

          try {
            this.startUpHandler(() => {
              try {
                if (!this.isForceComplete) {
                  //有可能已经提前终止了任务
                  this.doneHandlerMap.forEach(item => item.handler(item.key));
                  this.hasDone = true;
                  this.isExecute = true;
                  this.finally();
                }
              } catch (e) {
                console.error(e);
              }
            });
          } catch (e) {
            console.error(e);
          }
        }
        /**
         * 声明完成的事件函数
         * @param key 识别字符串
         * @param handler 函数体
         * @param isClear 加入之前是否删除之前的完成函数，为避免意外的情况，慎用（一般情况下，若要重启函数，且要清除之前已经执行过的函数，可以置为true）
         * @returns 
         */


        subscribeDone(key, handler, isClear = false) {
          // this.hasDone && console.warn('The task has been done')
          isClear && (this.doneHandlerMap = []);
          this.doneHandlerMap.push({
            key,
            handler
          });
          return this;
        }
        /**
         * 越过主函数，提前强制完成
         * @param isDoneExecute 是否还要执行done函数
         */


        forceComplete(isDoneExecute = true) {
          this.isForceComplete = true;
          isDoneExecute && this.doneHandlerMap.forEach(item => {
            try {
              item.handler(item.key);
            } catch (e) {
              console.error(e);
            }
          });
          this.hasDone = true;
          this.isExecute = true;
          this.finally();
        }

      });
      /**任务调度器，使用方法：TaskScheduler.Instance().joinqQueue(task1, false).joinqQueue(task2, false) 
       * 
       * 传入的doneFn是通道里的任务都执行完之后要执行的函数，如果再加入队列，此函数都会在队列执行完之后执行
      */


      _export("default", TaskScheduler = class TaskScheduler {
        constructor(doneFn) {
          this.isDone = true;
          this.doneFn = void 0;

          /**异步队列 */
          this.asyncQueue = [];
          this.syncQueue = void 0;
          this.doneFn = doneFn;

          while (this.asyncQueue.length) {
            this.start();
          }
        }

        /**干活 */
        start() {
          if (!this.asyncQueue.length) {
            this.isDone = true;
            this.doneFn && this.doneFn();
            return;
          }

          let _task = this.asyncQueue.shift();

          _task.bindFinally(() => {
            _task && _task.isAutoDestroy && (_task = undefined);
            this.start();
          });

          _task.execute();
        }

        /**
         * 加入任务调度器
         * @param taskStacker 任务实体
         * @param sync 立即执行，还是排队执行（true:立即执行，false：排队执行）遵循先进先出原则
         * @param autoDestroy 是否执行完之后自动销毁，如果不销毁，可以调用restart重启，默认销毁
         */
        joinqQueue(task, sync = false, autoDestroy = true) {
          if (autoDestroy) {
            task.isAutoDestroy = autoDestroy;
            task.bindFinally(() => {
              task = undefined; // console.log("task", gameBoardViewModel.changeGameTypeTask)
            });
          } // sync ? task.execute() : this.asyncQueue.push(task)


          if (sync) {
            task.execute();
            return this;
          } else {
            this.asyncQueue.push(task);
          }

          if (this.isDone) {
            this.isDone = false;
            this.start();
          }

          return this;
        }
        /**
         * 提前终止队列
         * @param isDoneExecute 是否还执行每一个task任务的结束函数
         */


        stopQueue(isDoneExecute = true) {
          this.isDone = true;

          while (this.asyncQueue.length) {
            const task = this.asyncQueue.shift();
            isDoneExecute && task.forceComplete();
          }
        }
        /**清楚掉所有后续任务队列 */


        destoryQueue() {
          this.isDone = true;

          while (this.asyncQueue.length) {
            const task = this.asyncQueue.shift();
            task.forceComplete(false);
          }
        }

      });

      _export("TaskSchedulerDefault", TaskSchedulerDefault = () => {
        if (taskScheduler) {
          return taskScheduler;
        } else {
          taskScheduler = new TaskScheduler();
          return taskScheduler;
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=520988ee169e98abd99d0e9e20b9470022cad1ae.js.map