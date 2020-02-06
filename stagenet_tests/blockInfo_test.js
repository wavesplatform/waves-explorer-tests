
var assert = require('chai').assert;

Feature('Block Info @stagenet');

Scenario('Block info elements', { retries: 3 }, (I, blockInfoPage) => {
  I.openExplorer('stagenet/blocks/279062');

  I.waitForVisible(blockInfoPage.backLink);
  I.see('279062', blockInfoPage.blockTitle);

  //Fields
  I.see('279062', blockInfoPage.fields.height.text);
  I.waitForVisible(blockInfoPage.fields.height.previous);
  I.waitForVisible(blockInfoPage.fields.height.next);
  I.see('5', blockInfoPage.fields.version);

  var testDate = new Date('2020-02-06T07:46:44Z');
  I.see(I.formatDateToExplorerFormat(testDate), blockInfoPage.fields.timestamp);

  I.see('2', blockInfoPage.fields.transactions);
  I.see('Zwpt5fygNvLqMDJQFAo17KKGs1p1qxysY7ihcoC9aAvTrP8cr6MP3cJ6yCfbT9dqWH2mZtbvfKAeNZrR8ATuvgP', blockInfoPage.fields.parentBlock.text);
  I.waitForVisible(blockInfoPage.fields.parentBlock.copyButton);
  I.see('3Mkcn5PnFzkEYtfTxLc8Ui1WW1WHkvXs7fp', blockInfoPage.fields.generator);
  I.see('GvvGJF6ufQ1ixLGp2gdmSM8MzmWMriY8aKjYd2YpQmH7BBuyZATv5nTbZXjNEKeFtg9tgtCfVv66EeDcS6e8pp2', blockInfoPage.fields.signature.text);
  I.waitForVisible(blockInfoPage.fields.signature.copyButton);
  I.see('713 bytes', blockInfoPage.fields.size);
  I.see('0.002 WAVES', blockInfoPage.fields.totalFee);
  I.see('6 WAVES', blockInfoPage.fields.reward);

  //TXs table
  I.waitForVisible(blockInfoPage.transactionList.headline);
  I.waitForVisible(blockInfoPage.transactionList.hideList);
  I.waitForVisible(blockInfoPage.transactionList.table);
});