
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
      return this.formatDateToFormat(date, 'dd.MM.yyyy, HH:mm:ss');
    },

    formatDateToFormat: function(date, formatSting) {
      var format = require('date-fns').format;
      return format(date, formatSting);
    }
  });
}