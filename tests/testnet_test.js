
Feature('Testnet network');

Scenario('Change to Testnet network', async (I, sideMenuFragment, generalPage) => {
  I.openExplorer();

  var currentHeight = await I.grabTextFrom(generalPage.infoBox.currentHeight);
  sideMenuFragment.changeNetwork('Testnet');
  I.wait(10);
  I.dontSee(currentHeight, generalPage.infoBox.currentHeight);
});

Scenario('Faucet link in sidemenu', (I, sideMenuFragment) => {
  I.openExplorer('/testnet');

  I.waitForVisible(sideMenuFragment.links.faucet);
});

Scenario('Open Testnet by URL', (I, sideMenuFragment) => {
  I.openExplorer('/testnet');
  I.see('Testnet', sideMenuFragment.network.current);
});

Scenario('Search by Alias', (I, searchBarFragment) => {
  var testAlias = 'send1';
  var testAddress = '3NApQXCdH5P5LMtrawTUVLvh7UMdKidygmK';

  I.openExplorer('/testnet');
  searchBarFragment.search(testAlias);
  I.seeCurrentUrlEquals(`/testnet/address/${testAddress}/tx`);
});

Scenario('Search by Address', (I, searchBarFragment) => {
  var testAddress = '3NApQXCdH5P5LMtrawTUVLvh7UMdKidygmK';

  I.openExplorer('/testnet');
  searchBarFragment.search(testAddress);
  I.seeCurrentUrlEquals(`/testnet/address/${testAddress}/tx`);
});