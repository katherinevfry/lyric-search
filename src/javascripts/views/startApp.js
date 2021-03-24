import domBuilder from '../components/domBuilder';
import printForm from '../components/printForm';
import domEvents from '../helpers/events/domEvents';

const startApp = () => {
  domBuilder();
  printForm();
  domEvents();
};

export default startApp;
