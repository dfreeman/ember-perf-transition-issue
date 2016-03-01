import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    query: {
      refreshModel: true
    }
  },

  model: function() {
    return Promise.resolve();
  }
});
