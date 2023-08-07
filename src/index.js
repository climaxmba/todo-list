import pubSub from "./modules/pubSub.js";
import { Project, Task, Note } from "./modules/projectsTasks.js";
import { tabs, menuIcon, createBtn, modal, pages, swithTab, invokeAction, renderData, openDialogue, openConfirmDialogue, closeModal } from "./modules/display.js";
import Storage from "./modules/storage.js";
import "./style.css";

(function() {
  _init();
  
  function _init() {
    addEventsToStaticElements();
  }

  function addEventsToStaticElements() {
    tabs.forEach((elem) => elem.addEventListener("click", swithTab));
    menuIcon.addEventListener("click", invokeActions);
    createBtn.addEventListener('click', invokeActions);
    modal.addEventListener('click', invokeActions);
    pages.forEach(page => {
      page.addEventListener('click', invokeActions);
    });
  }

  function invokeActions(e) {
    // Move up to <svg> if target element is <path>
    const elem =
      e.target.tagName.toLowerCase() === "path"
        ? e.target.parentElement
        : e.target;
    invokeAction(e, elem);
    invokeDataAction(e, elem);
  }
  function invokeDataAction(e, elem) {
    if (elem.getAttribute("type") === "submit") {
      e.preventDefault();

      const form = elem.parentElement;
      const data = Object.fromEntries(new FormData(form));
      let isValid = Object.values(data).every((entry) => entry);

      if (isValid) {
        const action = form.getAttribute("data-action-type");
        let entry;
        if (action === "new-project") {
          entry = new Project(data.title, []);
        } else if (action === "new-note") {
          entry = new Note(data.title, data.note);
        } else if (action === "new-task") {
          entry = new Task(
            data.title,
            data.description,
            new Date(data.dueDate),
            data.priority ? data.priority : "medium",
            parseInt(elem.getAttribute("data-project"))
          );
        } else if (action === "edit-project") {
          entry = {
            action,
            title: data.title,
            index: parseInt(form.getAttribute("data-project")),
          };
        } else if (action === "edit-task") {
          entry = {
            action,
            pindex: parseInt(form.getAttribute("data-project")),
            tindex: parseInt(form.getAttribute("data-task")),
            task: new Task(
              data.title,
              data.description,
              new Date(data.dueDate),
              data.priority ? data.priority : "medium",
              parseInt(form.getAttribute("data-project")),
            ),
          };
        } else if (action === "edit-note") {
          entry = {
            action,
            index: parseInt(form.getAttribute("data-note")),
            note: new Note(data.title, data.note),
          };
        }

        closeModal();
        pubSub.publish("formSubmitted", entry);
      }
    } else if (elem.getAttribute("data-action-type")) {
      // Data read manipulation actions
      const action = elem.getAttribute("data-action-type");

      if (action.includes("delete") && elem.hasAttribute("data-confirm-delete")) {
        // Delete action confirmed
        if (action === "delete-task") {
          const pindex = parseInt(elem.parentElement.getAttribute("data-project"));
          const tindex = parseInt(elem.parentElement.getAttribute("data-task"));
          pubSub.publish("deleteEntity", { action, pindex, tindex });
          closeModal();
        } else {
          const index =
            parseInt(elem.parentElement.getAttribute("data-project")) ||
            parseInt(elem.parentElement.getAttribute("data-note"));
          pubSub.publish("deleteEntity", { action, index });
          closeModal();
        }
      } else if (action.includes("delete")) {
        // Open confirm dialogue for delete icons
        if (action === "delete-task") {
          const pindex = parseInt(elem.parentElement.getAttribute("data-project"));
          const tindex = parseInt(elem.parentElement.getAttribute("data-task"));
          openConfirmDialogue({ action, pindex, tindex });
        } else {
          const index =
            parseInt(elem.parentElement.getAttribute("data-project")) ||
            parseInt(elem.parentElement.getAttribute("data-note"));
            openConfirmDialogue({ action, index });
        }
      } else if (action.includes("view")) {
        if (action === "view-task") {
          // Open view task modal
          const task = projectsHandler.getTask(
            parseInt(elem.parentElement.getAttribute("data-project")),
            parseInt(elem.parentElement.getAttribute("data-task"))
          );
          openDialogue({
            action,
            title: task.title,
            description: task.description,
            dueDate: task.dueDate,
            priority: task.priority,
          });
        }
      } else if (action.includes("edit")) {
        if (action === "edit-project") {
          // Open edit project modal
          const index = parseInt(
            elem.parentElement.getAttribute("data-project")
          );
          const project = projectsHandler.getProject(index);
          openDialogue({
            action,
            index,
            title: project.title,
          });
        } else if (action === "edit-task") {
          // Open edit task modal
          const pindex = parseInt(
              elem.parentElement.getAttribute("data-project")
            ),
            tindex = parseInt(elem.parentElement.getAttribute("data-task")),
            task = projectsHandler.getTask(pindex, tindex);
          openDialogue({
            action,
            pindex,
            tindex,
            title: task.title,
            description: task.description,
            dueDate: task.dueDate,
            priority: task.priority,
          });
        } else if (action === "edit-note") {
          const index = parseInt(elem.parentElement.getAttribute("data-note"));
          openDialogue({
            action,
            index,
            title: projectsHandler.getNote(index).title,
            note: projectsHandler.getNote(index).note,
          })
        }
      } else if (action === "reset-data") {
        pubSub.publish("resetDataActionConfirmed");
      }
    }
  }

  pubSub.subscribe("dataChanged", renderData);
})()

