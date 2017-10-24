var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.children().html(
      this.collection.map(function(video) {
        return this.renderVideo(video);
      }.bind(this))
    );

    return this;
  },

  renderVideo: function(video) {
    return new VideoListEntryView({
      model: video
    }).render().el;
  },

  template: templateURL('src/templates/videoList.html')

});
