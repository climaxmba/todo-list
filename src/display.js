import {isThisWeek, isToday} from "date-fns";

const homePage = document.getElementById("home-page"),
  tabs = document.querySelectorAll(".tabs"),
  createBtn = document.getElementById("newbtn"),
  projectsPage = document.getElementById("projects-page"),
  notesPage = document.getElementById("notes-page"),
  checkListPage = document.getElementById("checklist-page"),
  pages = [homePage, projectsPage, notesPage, checkListPage],
  modal = document.getElementById('modal'),
  modalTitle = document.getElementById("modal-title"),
  modalContent = document.getElementById('modal-content');

const modalForms = {
  "new-project": `<form data-action-type="new-project">
      <div class="field">
          <label for="project-title">Title</label>
          <input id="project-title" name="title" type="text" maxlength="40" required>
      </div>
      <button type="submit">Save</button>
    </form>`,
  "new-note": `<form data-action-type="new-note">
    <div class="field">
        <label for="note-title">Title</label>
        <input id="note-title" name="title" type="text" maxlength="40" required>
    </div>
    <div class="field">
        <label for="note-content">Note</label>
        <textarea name="content" id="note-content"></textarea>
    </div>
    <button type="submit">Save</button>
    </form>`,
  "new-task": `<form data-action-type="new-task">
    <div class="field">
        <label for="task-title">Title</label>
        <input id="task-title" name="title" type="text" maxlength="35" required>
    </div>
    <div class="field">
        <label for="task-description">Description</label>
        <textarea name="description" id="task-description"></textarea>
    </div>
    <div class="field">
        <label for="task-duedate">Due date</label>
        <input id="task-duedate" name="duedate" type="date" required>
    </div>
    <div class="field">
        <label>Priority</label>
        <div id="radio-btns-cntr">
            <span>
                <input id="task-priority-h" name="priority" type="radio" value="high" required>
                <label for="task-priority-h">High</label>
            </span>
            <span>
                <input id="task-priority-m" name="priority" type="radio" value="medium" required>
                <label for="task-priority-m">Medium</label>
            </span>
            <span>
                <input id="task-priority-l" name="priority" type="radio" value="low" required>
                <label for="task-priority-l">Low</label>
            </span>
        </div>
    </div>
    <button type="submit">Save</button>
</form>`,
};

function addEventsToStaticElements() {
  tabs.forEach((elem) => elem.addEventListener("click", swithTab));
  createBtn.addEventListener('click', invokeAction);
  modal.addEventListener('click', invokeAction);
  pages.forEach(page => {
    page.addEventListener('click', invokeAction);
  });
}

function swithTab(e) {
  // Do nothing if user clicks an active tab
  if (e.target.classList.contains("active")) return;

  // Remove the class, 'active-page' and 'active'
  pages.forEach((page) => {
    if (page.classList.contains("active-page")) {
      page.classList.remove("active-page");
    }
  });
  tabs.forEach(tab => {
    if (tab.classList.contains('active')) {
      tab.classList.remove('active');
    }
  })

  // Add the class, 'active-page' & 'active'and change createBtn text
  e.target.classList.add('active');
  const target = e.target.getAttribute("data-target-value");
  switch (target) {
    case "home":
      homePage.classList.add("active-page");
      createBtn.textContent = "New Project";
      createBtn.setAttribute("data-dialogue", "project");
      break;
    case "projects":
      projectsPage.classList.add("active-page");
      createBtn.textContent = "New Project";
      createBtn.setAttribute("data-dialogue", "project");
      break;
    case "notes":
      notesPage.classList.add("active-page");
      createBtn.textContent = "New Note";
      createBtn.setAttribute("data-dialogue", "note");
      break;
    case "checklists":
      checkListPage.classList.add("active-page");
      createBtn.textContent = "New Item";
      createBtn.setAttribute("data-dialogue", "item");
      break;
  }
  
  document.title = 'TodoList - ' + target[0].toUpperCase() + target.slice(1);
}

function invokeAction(e) {
  // Move up to <svg> if target element is <path>
  const elem =
    e.target.tagName.toLowerCase() === "path"
      ? e.target.parentElement
      : e.target;

  if (e.target !== e.currentTarget) {
    // UI icons
    if (elem.classList.contains("actions")) {
      // <svg.actions>
      const action = elem.getAttribute("data-action-type");
      if (action === "view-task" || action === "edit-task") {
        const pindex = parseInt(
          elem.parentElement.getAttribute("data-project")
        );
        const tindex = parseInt(elem.parentElement.getAttribute("data-task"));
        openDialogue({ action, pindex, tindex });
      } else if (action === "view-project" || action === "edit-project") {
        const index = parseInt(elem.parentElement.getAttribute("data-project"));
        openDialogue({ action, index });
      } else if (action === "view-note" || action === "edit-note") {
        const index = parseInt(elem.parentElement.getAttribute("data-note"));
        openDialogue({ action, index });
      } else if (action.includes("delete")) {
        // delete action
      }
    }  else if (elem.id === "close-modal") {
      closeModal();
    } else if (elem.getAttribute("data-action-type") === "new-task") {
      const action = elem.getAttribute("data-action-type");
      const pindex = parseInt(elem.getAttribute("data-project"));
      openDialogue({ action, pindex });
    }
  } else if (elem === createBtn) {
    const action = `new-${createBtn.getAttribute('data-dialogue')}`;
    openDialogue({ action });
  } else if (elem === modal) {
    closeModal();
  }

  e.stopPropagation();
}

