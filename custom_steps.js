
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    openExplorer: function(query) {
      if(query) {
        this.amOnPage(query);
      } else {
        this.amOnPage('/');
      }
      this.waitForInvisible({css: 'img[alt="Loading..."]'}, 10);
      this.waitForInvisible({css: 'div.loading'}, 10);
    },

    formatDateToExplorerFormat: function(date) {
      var format = require('date-fns').format;
      return format(date, 'dd.MM.yyyy, HH:mm:ss');
    }
  });
}
