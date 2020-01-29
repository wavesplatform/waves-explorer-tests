
Feature('Data transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/EY9piLN1D2LXo2nNR8iG941qSQy8Eb67VUr4jHForXKk');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('EY9piLN1D2LXo2nNR8iG941qSQy8Eb67VUr4jHForXKk', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Data TX data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/EY9piLN1D2LXo2nNR8iG941qSQy8Eb67VUr4jHForXKk');

  I.see('12', transactionInfoPage.fields.type.text);
  I.see('Data', transactionInfoPage.fields.type.icon);
  I.see('1', transactionInfoPage.fields.version);

  var testDate = new Date(1579685451438);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('294232', transactionInfoPage.fields.block);
  I.see('5DrE4vDXUkY8QBVGS39kYph1G4bS7GMiDgb5kxLUsbYPmMFrkKgJtKZLsKgkEnbt1vz9DZZMXnj3xyXsgcdDRa1V', transactionInfoPage.fields.proofs);
  I.see('"key": "price_294232"', transactionInfoPage.fields.data);
  I.see('0.001 WAVES', transactionInfoPage.fields.fee);
  I.see('3MbAmZFN3uQ1j2SMj28K32esXKSre2uVVf8', transactionInfoPage.fields.sender);
  I.see('GV4m8LVV22vhk5hpb2S5BnwNFtTuN3NAezz4VAey4AsK', transactionInfoPage.fields.senderPublicKey);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});
