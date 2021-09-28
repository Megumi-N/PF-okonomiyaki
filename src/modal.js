const modal = document.getElementById("staticBackdrop");
const modalTitle = document.getElementById("staticBackdropLabel");
const modalBody = document.getElementById("modalBody");
const modalButton = document.getElementById("modalButton");

const blockModal = document.getElementById("pcBlockModal");
const blockModalTitle = document.getElementById("pcBlockModalTitle");
const blockModalBody = document.getElementById("pcBlockModalBody");

const modalOpen = () => {
  modal.classList.add("show");
  modal.style.display = "block";
  modal.ariaModal = "true";
  modal.role = "dialog";
};

const pcBlockModal = () => {
  blockModal.classList.add("show");
  blockModal.style.display = "block";
  blockModal.ariaModal = "true";
  blockModal.role = "dialog";
};
