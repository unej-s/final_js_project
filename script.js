// const li = document.createElement('li');
const completeButton =  document.createElement('button');
const taskList = document.getElementById("taskList");

function deleteTask(){

  // taskList.removeChild(this.id);  
  
  for(i = 0; i < taskList.childElementCount; i++)
    {
      if(taskList.children[i].id == this.id)
      {
        taskList.removeChild(taskList.children[i]);
       }
     }
    
    
}

function addTask() {

   const taskInput = document.getElementById("taskInput");
   const li = document.createElement('li');
    
    const deleteButton = document.createElement('button');
    deleteButton.onclick = deleteTask;
    deleteButton.textContent = "Delete";
    
    // console.log(taskInput.value)
      if(taskInput.value.trim() !== "") {
        deleteButton.id = taskInput.value;
        li.id = taskInput.value;
        textnode = document.createTextNode(taskInput.value);
        textnode.id = taskInput.value;
        // completeButton.id = taskInput.value;
        li.appendChild(textnode);
        // li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        // createTaskElement(taskInput.value)

        taskInput.value ="";
      }
}



function createTaskElement(taskText) {

  

  li.textContent = taskText;



    
       completeButton.textContent = 'Complete';

       completeButton.oneclick = function () {

         li.classList.toggle('completed')
       };

       

        deleteButton.textContent = 'Delete';

        deleteButton.onrclick = function  () {

          taskList.removeChild(li);

          //Remove task from local storage

          const tasks = getTaskArray();

          const taskIndex = task.IndexOf(taskText);

          if (taskIndex !== -1);

          saveTasks(tasks);
        }
      
};




function getTaskArray(){

  const tasks = localStorage.getItem('tasks');

  return tasks ? JSON.parse(tasks) : [];
}

