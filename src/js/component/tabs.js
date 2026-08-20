
/////////////////////////////////////////
// Tabs
/////////////////////////////////////////
export default class Tabs {
  constructor () {

    console.log('tabs');

    this.initTab();
  }

  //-----------------------------
  initTab() {

    const $tabs = document.querySelectorAll('.js-tab');
    $tabs.forEach(($tab, index) => {

      $tab.addEventListener('click', (e) => {
        this.activateTab($tab);
      });

      //キーボード操作でタブを切り替え可能にする
      this.setKeyboardAction($tabs, $tabs[index]);
    });

  }

  //-----------------------------
  activateTab($tab) {
    const $parentTabList = $tab.closest('.tabs__tablist');
    const ID = $tab.getAttribute('aria-controls');
    const $targetPanel = document.getElementById(`${ID}`);
    const $activeTab = $parentTabList.querySelector('[aria-selected="true"]');
    const $tabs = $parentTabList.querySelectorAll('.js-tab');
    $activeTab.setAttribute('aria-selected', 'false');
    $tab.setAttribute('aria-selected', 'true');
    $tabs.forEach($item => {
      $item.setAttribute('tabindex', '-1');
    });
    $tab.setAttribute('tabindex', '0');
    $tab.focus();

    //タブを切り替える
    this.activatePanel($targetPanel);
  }

  //-----------------------------
  activatePanel($targetPanel) {

    const $parent = $targetPanel.closest('.tabs__panel-container');
    const $panels = $parent.querySelectorAll('.tabs__panel');
    $panels.forEach($panel => {
      const isAriaHidden = $panel.getAttribute('aria-hidden');
      if (isAriaHidden == 'false') {
        $panel.setAttribute('aria-hidden', 'true');
      };
      if ($panel.hidden == false) {
        $panel.hidden = true;
      }
    });
    $targetPanel.setAttribute('aria-hidden', 'false');
    $targetPanel.hidden = false;
  }
  //-----------------------------
  setKeyboardAction($tabs, $tab) {

    $tab.addEventListener('keydown', (e) => {
      let index = [...$tab.parentElement.children].indexOf($tab);
      let nextIndex;

      if (e.key === 'ArrowRight') {
        nextIndex = index + 1;
      } else if (e.key === 'ArrowLeft') {
        nextIndex = index - 1;
      } else if (e.key === 'Home') {
        nextIndex = 0;
      } else if (e.key === 'End') {
        nextIndex = $tabs.length - 1;
      } else {
        return;
      }

      e.preventDefault();

      if (nextIndex >= $tabs.length) {
        nextIndex = 0;
      }
      if (nextIndex < 0) {
        nextIndex = $tabs.length - 1;
      }

      this.activateTab($tabs[nextIndex]);

    });
  }

}
const tabs = new Tabs();