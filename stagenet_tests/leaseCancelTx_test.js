
Feature('Lease cancel transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/SgK1aiMJu3dWVTzEj9JQg11vBWD9nQVqAawnebzxcAj');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('SgK1aiMJu3dWVTzEj9JQg11vBWD9nQVqAawnebzxcAj', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Lease Cancel data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/SgK1aiMJu3dWVTzEj9JQg11vBWD9nQVqAawnebzxcAj');

  I.see('9', transactionInfoPage.fields.type.text);
  I.see('Lease Cancel', transactionInfoPage.fields.type.icon);
  I.see('2', transactionInfoPage.fields.version);

  var testDate = new Date(1577446444457);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('260180', transactionInfoPage.fields.block);
  I.see('289gfUvWsBgaJNgYueJZJ5KKTZoCavw3r7kBCTDiUPWo3ePsnmaGxQ8fBQRMiNnC8eLr8a4ELPoK68yUaruFUf72', transactionInfoPage.fields.proofs);
  I.see('FZMNhQjDsVPZJJJGE4Y71c8BZrZ2PkRjsbCkx8fSbCkL', transactionInfoPage.fields.leaseId);
  I.see('0.001 WAVES', transactionInfoPage.fields.fee);
  I.see('3MRXWDTXtSc1iRHiTwn23K2qhyLc1hCioMC', transactionInfoPage.fields.sender);
  I.see('FB5ErjREo817duEBBQUqUdkgoPctQJEYuG3mU7w3AYjc', transactionInfoPage.fields.senderPublicKey);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});