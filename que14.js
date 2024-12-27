let Tasks = ["task1" , "task2" , "task3" , "task4" , "task5"];
Tasks.shift();
Tasks.unshift("high priority task1" , "high priority task2");
Tasks.pop();
Tasks.push("new last task");
console.log("Updated task list" , Tasks);

