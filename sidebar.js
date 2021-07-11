function openSidebar(event) {
    const sidebar = document.querySelector(".nav__links");
    sidebar.classList.add("open");
    event.stopPropagation();
  }

  function closeSidebar() {
    const sidebar = document.querySelector(".nav__links");
    sidebar.classList.remove("open");
  }