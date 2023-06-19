import Observable from '../framework/observable.js';

export default class DestinationsModel extends Observable {
  #destinations = [];
  #destinationsApiService = null;
  #isSuccessfulLoading = false;

  constructor(destinationsApiService) {
    super();
    this.#destinationsApiService = destinationsApiService;
  }

  get destinations() {
    return this.#destinations;
  }

  get isSuccessfulLoading() {
    return this.#isSuccessfulLoading;
  }

  init = async () => {
    try {
      this.#destinations = await this.#destinationsApiService.destinations;
      this.#isSuccessfulLoading = true;
    } catch(err) {
      this.#destinations = [];
      this.#isSuccessfulLoading = false;
    }
  };
}

