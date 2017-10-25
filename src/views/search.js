var SearchView = Backbone.View.extend({

  events: {
    "click button": "inputSearch",
    "keyup": "keyUpFunc"
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  keyUpFunc: function(e) {
    if (e.keyCode === 13) {
      this.inputSearch();
    }

    setTimeout(this.inputSearch.bind(this), 1000);
  },

  inputSearch: function() {
    var input = this.$('.form-control').val();
    this.collection.search(input);
  },

  template: templateURL('src/templates/search.html')

});
