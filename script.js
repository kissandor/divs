let btns = document.querySelectorAll(".btn");

for (let btn of btns) {
  btn.addEventListener("click", () => {
    let btnType = btn.innerHTML;
    if (btnType.trim() == "Másol") {
      copyText(btn);
    } else {
      deleteText(btn);
    }
  });
}

let copyText = (btn) => {
  let txt = btn.parentElement.childNodes[5].value;
  btn.parentElement.childNodes[9].value = txt;
};

let deleteText = (btn) => {
  btn.parentElement.childNodes[5].value = "";
  btn.parentElement.childNodes[9].value = "";
};
