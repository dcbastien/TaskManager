//For selecting task
let restarttask = true;
let option;
const close = `CLOSE`
const tasks = `TASKS`
const add = `NEW`
const remove = `REMOVE`


const taskmanager = 
`TASK MANAGER
What would you like to do (Please enter one of the options below):
"TASKS" - Displays All Tasks
"NEW" - Add a New Task
"REMOVE" - Remove a Task
"CLOSE" - Close The Task Manager
`

;

while (restarttask) {
option = prompt(taskmanager);
    if (option === close) { alert (`Thank you for using Task Manager`)
    break;
    } else if
      (option === tasks) {alert (`
Charge Mac Book
Master JavaScript`)
prompt (taskmanager)
break;   
        } else {
          option = prompt(taskmanager);
        }
  } 




 
// while option = `CLOSE` {alert(`Thank you for using Task Manager`)}
// //If CLOSE is the users selection --> END
//  alert(`Thank you for using Task Manager`)
 
// //if TASKS is the users selection --START MENU
// alert (
// `Charge Mac Book
// Master JavaScript`)
// // if NEW is the users selection -->START MENU

// //if REMOVE is the users selection --> START MENU

 