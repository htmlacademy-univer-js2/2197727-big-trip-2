import FiltersView from './view/filters-view.js';
import TripEventsPresenter from './presenter/trip-events-presenter.js';
import SiteMenuView from './view/site-menu-view.js';
import { render } from './render.js';

const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');
const tripPresenterElement = new TripEventsPresenter();

render(new FiltersView(), siteHeaderElement.querySelector('.trip-controls__filters'));
render(new SiteMenuView(), siteHeaderElement.querySelector('.trip-controls__navigation'));

tripPresenterElement.init(siteMainElement.querySelector('.trip-events'));
