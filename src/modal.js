const modal = document.getElementById("staticBackdrop");
const modalTitle = document.getElementById("staticBackdropLabel");
const modalBody = document.getElementById("modalBody");
const modalButton = document.getElementById("modalButton");

const modalOpen = function () {
  modal.classList.add("show");
  modal.tabIndex = "-1";
  modal.style.display = "block";
  modal.ariaModal = "true";
  modal.role = "dialog";
};
