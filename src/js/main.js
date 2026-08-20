import Tabs from './component/tabs';
import Hamburger from './component/hamburger';

/////////////////////////////////////////
// Main
/////////////////////////////////////////
export default class Main {
  constructor () {

    const tabs = new Tabs();
    const hamburger = new Hamburger();
  }

}
const main = new Main();