const projectsHandler = (function () {
  let projects = [],
    notes = [];

  _init();

  function _init() {
    projects = Storage.getData().projects;
    notes = Storage.getData().notes;

    pubSub.publish('dataChanged', { projects, notes });
  }

  function addProject(project) {
    projects.push(project);
    pubSub.publish('dataChanged', { projects, notes });
  }
  function addTaskToProject(index, task) {
    projects[index].addTask(task);
    pubSub.publish('dataChanged', { projects, notes });
  }
  function addNote(note) {
    notes.push(note);
    pubSub.publish('dataChanged', { projects, notes });
  }
  function removeProject(index) {
    projects.splice(index, 1);
    pubSub.publish('dataChanged', { projects, notes });
  }
  function removeTaskFromProject(pindex, tindex) {
    projects[pindex].removeTask(tindex);
    pubSub.publish('dataChanged', { projects, notes });
  }
  function removeNote(index) {
    notes.splice(index, 1);
    pubSub.publish('dataChanged', { projects, notes });
  }
  function getTask(pindex, tindex) {
    return projects[pindex].tasks[tindex];
  }
  function getProject(index) {
    return projects[index];
  }
  function getNote(index) {
    return notes[index];
  }
  function addEntry(entry) {
    if (entry instanceof Project) {
      addProject(entry);
    } else if (entry instanceof Task) {
      addTaskToProject(entry.pindex, entry);
    } else if (entry instanceof Note) {
      addNote(entry);
    }
  }
  function updateEntry(data) {
    if (data.action === "edit-project") {
      projects[data.index].title = data.title;
    } else if (data.action === "edit-task") {
      projects[data.pindex].tasks[data.tindex] = data.task;
    } else if (data.action === "edit-note") {
      notes[data.index] = data.note;
    }
    pubSub.publish('dataChanged', { projects, notes });
  }
  function deleteObj(entity) {
    if (entity.action === "delete-task") {
      removeTaskFromProject(entity.pindex, entity.tindex);
    } else if (entity.action === "delete-project") {
      removeProject(entity.index);
    } else if (entity.action === "delete-note") {
      removeNote(entity.index);
    }
  }

  pubSub.subscribe("formSubmitted", addEntry);
  pubSub.subscribe("formSubmitted", updateEntry);
  pubSub.subscribe("deleteEntity", deleteObj);

  return { getTask, getProject, getNote };
})();