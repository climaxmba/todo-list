const homePage = document.getElementById("home-page"),
  tabs = document.querySelectorAll(".tabs"),
  createBtn = document.getElementById("newbtn"),
  projectsPage = document.getElementById("projects-page"),
  notesPage = document.getElementById("notes-page"),
  checkListPage = document.getElementById("checklist-page"),
  pages = [homePage, projectsPage, notesPage, checkListPage],
  modal = document.getElementById('modal'),
  modalContent = document.getElementById('modal-content');

const html = {
  modalForms: {
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
  },
};

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
  switch (e.target.getAttribute("data-target-value")) {
    case "home":
      homePage.classList.add("active-page");
      createBtn.textContent = "New Project";
      createBtn.setAttribute("data-dialogue", "project");
      return;
    case "projects":
      projectsPage.classList.add("active-page");
      createBtn.textContent = "New Project";
      createBtn.setAttribute("data-dialogue", "project");
      return;
    case "notes":
      notesPage.classList.add("active-page");
      createBtn.textContent = "New Note";
      createBtn.setAttribute("data-dialogue", "note");
      return;
    case "checklists":
      checkListPage.classList.add("active-page");
      createBtn.textContent = "New Item";
      createBtn.setAttribute("data-dialogue", "item");
      return;
  }
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
    } else if (elem.id === 'close-modal') {
      closeModal();
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
    if (dialogue.action.includes('new-')) {
      modalContent.innerHTML = html.modalForms[dialogue.action];
    }
  }
  openModal();
}
function openModal() {
  modal.classList.add("active");
}
function closeModal() {
  modal.classList.remove("active");
}

export { tabs, createBtn, modal, swithTab, invokeAction };
