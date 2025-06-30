import './style.css';
import RecycleBin from '../src/RecycleBin.png';

document.querySelector('#table').innerHTML = `
<div class="to_do">
      <div class="to_do_container">
        <h2 class="to_do_title">Список задач</h2>
          <div class="to_do_head">
            <input id="to_do_input" class="to_do_input" type="text" placeholder="Моя задача">
            <button class="to_do_btn">Добавить</button>
          </div>
          <div class="to_do_list" id="to_do_list">
      </div>
</div>
`;

//<img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />

class Task {
  constructor(id, taskText, completed, createdAt) {
    this.id = id;
    this.taskText = taskText;
    this.completed = completed;
    this.createdAt = createdAt;
  }
}

let currentId = 0;
const myText = document.querySelector('.to_do_input');
const taskArray = [];

const todoBtn = document.querySelector('.to_do_btn');
todoBtn.addEventListener('click', () => {
  addTask();
});

function addTask() {
  if (myText.value === '') {
    alert('Введите текст');
  } else {
    const newTask = new Task(
      currentId,
      myText.value,
      false,
      new Date().toLocaleDateString()
    );
    taskArray.push(newTask);
    currentId++;
    showTasks();
  }
  myText.value = '';
}

function showTasks() {
  let content = '<table class="taskTable">';
  for (let i = 0; i < taskArray.length; i++) {
    content += `<tr id="${i}" class="line">`;
    if (taskArray[i].completed) {
      content += `<td class="table_checkbox"><input type="checkbox" name="checkbox" id="Completed${i}" checked="true" class="myCheckbox"></td>
          <td class="table_text checked" id="text${i}"> ${taskArray[i].taskText} </td>
          <td class="table_date checked" id="date${i}"> ${taskArray[i].createdAt}</td>`;
    } else {
      content += `<td class="table_checkbox"><input type="checkbox" name="checkbox" id="Completed${i}" class="myCheckbox"></td>
          <td class="table_text" id="text${i}"> ${taskArray[i].taskText} </td>
          <td class="table_date" id="date${i}"> ${taskArray[i].createdAt}</td>`;
    }
    content += `<td class="delete_task"><img src="${RecycleBin}" class="RecycleBin" id="RecycleBin${i}" alt="RecycleBin"></td></tr>`;
  }
  content += '</table>';
  document.getElementById('to_do_list').innerHTML = content;
  for (let i = 0; i < taskArray.length; i++) {
    document.getElementById(`Completed${i}`).addEventListener('click', () => {
      completeTask(i);
    });
    document.getElementById(`RecycleBin${i}`).addEventListener('click', () => {
      deleteTask(i);
    });
  }
}

function completeTask(taskId) {
  const checkbox_id = `Completed${taskId}`;
  const checkbox = document.getElementById(checkbox_id);
  if (checkbox.checked) {
    taskArray[taskId].completed = true;
  } else {
    taskArray[taskId].completed = false;
  }
  showTasks();
}

function deleteTask(taskId) {
  taskArray.splice(taskId, 1);
  showTasks();
}
