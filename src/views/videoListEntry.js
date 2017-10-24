var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    // this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  events: {
    'click button': 'handleClick'
  },

  handleClick: function() {
    this.model.select();
    this.render();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
