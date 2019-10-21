
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
    }
  });
}
