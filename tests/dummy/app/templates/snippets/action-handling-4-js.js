import Ember from 'ember';
export default Ember.Controller.extend({
  cities: ['Barcelona', 'London', 'New York', 'Porto'],
  selectedCities: [],
  actions: {
    checkLength(text, select /*, event */) {
      if (select.searchText.length >= 3 && text.length < 3) {
        return '';
      } else {
        return text.length >= 3;
      }
    }
  }
});