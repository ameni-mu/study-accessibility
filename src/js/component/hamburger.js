
const $menuBtn = document.querySelector('.js-hamburger-btn');
const $nav = document.querySelector('.js-hamburger-nav');
const $closeBtns = document.querySelectorAll('.js-hamburger-close-btn');
const $body = document.body;

/////////////////////////////////////////
// Hamburger
/////////////////////////////////////////
export default class Hamburger {
  constructor () {

    this.onClickHamburgerBtn();
    this.onClickBloseBtn();
    this.onEscape();
  }

  //-----------------------------
  onClickHamburgerBtn() {

    $menuBtn.addEventListener('click', (e) => {
      this.openNav();
    });
  }

  //-----------------------------
  openNav() {

    $menuBtn.setAttribute('aria-expanded', 'true');
    $nav.classList.add('is-active');
    $body.classList.add('is-modal');

    const $closeBtn = $nav.querySelectorAll('.js-hamburger-close-btn');
    $closeBtn[0].focus();
  }

  //-----------------------------
  onClickBloseBtn() {

    $closeBtns.forEach($btn => {
      $btn.addEventListener('click', () => {
        this.closeNav();
      });
    });
  }

  //-----------------------------
  closeNav() {
    $menuBtn.setAttribute('aria-expanded', 'false');
    $nav.classList.remove('is-active');
    $body.classList.remove('is-modal');
  }

  //-----------------------------
  onEscape() {

    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;

      const iOpen = $menuBtn.getAttribute('aria-expanded') === 'true';
      if (!isOpen) return;

      this.closeNav();
      $menuBtn.focus();
    });
  }

}
const hamburger = new Hamburger();