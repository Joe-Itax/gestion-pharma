const arrow = document.querySelectorAll(".ri-arrow-down-s-line");

for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", function(e) {
    const arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
  });
}

const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelectorAll(".sidebar-btn");
/*sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
})*/

sidebarBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  })
})