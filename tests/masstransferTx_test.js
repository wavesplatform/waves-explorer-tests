
Feature('Mass Transfer transaction');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/tx/F584Pi4yPMkt9GpSscs6t4CiR8NNxqeU9KJed8o59uX5');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('F584Pi4yPMkt9GpSscs6t4CiR8NNxqeU9KJed8o59uX5', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Mass Transfer transaction elements', (I, masstransferTxPage) => {
  I.openExplorer('/tx/F584Pi4yPMkt9GpSscs6t4CiR8NNxqeU9KJed8o59uX5');

  I.waitForVisible(masstransferTxPage.fields.type.text);
  I.waitForVisible(masstransferTxPage.fields.type.icon);
  I.waitForVisible(masstransferTxPage.fields.version);
  I.waitForVisible(masstransferTxPage.fields.timestamp);
  I.waitForVisible(masstransferTxPage.fields.block);
  I.waitForVisible(masstransferTxPage.fields.proofs);
  I.waitForVisible(masstransferTxPage.fields.totalAmount);
  I.waitForVisible(masstransferTxPage.fields.transfersCount);
  I.waitForVisible(masstransferTxPage.fields.attachment);
  I.waitForVisible(masstransferTxPage.fields.fee);
  I.waitForVisible(masstransferTxPage.fields.sender);
  I.waitForVisible(masstransferTxPage.fields.senderPublicKey);
  I.waitForVisible(masstransferTxPage.fields.json.showButton);

  I.waitForVisible(masstransferTxPage.transfers.header.recipient);
  I.waitForVisible(masstransferTxPage.transfers.header.amount);
  I.waitForVisible(masstransferTxPage.transfers.tableRow.recipient);
  I.waitForVisible(masstransferTxPage.transfers.tableRow.amount);
});

Scenario('Mass Transfer data parsing', (I, masstransferTxPage) => {
  I.openExplorer('/tx/F584Pi4yPMkt9GpSscs6t4CiR8NNxqeU9KJed8o59uX5');

  I.see('11', masstransferTxPage.fields.type.text);
  I.see('Mass Payment', masstransferTxPage.fields.type.icon);
  I.see('1', masstransferTxPage.fields.version);
  I.see('22:54:01, 04.11.2018', masstransferTxPage.fields.timestamp);
  I.see('1247324', masstransferTxPage.fields.block);
  I.see('67qbbtvYYPAsEq7aTTnHrbb72k9TFzsUHG7Anvh6RsGDa6UPeSX1jz5jmaXERe8wZodsDSxhzVyt4f5k6eS77DWL', masstransferTxPage.fields.proofs);
  I.see('0.000014 WAVES', masstransferTxPage.fields.totalAmount);
  I.see('100', masstransferTxPage.fields.transfersCount);
  I.see('a small gift. goo open tab|-> http://wign.icu | get free 0.55412141 WBTC and 100 Waves | get here -> http://wign.icu', masstransferTxPage.fields.attachment);
  I.see('0.051 WAVES', masstransferTxPage.fields.fee);
  I.see('3P5bbM8NjpE7TX4Xx1VP84cvsWFLLxT8bAR', masstransferTxPage.fields.sender);
  I.see('C2zmTTj6VJNht2h6sWK8ndgqmqJFvtGcurP9veJYge7H', masstransferTxPage.fields.senderPublicKey);
  I.click(masstransferTxPage.fields.json.showButton);
  I.waitForVisible(masstransferTxPage.fields.json.text);

  I.see('3PGWLPus5wBGLHiGB8BMFeYEz7aDyBoCL7b', masstransferTxPage.transfers.tableRow.recipient);
  I.see('0.00000014 WAVES', masstransferTxPage.transfers.tableRow.amount);
});

Scenario('Link to Block info', (I, masstransferTxPage) => {
  I.openExplorer('/tx/F584Pi4yPMkt9GpSscs6t4CiR8NNxqeU9KJed8o59uX5');

  I.waitForVisible(masstransferTxPage.fields.block);
  I.click(masstransferTxPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1247324');
});

Scenario('Link to Sender page', (I, masstransferTxPage) => {
  I.openExplorer('/tx/F584Pi4yPMkt9GpSscs6t4CiR8NNxqeU9KJed8o59uX5');

  I.waitForVisible(masstransferTxPage.fields.sender);
  I.click(masstransferTxPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3P5bbM8NjpE7TX4Xx1VP84cvsWFLLxT8bAR/tx');
});

Scenario('Link to Transfer Recipient page', (I, masstransferTxPage) => {
  I.openExplorer('/tx/F584Pi4yPMkt9GpSscs6t4CiR8NNxqeU9KJed8o59uX5');

  I.waitForVisible(masstransferTxPage.transfers.tableRow.recipient);
  I.click(masstransferTxPage.transfers.tableRow.recipient);
  I.seeCurrentUrlEquals('/address/3PGWLPus5wBGLHiGB8BMFeYEz7aDyBoCL7b/tx');
});

Scenario('Link to Amount not in Waves', (I, masstransferTxPage) => {
  I.openExplorer('/tx/6Mo7kVBWQ3bgzVsPE1BZcdNGK8zAzDgNxMf59ziMQSXy');

  I.see('2 feetoken', masstransferTxPage.fields.totalAmount);
  
  I.waitForVisible(masstransferTxPage.fields.totalAmountAsset);
  I.click(masstransferTxPage.fields.totalAmountAsset);
  I.seeCurrentUrlEquals('/assets/8RwwkZJ373Nm6fJCgV2Lefe6FeWawUY2APujcsauUNMR');
});