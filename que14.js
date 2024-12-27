let Tasks = ["task1" , "task2" , "task3" , "task4" , "task5"];
//Removing first task
Tasks.shift();
//Adding two high priority tasks
Tasks.unshift("high priority task1" , "high priority task2");
//Replace the last task 
Tasks.pop();
//Adding a new task at the end 
Tasks.push("new last task");
//Printing updated task
console.log("Updated task list" , Tasks);

