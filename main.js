window.addEventListener('load', () => {
  const form = document.querySelector("#newTasks");
  const input = document.querySelector("#input");
  const taskList = document.querySelector("#addTasks");
  const taskComp = document.querySelector("complete");


  form.addEventListener('submit', e => {
	e.preventDefault();

  const task = input.value;

  if(!task){
    alert("Task cannot be Blank");
    return;
  }

  const taskEle = document.createElement('div');
  taskEle.classList.add('task');

  const taskCont = document.createElement('div');
  taskCont.classList.add('content');

  taskEle.appendChild(taskCont);

  const taskInt = document.createElement('input');
  taskInt.classList.add('text');
  taskInt.type = 'text';
  taskInt.value = task;

  taskCont.appendChild(taskInt);

  const taskAct = document.createElement('div');
  taskAct.classList.add('actions');

  const taskEdit = document.createElement('button');
  taskEdit.classList.add('edit');
  taskEdit.innerText = 'Edit';

  const taskDone = document.createElement('button');
  taskDone.classList.add('done');
  taskDone.innerText = 'Done';

  const taskRemo = document.createElement('button');
  taskRemo.classList.add('remove');
  taskRemo.innerText = 'Remove';

  taskAct.appendChild(taskEdit);
  taskAct.appendChild(taskDone);
  taskAct.appendChild(taskRemo);
  taskEle.appendChild(taskAct);
  taskList.appendChild(taskEle);

  input.value = '';

  taskEdit.addEventListener('click', (e) => {
    if (taskEdit.innerText.toLowerCase() == "edit") {
      taskEdit.innerText = "Save";
      taskInt.removeAttribute("readonly");
      taskInt.focus();
    } else {
      taskEdit.innerText = "Edit";
      taskInt.setAttribute("readonly", "readonly");
    }
  });

  taskDone.addEventListener('click', (e) => {
    taskList.removeChild(taskEle);
    taskComp.appendChild(taskEle);
  });

  taskRemo.addEventListener('click', (e) => {
    taskList.removeChild(taskEle);
  });

  });
});
