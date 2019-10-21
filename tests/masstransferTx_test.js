
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

Scenario('Mass Transfer transaction elements', (I, transactionInfoPage) => {
  I.openExplorer('/tx/F584Pi4yPMkt9GpSscs6t4CiR8NNxqeU9KJed8o59uX5');

  I.waitForVisible(transactionInfoPage.fields.type.text);
  I.waitForVisible(transactionInfoPage.fields.type.icon);
  I.waitForVisible(transactionInfoPage.fields.version);
  I.waitForVisible(transactionInfoPage.fields.timestamp);
  I.waitForVisible(transactionInfoPage.fields.block);
  I.waitForVisible(transactionInfoPage.fields.proofs);
  I.waitForVisible(transactionInfoPage.fields.totalAmount);
  I.waitForVisible(transactionInfoPage.fields.transfersCount);
  I.waitForVisible(transactionInfoPage.fields.attachment);
  I.waitForVisible(transactionInfoPage.fields.fee);
  I.waitForVisible(transactionInfoPage.fields.sender);
  I.waitForVisible(transactionInfoPage.fields.senderPublicKey);
  I.waitForVisible(transactionInfoPage.fields.json.showButton);

  I.waitForVisible(transactionInfoPage.transfers.header.recipient);
  I.waitForVisible(transactionInfoPage.transfers.header.amount);
  I.waitForVisible(transactionInfoPage.transfers.tableRow.recipient);
  I.waitForVisible(transactionInfoPage.transfers.tableRow.amount);
});

Scenario('Mass Transfer data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/tx/F584Pi4yPMkt9GpSscs6t4CiR8NNxqeU9KJed8o59uX5');

  I.see('11', transactionInfoPage.fields.type.text);
  I.see('Mass Payment', transactionInfoPage.fields.type.icon);
  I.see('1', transactionInfoPage.fields.version);
  I.see('22:54:01, 04.11.2018', transactionInfoPage.fields.timestamp);
  I.see('1247324', transactionInfoPage.fields.block);
  I.see('67qbbtvYYPAsEq7aTTnHrbb72k9TFzsUHG7Anvh6RsGDa6UPeSX1jz5jmaXERe8wZodsDSxhzVyt4f5k6eS77DWL', transactionInfoPage.fields.proofs);
  I.see('0.000014 WAVES', transactionInfoPage.fields.totalAmount);
  I.see('100', transactionInfoPage.fields.transfersCount);
  I.see('a small gift. goo open tab|-> http://wign.icu | get free 0.55412141 WBTC and 100 Waves | get here -> http://wign.icu', transactionInfoPage.fields.attachment);
  I.see('0.051 WAVES', transactionInfoPage.fields.fee);
  I.see('3P5bbM8NjpE7TX4Xx1VP84cvsWFLLxT8bAR', transactionInfoPage.fields.sender);
  I.see('C2zmTTj6VJNht2h6sWK8ndgqmqJFvtGcurP9veJYge7H', transactionInfoPage.fields.senderPublicKey);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);

  I.see('3PGWLPus5wBGLHiGB8BMFeYEz7aDyBoCL7b', transactionInfoPage.transfers.tableRow.recipient);
  I.see('0.00000014 WAVES', transactionInfoPage.transfers.tableRow.amount);
});

Scenario('Link to Block info', (I, transactionInfoPage) => {
  I.openExplorer('/tx/F584Pi4yPMkt9GpSscs6t4CiR8NNxqeU9KJed8o59uX5');

  I.waitForVisible(transactionInfoPage.fields.block);
  I.click(transactionInfoPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1247324');
});

Scenario('Link to Sender page', (I, transactionInfoPage) => {
  I.openExplorer('/tx/F584Pi4yPMkt9GpSscs6t4CiR8NNxqeU9KJed8o59uX5');

  I.waitForVisible(transactionInfoPage.fields.sender);
  I.click(transactionInfoPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3P5bbM8NjpE7TX4Xx1VP84cvsWFLLxT8bAR/tx');
});

Scenario('Link to Transfer Recipient page', (I, transactionInfoPage) => {
  I.openExplorer('/tx/F584Pi4yPMkt9GpSscs6t4CiR8NNxqeU9KJed8o59uX5');

  I.waitForVisible(transactionInfoPage.transfers.tableRow.recipient);
  I.click(transactionInfoPage.transfers.tableRow.recipient);
  I.seeCurrentUrlEquals('/address/3PGWLPus5wBGLHiGB8BMFeYEz7aDyBoCL7b/tx');
});

Scenario('Link to Amount not in Waves', (I, transactionInfoPage) => {
  I.openExplorer('/tx/6Mo7kVBWQ3bgzVsPE1BZcdNGK8zAzDgNxMf59ziMQSXy');

  I.see('2 feetoken', transactionInfoPage.fields.totalAmount);
  
  I.waitForVisible(transactionInfoPage.fields.totalAmountAsset);
  I.click(transactionInfoPage.fields.totalAmountAsset);
  I.seeCurrentUrlEquals('/assets/8RwwkZJ373Nm6fJCgV2Lefe6FeWawUY2APujcsauUNMR');
});