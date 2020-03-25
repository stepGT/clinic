import './assets/styles/style.scss'
import './bootstrap/bootstrap'

$(document).ready(function ($) {
  /**
   * Burger menu self-invoking functions
   */
  (function (selector) {
    let menu = $(selector);
    //
    menu.find('.burger-menu__button').on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    menu.find('.burger-menu__nav_back_close').on('click', () => toggleMenu());
    const toggleMenu = () => menu.toggleClass('burger-menu_active');
  }('.burger-menu'));
});