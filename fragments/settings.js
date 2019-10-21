const { I } = inject();

module.exports = {

  root: {css: 'div[role="dialog"]'},

  title: {css: 'form > div.header'},
  closeIcon: {css: 'form > div.header > div.close-btn'},

  network: {css: 'form div.current-network'},
  nodeAddress: {css: 'form input[name="apiBaseUrl"]'},
  copyAddress: {css: 'form div.input-wrapper div.copy-btn'},

  saveButton: {css: 'form > div.row.buttons-wrapper > button'}

}