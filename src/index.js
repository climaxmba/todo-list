import pubSub from "./pubSub.js";
import { Project, Task, Note, CheckList } from "./projectsTasks.js";
import { tabs, swithTab } from "./display.js";

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

const displayController = (function() {
  function addEventsToStaticElements() {
    tabs.forEach((elem) => elem.addEventListener("click", swithTab));
  }
})()