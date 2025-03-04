// TODO
// 模拟异步任务
const tasks = Array.from({ length: 10 }, (_, i) => {
  return () => new Promise((resolve) => {
      setTimeout(() => {
          console.log(`Task ${i} completed`);
          resolve(i);
      }, 1000);
  });
});

function limitQueue(tasks, concurrency) {
  return new Promise((resolve, reject) => {
    // 已完成任务的数量
    let completed = 0;
    // 当前正在执行的任务数量
    let inProgress = 0;
    // 任务索引
    let index = 0;
    // 存储任务结果的数组
    const results = [];
  
    // 执行单个任务的函数
    function runTask() {
      // 如果所有任务都已处理完或者正在执行的任务达到最大并发数，停止执行
      if (index >= tasks.length || inProgress >= concurrency) {
        return;
      }
      const currentIndex = index++;
      const task = tasks[currentIndex];
      inProgress++;
      task()
        .then((result) => {
          results[currentIndex] = result;
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          inProgress--;
          completed++;
          if (completed === tasks.length) {
            resolve(results);
          } else {
            // 尝试启动下一个任务(补位)
            runTask();
          }
        });
    }
     // 启动并发任务
    for (let i = 0; i < Math.min(concurrency, tasks.length); i++) {
        runTask()
    }
  }) 
}

limitQueue(tasks,3)
  .then((results) => {
        console.log('All tasks completed:', results);
    })
  .catch((error) => {
        console.error('An error occurred:', error);
    });