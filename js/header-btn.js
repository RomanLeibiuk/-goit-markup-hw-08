(() => {
  const mobileMenu = document.querySelector('[data-menu-button]');

  menuBtnRef .addEventListenter("click",()=>{
    mobileMenu.classList.toggle('is_open');
  });
})();