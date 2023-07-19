const homePage = document.getElementById("home-page"),
  tabs = document.querySelectorAll(".tabs"),
  createBtn = document.getElementById("newbtn"),
  projectsPage = document.getElementById("projects-page"),
  notesPage = document.getElementById("notes-page"),
  checkListPage = document.getElementById("checklist-page"),
  pages = [homePage, projectsPage, notesPage, checkListPage];

function swithTab(e) {
  // Do nothing if user clicks an active tab
  if (e.target.classList.contains("active")) return;

  // Remove the class, 'active'
  pages.forEach((page) => {
    if (page.classList.contains("active")) {
      page.classList.remove("active");
    }
  });

  // Add the class, 'active' & change createBtn text
  switch (e.target.getAttribute("data-target-value")) {
    case "home":
      homePage.classList.add("active");
      createBtn.textContent = "New Project";
      return;
    case "projects":
      projectsPage.classList.add("active");
      createBtn.textContent = "New Project";
      return;
    case "notes":
      notesPage.classList.add("active");
      createBtn.textContent = "New Note";
      return;
    case "checklists":
      checkListPage.classList.add("active");
      createBtn.textContent = "New Item";
      return;
  }
}

function invokeAction(e) {
  if (e.target !== e.currentTarget) {
    // Move up to <svg> if target element is <path>
    const elem =
      e.target.tagName.toLowerCase() === "path"
        ? e.target.parentElement
        : e.target;

    // UI icons
    if (elem.classList.contains("actions")) {
      // <svg.actions>
      const action = elem.getAttribute("data-action-type");
      if (action.includes("-task")) {
        const pindex = parseInt(
          elem.parentElement.getAttribute("data-project")
        );
        const tindex = parseInt(elem.parentElement.getAttribute("data-task"));
        openDialogue({ action, pindex, tindex });
      } else if (action.includes("-project")) {
        const index = parseInt(elem.parentElement.getAttribute("data-project"));
        openDialogue({ action, index });
      } else if (action.includes("-note")) {
        const index = parseInt(elem.parentElement.getAttribute("data-note"));
        openDialogue({ action, index });
      }
    } else if (elem.getAttribute("data-action-type") === "view-project") {
      // 'This week' in homepage
      const index = elem.parentElement.getAttribute("data-project");
      const action = "view-project";
      openDialogue({ action, index });
    }
  }

  e.stopPropagation();
}

function openDialogue(dialogue){
  // Open dialogue
    return;
}

export { tabs, swithTab, invokeAction };
