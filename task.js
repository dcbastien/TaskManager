//For selecting task
const end = `CLOSE`
const tasks = `TASKS`
const taskmes = `
Charge Mac Book
Master JavaScript`
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

let restarttask = true;
let option;



while (restarttask) {
option = prompt(taskmanager);

    if (option === end) { alert (`Thank you for using Task Manager`);

break;

    } if  (option === tasks) {alert (taskmes);

    } if (option === add) { 
        option = prompt (`Please enter the new task:`)
    alert (`"${option}" has been added!`)
    prompt (taskmanager)
    alert (`${taskmes}\n${option}`)

    
    
    } else if (!option === end || !option === tasks) {
          option = prompt(taskmanager);
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

    }