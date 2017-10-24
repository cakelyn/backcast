var AppView = Backbone.View.extend({

  el: '#app',
  collection: window.exampleVideoData,

  initialize: function() {
    this.videos = new Videos(this.collection);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());

    new SearchView({
      el: this.$('.search'),
      collection: this.videos
    }).render();

    new VideoPlayerView({
      el: this.$('.player'),
      collection: this.videos
    }).render();

    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
