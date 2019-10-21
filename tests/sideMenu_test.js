
Feature('Side Menu');

Scenario('Check elements', (I, sideMenuFragment) => {
  I.openExplorer();

  within(sideMenuFragment.root, function() {
    I.waitForVisible(sideMenuFragment.network.current);
    I.waitForVisible(sideMenuFragment.network.settings);

    I.waitForVisible(sideMenuFragment.links.generalInfo);
    I.waitForVisible(sideMenuFragment.links.blocks);
    I.waitForVisible(sideMenuFragment.links.peers);
    I.waitForVisible(sideMenuFragment.links.nodes);
  });
});

Scenario('Check footer and social links', (I, sideMenuFragment) => {
  I.openExplorer();

  within(sideMenuFragment.root, function() {
    I.waitForVisible(sideMenuFragment.footer.block);
    I.waitForVisible(sideMenuFragment.footer.version);

    I.waitForVisible(sideMenuFragment.footer.socialLinks.github);
    I.seeAttributesOnElements(sideMenuFragment.footer.socialLinks.github, {href: 'https://github.com/wavesplatform/'});

    I.waitForVisible(sideMenuFragment.footer.socialLinks.twitter);
    I.seeAttributesOnElements(sideMenuFragment.footer.socialLinks.twitter, {href: 'https://twitter.com/@wavesplatform'});

    I.waitForVisible(sideMenuFragment.footer.socialLinks.facebook);
    I.seeAttributesOnElements(sideMenuFragment.footer.socialLinks.facebook, {href: 'https://www.facebook.com/wavesplatform/'});

    I.waitForVisible(sideMenuFragment.footer.socialLinks.discord);
    I.seeAttributesOnElements(sideMenuFragment.footer.socialLinks.discord, {href: 'https://discord.gg/cnFmDyA'});

    I.waitForVisible(sideMenuFragment.footer.socialLinks.telegram);
    I.seeAttributesOnElements(sideMenuFragment.footer.socialLinks.telegram, {href: 'https://telegram.me/wavesnews'});

    I.waitForVisible(sideMenuFragment.footer.socialLinks.reddit);
    I.seeAttributesOnElements(sideMenuFragment.footer.socialLinks.reddit, {href: 'https://reddit.com/r/Wavesplatform/'});

    I.waitForVisible(sideMenuFragment.footer.siteLink);
    I.seeAttributesOnElements(sideMenuFragment.footer.siteLink, {href: 'https://wavesplatform.com/'});
  });
});

Scenario('Check side menu links', (I, sideMenuFragment) => {
  I.openExplorer();

  within(sideMenuFragment.root, function() {
    I.waitForVisible(sideMenuFragment.links.generalInfo);
    I.click(sideMenuFragment.links.generalInfo);
    I.seeCurrentUrlEquals('/');

    I.waitForVisible(sideMenuFragment.links.blocks);
    I.click(sideMenuFragment.links.blocks);
    I.seeCurrentUrlEquals('/blocks');

    I.waitForVisible(sideMenuFragment.links.peers);
    I.click(sideMenuFragment.links.peers);
    I.seeCurrentUrlEquals('/peers');

    I.waitForVisible(sideMenuFragment.links.nodes);
    I.click(sideMenuFragment.links.nodes);
    I.seeCurrentUrlEquals('/nodes');
  });
});