
Feature('Invoke Script transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/7WYPXxcJPiFt8JkuaiToNxu9oMekDgRAekPZgSQ3pD7z');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('7WYPXxcJPiFt8JkuaiToNxu9oMekDgRAekPZgSQ3pD7z', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Invoke Script data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/7WYPXxcJPiFt8JkuaiToNxu9oMekDgRAekPZgSQ3pD7z');

  I.see('16', transactionInfoPage.fields.type.text);
  I.see('Script Invocation', transactionInfoPage.fields.type.icon);
  I.see('1', transactionInfoPage.fields.version);

  var testDate = new Date(1579686752111);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('294252', transactionInfoPage.fields.block);
  I.see('4ebLCSr8RKcAnivaVYf4cmECgVbGSTCHvB88ArRUbdnaio9dXzKPkwX1RLcpuNMXUumGPPgWBbwYbzonVy2wEqQB', transactionInfoPage.fields.proofs);
  
  I.see('3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP', transactionInfoPage.fields.dappAddress);
  //Function name
  I.see('writeToState', transactionInfoPage.fields.callFunction);
  //Arguments values
  I.see('dsfsafd', transactionInfoPage.fields.callFunction);
  I.see('123', transactionInfoPage.fields.callFunction);
  I.see('true', transactionInfoPage.fields.callFunction);
  I.see('base64:Bi1ZTw==', transactionInfoPage.fields.callFunction);

  I.see('0.0000123 WAVES', transactionInfoPage.fields.payment);

  I.see('0.005 WAVES', transactionInfoPage.fields.fee);
  I.see('3Maom8S6NrD3PodqTZ6kxauzq4Ma9xPKaoh', transactionInfoPage.fields.sender);
  I.see('2M25DqL2W4rGFLCFadgATboS8EPqyWAN3DjH12AH5Kdr', transactionInfoPage.fields.senderPublicKey);
  I.see('"key": "test_string"', transactionInfoPage.fields.stateChanges);

  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});