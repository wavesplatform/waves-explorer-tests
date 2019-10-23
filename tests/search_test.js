
Feature('Search bar');

Scenario('Search bar elements', (I, searchBarFragment) => {
  I.openExplorer();

  within(searchBarFragment.root, () => {
    I.waitForVisible(searchBarFragment.searchBox);
    
    I.click(searchBarFragment.searchBox);
    I.fillField(searchBarFragment.searchBox, 'Test Query');

    I.pressKey('Enter');
    I.waitForVisible(searchBarFragment.loader);

    I.waitForVisible(searchBarFragment.clear);
    I.click(searchBarFragment.clear);

    I.dontSeeInField(searchBarFragment.searchBox, 'Test Query');
  });
});

Scenario('Search by Address', (I, searchBarFragment) => {
  var testAddress = '3PCAB4sHXgvtu5NPoen6EXR5yaNbvsEA8Fj';

  I.openExplorer();
  searchBarFragment.search(testAddress);
  I.seeCurrentUrlEquals(`/address/${testAddress}/tx`);
});

Scenario('Search by Alias', (I, searchBarFragment) => {
  var testAlias = 'new_merry';
  var testAddress = '3PC6vbbRvhv1ojcJwfgPT61rgpgRC7jzvod';

  I.openExplorer();
  searchBarFragment.search(testAlias);
  I.seeCurrentUrlEquals(`/address/${testAddress}/tx`);
});

Scenario('Search by TX id', (I, searchBarFragment) => {
  var txId = 'HpMKArkks5XQJnTSE6aaRUdYR2C2icC3yPAmQJi5f9Zp';

  I.openExplorer();
  searchBarFragment.search(txId);
  I.seeCurrentUrlEquals(`/tx/${txId}`);
});

Scenario('Search by AssetId', (I, searchBarFragment) => {
  var assetId = '8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS';

  I.openExplorer();
  searchBarFragment.search(assetId);
  I.seeCurrentUrlEquals(`/tx/${assetId}`);
});

Scenario('Search by Block Signature', (I, searchBarFragment) => {
  //Mainnet Block 1000000
  var blockSignature = '2VoLxjFL39fGzknYeHghBsHcQbhM9ohUmqsUXrg5hbLrtnVKxu9qYL34RAu8NUskppVNDHr9dMDLyHJCHVqudEXF';

  I.openExplorer();
  searchBarFragment.search(blockSignature);
  I.seeCurrentUrlEquals('/blocks/1000000');
});

Scenario('Invalid query (Not found)', (I, searchBarFragment) => {
  var query = 'SomethingNotFound';

  I.openExplorer();
  searchBarFragment.search(query);

  within(searchBarFragment.root, () => {
    I.waitForVisible(searchBarFragment.error);
  });
});