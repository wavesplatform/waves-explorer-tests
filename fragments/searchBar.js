const { I } = inject();

module.exports = {
  root: {css: 'div.header.grid'},

  searchBox: {css: 'input.search-input'},
  clear: {css: 'div.clear'},

  loader: {css: 'div.search-box-loading div.search'},
  error: {css: 'div.search-box-invalid'},

  fillSearchBox(query) {
    within(this.root, () => {
      I.waitForVisible(this.searchBox);
      I.click(this.searchBox);
      I.fillField(this.searchBox, query);
    });
  },

  search(query) {
    this.fillSearchBox(query);
    I.pressKey('Enter');
    I.waitForDetached(this.loader, 10);
  }
}
