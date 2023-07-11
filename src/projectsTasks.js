class Project {
  constructor(title, tasks) {
    this.title = title;
    this.tasks = tasks;
  }
  static get default() {
    return {
      title: "tutorial",
      task: [
        new Task("tutorial", "Try out this application", new Date(), "medium"),
      ],
    };
  }
  get tasks() {
    return tasks;
  }
  addTask(task) {
    this.tasks.push(task);
  }
  removeTask(index) {
    this.tasks.splice(index, 1);
  }
}

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
  get info() {
    return `${this.title}:\n${this.description}\n${this.priority}`;
  }
}

class Note {
  constructor(title, note) {
    this.title = title;
    this.note = note;
  }
  static get default() {
    return { title: "How to use this TodoList", note: "" };
  }
}

class CheckList {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
  static get default() {
    return { title: "Read", description: "Read 'How to use this TodoList'" };
  }
}

export { Project, Task, Note, CheckList };