document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById("taskModal");
    let taskTitle = document.getElementById("taskTitle");
    let dueDate = document.getElementById("dueDate");
    let taskDesc = document.getElementById("taskDesc");
    let msg = document.getElementById("msg");
    let tasks = document.getElementById("tasks");
    let saveTask = document.getElementById("saveTask");
  
    let taskData = JSON.parse(localStorage.getItem("tasks")) || [];
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      validateForm();
    });
  
    function validateForm() {
      if (taskTitle.value.trim() === "") {
        msg.innerHTML = "Task title cannot be blank!";
      } else {
        msg.innerHTML = "";
        saveTaskData();
        saveTask.setAttribute("data-bs-dismiss", "modal");
        saveTask.click();
  
        setTimeout(() => {
          saveTask.setAttribute("data-bs-dismiss", "");
        }, 500);
      }
    }
  
    function saveTaskData() {
      let newTask = {
        title: taskTitle.value,
        date: dueDate.value,
        description: taskDesc.value,
      };
  
      taskData.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(taskData));
  
      renderTasks();
      resetForm();
    }
  
    function renderTasks() {
      tasks.innerHTML = "";
      taskData.forEach((task, index) => {
        tasks.innerHTML += `
          <div class="task" id="task-${index}">
            <strong>${task.title}</strong>
            <small>${task.date}</small>
            <p>${task.description}</p>
            <div class="options">
              <i class="fas fa-edit text-primary" onclick="editTask(${index})"></i>
              <i class="fas fa-trash-alt text-danger" onclick="deleteTask(${index})"></i>
            </div>
          </div>`;
      });
    }
  
    function resetForm() {
      taskTitle.value = "";
      dueDate.value = "";
      taskDesc.value = "";
    }
  
    window.editTask = (index) => {
      let task = taskData[index];
      taskTitle.value = task.title;
      dueDate.value = task.date;
      taskDesc.value = task.description;
  
      saveTask.onclick = () => {
        taskData[index] = {
          title: taskTitle.value,
          date: dueDate.value,
          description: taskDesc.value,
        };
        localStorage.setItem("tasks", JSON.stringify(taskData));
        renderTasks();
        saveTask.setAttribute("data-bs-dismiss", "modal");
      };
    };
  
    window.deleteTask = (index) => {
      taskData.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(taskData));
      renderTasks();
    };
  
    renderTasks();
  });
  
  


  
