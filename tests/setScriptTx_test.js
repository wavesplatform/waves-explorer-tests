
Feature('Set Script transaction');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/tx/4v7wz8GkN1MGV7zSGw8h7BFqzSvz5YWUd2xtrQWrZzAK');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('4v7wz8GkN1MGV7zSGw8h7BFqzSvz5YWUd2xtrQWrZzAK', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Set Script transaction elements', (I, transactionInfoPage) => {
  I.openExplorer('/tx/4v7wz8GkN1MGV7zSGw8h7BFqzSvz5YWUd2xtrQWrZzAK');

  I.waitForVisible(transactionInfoPage.fields.type.text);
  I.waitForVisible(transactionInfoPage.fields.type.icon);
  I.waitForVisible(transactionInfoPage.fields.version);
  I.waitForVisible(transactionInfoPage.fields.timestamp);
  I.waitForVisible(transactionInfoPage.fields.block);
  I.waitForVisible(transactionInfoPage.fields.proofs);
  
  I.waitForVisible(transactionInfoPage.fields.script.text);
  I.waitForVisible(transactionInfoPage.fields.script.viewType.select);
  I.waitForVisible(transactionInfoPage.fields.script.copy);

  I.waitForVisible(transactionInfoPage.fields.fee);
  I.waitForVisible(transactionInfoPage.fields.sender);
  I.waitForVisible(transactionInfoPage.fields.senderPublicKey);
  I.waitForVisible(transactionInfoPage.fields.json.showButton);
});

Scenario('Set Script data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/tx/4v7wz8GkN1MGV7zSGw8h7BFqzSvz5YWUd2xtrQWrZzAK');

  I.see('13', transactionInfoPage.fields.type.text);
  I.see('Script', transactionInfoPage.fields.type.icon);
  I.see('1', transactionInfoPage.fields.version);

  var testDate = new Date(1540555215015);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('1233683', transactionInfoPage.fields.block);
  I.see('Y3d4RHae6pv6PemcWypoRNdzMJASnv84hKVVbdnx8aiGcFeFCDsG4yVAzGEUxZK9fTm1YfPrQQ3MnGB1FMEaVPg', transactionInfoPage.fields.proofs);
  
  I.see('let publicKey', transactionInfoPage.fields.script.text);

  I.see('0.01 WAVES', transactionInfoPage.fields.fee);
  I.see('3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18', transactionInfoPage.fields.sender);

  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});

Scenario('Link to Block info', (I, transactionInfoPage) => {
  I.openExplorer('/tx/4v7wz8GkN1MGV7zSGw8h7BFqzSvz5YWUd2xtrQWrZzAK');

  I.waitForVisible(transactionInfoPage.fields.block);
  I.click(transactionInfoPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1233683');
});

Scenario('Link to Sender', (I, transactionInfoPage) => {
  I.openExplorer('/tx/4v7wz8GkN1MGV7zSGw8h7BFqzSvz5YWUd2xtrQWrZzAK');

  I.waitForVisible(transactionInfoPage.fields.sender);
  I.click(transactionInfoPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18/tx');
});

Scenario('View Decompiled script', (I, transactionInfoPage) => {
  I.openExplorer('/tx/4v7wz8GkN1MGV7zSGw8h7BFqzSvz5YWUd2xtrQWrZzAK');

  transactionInfoPage.switchToBase64View();
  I.see('base64:AQQAAAAJcHV', transactionInfoPage.fields.script.text);
});

Scenario('Cancel script', (I, transactionInfoPage) => {
  I.openExplorer('/tx/Dvt8GGSPJqpD35p94tsjTFDsgpaENK7GxJ9QheFqPBGw');

  I.waitForInvisible(transactionInfoPage.fields.script.text);
  I.waitForInvisible(transactionInfoPage.fields.script.viewType.select);
  I.waitForInvisible(transactionInfoPage.fields.script.copy);
  
  I.waitForVisible(transactionInfoPage.fields.script.emptyIcon);
});
