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
    if (elem.getAttribute('type') === "submit") {
      e.preventDefault();

      const form = elem.parentElement;
      const data = Object.fromEntries(new FormData(form));
      let isValid = Object.values(data).every(entry => entry);
 
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
        }

        closeModal();
        pubSub.publish("formSubmitted", entry);
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
  }
  function removeProject(index) {
    projects.splice(index, 1);
  }
  function removeTaskFromProject(pindex, tindex) {
    projects[pindex].removeTask(tindex);
  }
  function removeNote(index) {
    notes.splice(index, 1);
  }
  function removeCheckList(index) {
    checkLists.splice(index, 1);
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

  pubSub.subscribe("formSubmitted", addEntry);
})();