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

function openDialogue(dialogue){
    return
}

export { tabs, swithTab };
