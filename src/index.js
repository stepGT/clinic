import './assets/styles/style.scss'
import './bootstrap/bootstrap'

$(document).ready(function ($) {
  /**
   * Burger menu self-invoking functions
   */
  (function (selector) {
    let menu = $(selector);
    let body = $('body');
    let close = menu.find('.burger-menu__nav_back_close');
    //
    menu.find('.burger-menu__button').on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    close.on('click', () => toggleMenu());
    /**
     *
     */
    const toggleMenu = () => {
      menu.toggleClass('burger-menu_active');
      menu.hasClass('burger-menu_active') ? body.css('overflow', 'hidden') : body.css('overflow', 'visible');
    }
  }('.burger-menu'));
});