function openDialogue(dialogue) {
  if (dialogue.action) {
    modalContent.innerHTML = modalForms[dialogue.action] || "";
  }
  modalTitle.textContent = dialogue.action.split("-").join(" ");
  openModal();
}
function openModal() {
  modal.classList.add("active");
}
function closeModal() {
  modalContent.innerHTML = "";
  modal.classList.remove("active");
}

function renderData(data) {
  const projects = data.projects,
    notes = data.notes,
    checkLists = data.checkLists,
    projectsContainer = projectsPage.querySelector(".projects-contr"),
    notesContainer = notesPage.querySelector("#notes-contr"),
    checkListContainer = checkListPage.querySelector("#checklist-page-contr"),
    todaysTaskContr = homePage.querySelector('.projects-contr'),
    thisWeeksTasksContr = document.getElementById("this-week-contr").querySelector(".projects-contr");
  
  projectsContainer.innerHTML = "";
  notesContainer.innerHTML = "";
  checkListContainer.innerHTML = "";
  todaysTaskContr.innerHTML = "";
  thisWeeksTasksContr.innerHTML = "";
  
  for (let i = 0; i < projects.length; i++) {
  
    // Today's tasks
    if (projects[i].getTodaysTasks() !== []) {
      const elem = document.createElement("div"),
        tasks = projects[i].sortedTasks;
      elem.innerHTML = `<div class="project-name-contr" data-project="${i}">
                            <span class="project-name">${projects[i].title}</span><svg data-action-type="delete-project" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete</title><path d="M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9Z" /></svg>
                        </div>
                        <ul></ul>`;
      for (let j = 0; j < tasks.length; j++) {
        const listElem = document.createElement('li');
        listElem.innerHTML = `<span class="flex-list-item">
                                <span class="flex-list-elem"><span class="task-name">${tasks[j].title}</span><span class="task-lbl">${tasks[j].priority}</span></span>
                                <span class="flex-list-elem" data-project="${j}" data-task="${j}">
                                  <svg data-action-type="view-task" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>View info</title><path d="M13 9H11V7H13V9M13 17H11V11H13V17M5 3H19C20.1 3 21 3.89 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.89 3.89 3 5 3M19 19V5H5V19H19Z" /></svg>
                                  <svg data-action-type="edit-task" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Edit</title><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg>
                                  <svg data-action-type="delete-task" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete</title><path d="M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9Z" /></svg>
                                </span>
                              </span>`;
        elem.querySelector('ul').appendChild(listElem);
      }
      todaysTaskContr.appendChild(elem);
    }

    // This week's tasks
    if (projects[i].getThisWeeksTasks() !== []) {
      const elem = document.createElement("li");
      elem.className = "flex-list-item";
      elem.setAttribute('data-project', i.toString())        
      elem.innerHTML = `<span class="project-name">${projects[i].title}</span>
        <svg data-action-type="delete-project" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete</title><path d="M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9Z" /></svg>`;
      thisWeeksTasksContr.appendChild(elem);
    }

    // Projects page
    const projectNode = document.createElement("div");
    const tasks = projects[i].sortedTasks;
    projectNode.innerHTML = `<div class="project-name-contr">
        <span class="project-name">${projects[i].title}</span>
        <span class="actns-contr" data-project="${i}">
            <svg data-action-type="edit-project" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>Edit</title>
              <path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" />
            </svg>
            <svg data-action-type="delete-project" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>Delete</title>
              <path d="M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9Z" />
            </svg>
        </span>
    </div>
    <ul></ul>
    <button data-action-type="new-task" data-project="${i}">Add Task</button>`;

    for (let j = 0; j < tasks.length; j++) {
      const taskNode = document.createElement("li");
      taskNode.innerHTML = `<li class="flex-list-item">
        <span class="flex-list-elem"><span class="task-name">${tasks[j].title}</span><span class="task-lbl">medium</span></span>
        <span data-project="${i}" data-task="${j}" class="flex-list-elem">
            <svg data-action-type="view-task" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>View info</title>
              <path d="M13 9H11V7H13V9M13 17H11V11H13V17M5 3H19C20.1 3 21 3.89 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.89 3.89 3 5 3M19 19V5H5V19H19Z" />
            </svg>
            <svg data-action-type="edit-task" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>Edit</title>
              <path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" />
            </svg>
            <svg data-action-type="delete-task" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>Delete</title>
              <path d="M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9Z" />
            </svg>
        </span>
      </li>`;
      projectNode.querySelector('ul').appendChild(taskNode);
    }

    projectsContainer.appendChild(projectNode);
  }
  for (let i = 0; i < notes.length; i++) {
    const node = document.createElement("div");

    node.innerHTML = `<div class="note-title-contr">
                        <span class="note-title">${notes[i].title}</span>
                        <span class="actns-contr" data-note="${i}">
                            <svg data-action-type="edit-note" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>Edit</title>
                                <path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" />
                            </svg>
                            <svg data-action-type="delete-note" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>Delete</title>
                                <path d="M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9Z" />
                            </svg>
                        </span>
                    </div>
                    <div class="notecontent">${notes[i].note}</div>`;

    notesContainer.appendChild(node);
  }
  for (let i = 0; i < checkLists.length; i++) {
    const node = document.createElement("li");
    node.setAttribute("data-item", i.toString());

    node.innerHTML = `<span>
        <input data-action-type="check-item" type="checkbox" id="list${i}" class="actions">
        <label for="list${i}">${checkLists[i].listTxt}</label>
    </span>
    <svg data-action-type="delete-item" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>Delete</title>
        <path d="M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9Z" />
    </svg>`;

    checkListContainer.appendChild(node);
  }
}

export { addEventsToStaticElements, renderData };
