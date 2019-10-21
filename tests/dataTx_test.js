
Feature('Data transaction');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/tx/B7MuCnpYKzBh9NhmTGfoj6ZvcDh4FhMQpw8YSUNzotK6');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('B7MuCnpYKzBh9NhmTGfoj6ZvcDh4FhMQpw8YSUNzotK6', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Data transaction elements', (I, transactionInfoPage) => {
  I.openExplorer('/tx/B7MuCnpYKzBh9NhmTGfoj6ZvcDh4FhMQpw8YSUNzotK6');

  I.waitForVisible(transactionInfoPage.fields.type.text);
  I.waitForVisible(transactionInfoPage.fields.type.icon);
  I.waitForVisible(transactionInfoPage.fields.version);
  I.waitForVisible(transactionInfoPage.fields.timestamp);
  I.waitForVisible(transactionInfoPage.fields.block);
  I.waitForVisible(transactionInfoPage.fields.proofs);
  I.waitForVisible(transactionInfoPage.fields.data);
  I.waitForVisible(transactionInfoPage.fields.fee);
  I.waitForVisible(transactionInfoPage.fields.sender);
  I.waitForVisible(transactionInfoPage.fields.senderPublicKey);
  I.waitForVisible(transactionInfoPage.fields.json.showButton);
});

Scenario('Data TX data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/tx/B7MuCnpYKzBh9NhmTGfoj6ZvcDh4FhMQpw8YSUNzotK6');

  I.see('12', transactionInfoPage.fields.type.text);
  I.see('Data', transactionInfoPage.fields.type.icon);
  I.see('1', transactionInfoPage.fields.version);
  I.see('18:44:20, 01.02.2019', transactionInfoPage.fields.timestamp);
  I.see('1377361', transactionInfoPage.fields.block);
  I.see('4xse9FCVwAb7BzzmnwSwR7gBFxM4fTJfhnbG3dkSN77vmrgXEuC43NWVc6R47WKijiUUAMLrhfWZSBSvZirZ43wn', transactionInfoPage.fields.proofs);
  I.see('"value": "base64:AbCd"', transactionInfoPage.fields.data);
  I.see('0.01 WAVES', transactionInfoPage.fields.fee);
  I.see('3PCAB4sHXgvtu5NPoen6EXR5yaNbvsEA8Fj', transactionInfoPage.fields.sender);
  I.see('2M25DqL2W4rGFLCFadgATboS8EPqyWAN3DjH12AH5Kdr', transactionInfoPage.fields.senderPublicKey);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});
 
Scenario('Link to Block info', (I, transactionInfoPage) => {
  I.openExplorer('/tx/B7MuCnpYKzBh9NhmTGfoj6ZvcDh4FhMQpw8YSUNzotK6');

  I.waitForVisible(transactionInfoPage.fields.block);
  I.click(transactionInfoPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1377361');
});

Scenario('Link to Sender', (I, transactionInfoPage) => {
  I.openExplorer('/tx/B7MuCnpYKzBh9NhmTGfoj6ZvcDh4FhMQpw8YSUNzotK6');

  I.waitForVisible(transactionInfoPage.fields.sender);
  I.click(transactionInfoPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3PCAB4sHXgvtu5NPoen6EXR5yaNbvsEA8Fj/tx');
});