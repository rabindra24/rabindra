function toggle(e) {
  let list = document.getElementById("toggle");
  let nav = document.getElementById("nav");

  console.log(list);
  e.classList[1] === "bi-list"
    ? (list.classList.remove("bi-list"), list.classList.add("bi-x-circle"),nav.classList.add("top-14"),nav.classList.remove("top-[-900px]"))
    : (list.classList.remove("bi-x-circle"),nav.classList.remove("top-14"), list.classList.add("bi-list"),nav.classList.add("top-[-900px]"));
}

