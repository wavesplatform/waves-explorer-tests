
Feature('Create Alias transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/HPGAD1iyKoiqVHhdbQHgThSRcFvDbEPEZQF76bFBmYEX');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('HPGAD1iyKoiqVHhdbQHgThSRcFvDbEPEZQF76bFBmYEX', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Lease Cancel transaction data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/HPGAD1iyKoiqVHhdbQHgThSRcFvDbEPEZQF76bFBmYEX');

  I.see('10', transactionInfoPage.fields.type.text);
  I.see('Create Alias', transactionInfoPage.fields.type.icon);
  I.see('2', transactionInfoPage.fields.version);

  var testDate = new Date(1577447358689);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('260197', transactionInfoPage.fields.block);
  I.see('2UfGrJAGhrVWSC5gfVgs323hokdNapahjcw9FujeuUZJazjFoGkdY37SbEJeKd3PSz8up4p2Ebh6pjGrXSZzkrMK', transactionInfoPage.fields.proofs);
  I.see('al1577447280313', transactionInfoPage.fields.alias);
  I.see('0.001 WAVES', transactionInfoPage.fields.fee);
  I.see('3MRXWDTXtSc1iRHiTwn23K2qhyLc1hCioMC', transactionInfoPage.fields.sender);
  I.see('FB5ErjREo817duEBBQUqUdkgoPctQJEYuG3mU7w3AYjc', transactionInfoPage.fields.senderPublicKey);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});
