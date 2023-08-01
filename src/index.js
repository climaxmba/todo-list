import pubSub from "./pubSub.js";
import { Project, Task, Note, CheckList } from "./projectsTasks.js";
import { tabs, createBtn, modal, pages, swithTab, invokeAction, renderData, openDialogue, closeModal } from "./display.js";

const displayController = (function() {
  init();
  
  function init() {
    addEventsToStaticElements();
  }
  function addEventsToStaticElements() {
    tabs.forEach((elem) => elem.addEventListener("click", swithTab));
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
            new Date(data.duedate),
            data.priority ? data.priority : "medium",
            parseInt(elem.getAttribute("data-project"))
          );
        } else if (action === "edit-project") {
          entry = {
            action,
            title: data.title,
            index: parseInt(form.getAttribute("data-project")),
          };
        }

        closeModal();
        pubSub.publish("formSubmitted", entry);
      }
    } else if (elem.getAttribute("data-action-type")) {
      const action = elem.getAttribute("data-action-type");
      if (action.includes("delete")) {
        if (action === "delete-task") {
          const pindex = parseInt(elem.parentElement.getAttribute("data-project"));
          const tindex = parseInt(elem.parentElement.getAttribute("data-task"));
          pubSub.publish("deleteEntity", { action, pindex, tindex });
        } else {
          const index = parseInt(elem.parentElement.getAttribute("data-task"));
          pubSub.publish("deleteEntity", { action, index });
        }
      } else if (action.includes("view")) {
        if (action === "view-task") {
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
          const index = parseInt(
            elem.parentElement.getAttribute("data-project")
          );
          const project = projectsHandler.getProject(index);
          openDialogue({
            action,
            index,
            title: project.title,
          });
        }
      }
    }
  }

  pubSub.subscribe("dataChanged", renderData);
})()

const projectsHandler = (function () {
  let projects = [],
    notes = [],
    checkLists = [];

  initDefaults(true);

  function initDefaults(reset) {
    if (reset) {
      projects = [];
      notes = [];
      checkLists = [];
    }
    addProject(
      new Project(Project.default.title, Project.default.task)
    );
    addNote(new Note(Note.default.title, Note.default.note));
    addCheckList(
      new CheckList(
        CheckList.default.listTxt
      )
    );
    pubSub.publish('dataChanged', { projects, notes, checkLists });
  }

  function addProject(project) {
    projects.push(project);
    pubSub.publish('dataChanged', { projects, notes, checkLists });
  }
  function addTaskToProject(index, task) {
    projects[index].addTask(task);
    pubSub.publish('dataChanged', { projects, notes, checkLists });
  }
  function addNote(note) {
    notes.push(note);
    pubSub.publish('dataChanged', { projects, notes, checkLists });
  }
  function addCheckList(checkList) {
    checkLists.push(checkList);
    pubSub.publish('dataChanged', { projects, notes, checkLists });
  }
  function removeProject(index) {
    projects.splice(index, 1);
    pubSub.publish('dataChanged', { projects, notes, checkLists });
  }
  function removeTaskFromProject(pindex, tindex) {
    projects[pindex].removeTask(tindex);
    pubSub.publish('dataChanged', { projects, notes, checkLists });
  }
  function removeNote(index) {
    notes.splice(index, 1);
    pubSub.publish('dataChanged', { projects, notes, checkLists });
  }
  function removeCheckList(index) {
    checkLists.splice(index, 1);
    pubSub.publish('dataChanged', { projects, notes, checkLists });
  }
  function getTask(pindex, tindex) {
    return projects[pindex].tasks[tindex];
  }
  function getProject(index) {
    return projects[index];
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
    }
    pubSub.publish('dataChanged', { projects, notes, checkLists });
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

  return { getTask, getProject };
})();