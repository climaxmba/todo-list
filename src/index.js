import pubSub from "./pubSub.js";
import { Project, Task, Note, CheckList } from "./projectsTasks.js";
import { tabs, createBtn, modal, pages, swithTab, invokeAction, renderData } from "./display.js";

const displayController = (function() {
  init();
  
  function init() {
    addEventsToStaticElements();
  }
  function addDataEvent() {
    document.getElementById('main').addEventListener('click', invokeDataAction);
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
    console.log(e.target);
  }

  pubSub.subscribe('dataChanged', renderData);
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
  }
  function addTaskToProject(index, task) {
    projects[index].addTask(task);
  }
  function addNote(note) {
    notes.push(note);
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
})();