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

// modalの中にツイート機能を入れるメソッド
const twitterText = () => {
  const twitter = document.createElement("a");
  twitter.href = `https://twitter.com/intent/tweet?&text=お好み焼きを返す技術力が今、試される...%0aスマホから遊んでね。%0a%23お好み焼き%0a%23くそアプリ%0a%23お好み焼きをひっくり返すだけのアプリ%0a&url=https://zen-sinoussi-c18c33.netlify.app/`;
  twitter.id = "twitter";
  twitter.setAttribute("target", "_blank");
  twitter.setAttribute("rel", "noopener noreferrer");
  twitter.innerText = "ツイートする";
  modalBody.appendChild(twitter);
};

// モーダルの中身を編集するメソッド
const modalModify = () => {
  modalTitle.innerText = titleText;
  modalBody.innerHTML = bodyText;
  modalButton.innerText = "再挑戦";
  modalButton.setAttribute("onclick", "window.location.reload();");
  twitterText();
};

const pcBlockModal = () => {
  blockModal.classList.add("show");
  blockModal.style.display = "block";
  blockModal.ariaModal = "true";
  blockModal.role = "dialog";
};
