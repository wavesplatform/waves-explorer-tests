
Feature('Set Asset Script transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/8th7YfojrPCSbzzQXgEggeEaWgNLRyJLuWhbGasWMyk3');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('8th7YfojrPCSbzzQXgEggeEaWgNLRyJLuWhbGasWMyk3', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Set Script data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/8th7YfojrPCSbzzQXgEggeEaWgNLRyJLuWhbGasWMyk3');

  I.see('15', transactionInfoPage.fields.type.text);
  I.see('Asset Script', transactionInfoPage.fields.type.icon);
  I.see('1', transactionInfoPage.fields.version);

  var testDate = new Date(1580966956383);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('279106', transactionInfoPage.fields.block);
  I.see('47McHj2bZKggyqEY18bjrEpri4h4eyu457q7eUxMHAoq3VhbQbpRW2D1fecUoY1KwvzWWbpoEoQaNzXcxssFCE76', transactionInfoPage.fields.proofs);
  
  I.see('Smart', transactionInfoPage.fields.asset);
  I.see('CONTENT_TYPE EXPRESSION', transactionInfoPage.fields.script.text);

  I.see('1 WAVES', transactionInfoPage.fields.fee);
  I.see('3MYVzb3RHkZj7hiFgQKcn7tDw3JZvXMM1kt', transactionInfoPage.fields.sender);
  I.see('CKSSqFyPwucYP9cSbWxccw43jedVxipeABQCJt5EkXHT', transactionInfoPage.fields.senderPublicKey);

  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});

Scenario('View base64 script', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/8th7YfojrPCSbzzQXgEggeEaWgNLRyJLuWhbGasWMyk3');

  transactionInfoPage.switchToBase64View();
  I.see('base64:AwZd0cYf', transactionInfoPage.fields.script.text);
});
