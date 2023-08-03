import { isThisWeek, isToday } from "date-fns";

class Project {
  constructor(title, tasks) {
    this.title = title;
    this.tasks = tasks;
  }
  get sortedTasks() {
    return this.tasks.sort((a, b) => a.dueDate - b.dueDate);
  }
  addTask(task) {
    this.tasks.push(task);
  }
  removeTask(index) {
    this.tasks.splice(index, 1);
  }
  getTodaysTasks() {
    const todaysTask = [];
    this.tasks.forEach(task => {
      if (isToday(task.dueDate)) todaysTask.push(task);
    });
    return todaysTask;
  }
  getThisWeeksTasks() {
    const thisWeeksTask = [];
    this.tasks.forEach(task => {
      if (isThisWeek(task.dueDate)) {
        thisWeeksTask.push(task);
      }
    });
    return thisWeeksTask;
  }
}

class Task {
  constructor(title, description, dueDate, priority, pindex) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.pindex = (pindex !== undefined)? pindex : 0;
  }
}

class Note {
  constructor(title, note) {
    this.title = title;
    this.note = note;
  }
}

class CheckList {
  constructor(listTxt) {
    this.listTxt = listTxt;
  }
}

export { Project, Task, Note, CheckList };