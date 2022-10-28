function toggleDropDown(elementID) {
  document.getElementById(elementID).classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".buttons_containers_calendar")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
