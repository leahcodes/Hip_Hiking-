import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('trail');
  },
  actions: {
    save(params) {
      var newTrail = this.store.createRecord('trail', params);
      newTrail.save();
      this.transitionTo('index');
    }
  }
});
