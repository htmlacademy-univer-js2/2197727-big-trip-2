import Observable from '../framework/observable.js';

export default class OffersModel extends Observable{
  #offers = [];
  #offersApiService = null;
  #isSuccessfulLoading = false;

  constructor(offersApiService) {
    super();
    this.#offersApiService = offersApiService;
  }
  
  get offers() {
    return this.#offers;
  }

  get isSuccessfulLoading() {
    return this.#isSuccessfulLoading;
  }

  init = async () => {
    try {
      this.#offers = await this.#offersApiService.offers;
      this.#isSuccessfulLoading = true;
    } catch(err) {
      this.#offers = [];
      this.#isSuccessfulLoading = false;
    }
  };
}
