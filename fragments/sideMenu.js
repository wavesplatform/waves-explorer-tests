const { I } = inject();

module.exports = {

  root: {css: 'div.menu'},

  network: {
    current: {css: 'div.current-network'},
    settings: {css: 'div.settings-button'},

    getByName(network) {
        return {xpath: `//div[contains(@class, "network-list")]//*[.="${network}"]`};
    }
  },

  links: {
    generalInfo: {css: 'div.menu-item.icon-general a'},
    blocks: {css: 'div.menu-item.icon-blocks a'},
    peers: {css: 'div.menu-item.icon-peers a'},
    nodes: {css: 'div.menu-item.icon-nodes a'}
  },

  footer: {
    block: {css: '#xxxxx > div.menu.grid-item-fixed.lg-hide > div.menu-footer'},
    version: {xpath: '//div[contains(@class, "menu-footer")]//*[contains(text(),"Version")]'},
    socialLinks: {
      github: {css: 'a.social.github'},
      twitter: {css: 'a.social.twitter'},
      facebook: {css: 'a.social.facebook'},
      discord: {css: 'a.social.discord'},
      telegram: {css: 'a.social.telegram'},
      reddit: {css: 'a.social.reddit'}
    },

    siteLink: {css: 'div.menu-footer a.fade'}
  },

  changeNetwork(network) {
    within(this.root, function() {
      I.waitForVisible(this.network.current);
      I.click(this.network.current);

      I.waitForVisible(this.network.getByName(network));
      I.click(this.network.getByName(network));
    });
  }
}
