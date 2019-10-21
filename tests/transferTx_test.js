
Feature('Transfer transaction');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/tx/5Hnes5zdZH8pqQ2xP6APsxNZoUtvjCKXJ8rtupZQngVM');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('5Hnes5zdZH8pqQ2xP6APsxNZoUtvjCKXJ8rtupZQngVM', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Transfer transaction elements', (I, transactionInfoPage) => {
  I.openExplorer('/tx/5Hnes5zdZH8pqQ2xP6APsxNZoUtvjCKXJ8rtupZQngVM');

  I.waitForVisible(transactionInfoPage.fields.type.text);
  I.waitForVisible(transactionInfoPage.fields.type.icon);
  I.waitForVisible(transactionInfoPage.fields.version);
  I.waitForVisible(transactionInfoPage.fields.timestamp);
  I.waitForVisible(transactionInfoPage.fields.block);
  I.waitForVisible(transactionInfoPage.fields.proofs);
  I.waitForVisible(transactionInfoPage.fields.recipient);
  I.waitForVisible(transactionInfoPage.fields.amount);
  I.waitForVisible(transactionInfoPage.fields.fee);
  I.waitForVisible(transactionInfoPage.fields.attachment);
  I.waitForVisible(transactionInfoPage.fields.sender);
  I.waitForVisible(transactionInfoPage.fields.senderPublicKey);
  I.waitForVisible(transactionInfoPage.fields.json.showButton);
});

Scenario('Transaction data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/tx/5Hnes5zdZH8pqQ2xP6APsxNZoUtvjCKXJ8rtupZQngVM');

  I.see('4', transactionInfoPage.fields.type.text);
  I.see('Asset Transfer', transactionInfoPage.fields.type.icon);
  I.see('2', transactionInfoPage.fields.version);
  I.see('17:39:29, 11.12.2018', transactionInfoPage.fields.timestamp);
  I.see('1301279', transactionInfoPage.fields.block);
  I.see('26A3sYdsv97MjQyEHMrufwwMWHN6X9W7eRcXSvoSd6tTNmhKE4MWtQnfHaZq9N1epaTPKg7BBx7zXgx351o6ykrF', transactionInfoPage.fields.proofs);
  I.see('3PEDGbdcSYAorLoV4oDVSJPTezGUPFrZj8f', transactionInfoPage.fields.recipient);
  I.see('0.001 WAVES', transactionInfoPage.fields.amount);
  I.see('0.001 WAVES', transactionInfoPage.fields.fee);
  I.see('Test description message !@#$%^&*()_+}{":?>< Тест мессадж дескрипшен :)', transactionInfoPage.fields.attachment);
  I.see('3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18', transactionInfoPage.fields.sender);
  I.see('27C8ksVhVFUXyngF1F8TfyCGLmkDMsm2QuTv4VvhBpJU', transactionInfoPage.fields.senderpPublicKey);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
})

Scenario('Link to Block info', (I, transactionInfoPage) => {
  I.openExplorer('/tx/5Hnes5zdZH8pqQ2xP6APsxNZoUtvjCKXJ8rtupZQngVM');

  I.waitForVisible(transactionInfoPage.fields.block);
  I.click(transactionInfoPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1301279');
});

Scenario('Link to Recipient page', (I, transactionInfoPage) => {
  I.openExplorer('/tx/5Hnes5zdZH8pqQ2xP6APsxNZoUtvjCKXJ8rtupZQngVM');

  I.waitForVisible(transactionInfoPage.fields.recipient);
  I.click(transactionInfoPage.fields.recipient);
  I.seeCurrentUrlEquals('/address/3PEDGbdcSYAorLoV4oDVSJPTezGUPFrZj8f/tx');
});

Scenario('Link to Sender page', (I, transactionInfoPage) => {
  I.openExplorer('/tx/5Hnes5zdZH8pqQ2xP6APsxNZoUtvjCKXJ8rtupZQngVM');

  I.waitForVisible(transactionInfoPage.fields.sender);
  I.click(transactionInfoPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18/tx');
});

Scenario('Alias in Recipient', (I, transactionInfoPage) => {
  I.openExplorer('/tx/77BaFqrP17oA9y7CyKW9SzCX1DuEs2uD19dZkA2KdLwS');

  I.see('send2', transactionInfoPage.fields.recipient);
});

Scenario('Link to Recipient page (Alias)', (I, transactionInfoPage) => {
  I.openExplorer('/tx/77BaFqrP17oA9y7CyKW9SzCX1DuEs2uD19dZkA2KdLwS');

  I.waitForVisible(transactionInfoPage.fields.recipient);
  I.click(transactionInfoPage.fields.recipient);
  I.wait(2);
  I.seeCurrentUrlEquals('/address/3PCAB4sHXgvtu5NPoen6EXR5yaNbvsEA8Fj/tx');
});

Scenario('Amount not in Waves', (I, transactionInfoPage) => {
  I.openExplorer('/tx/J7ABVzJ2cZvdjLBh8LDXgAehphCJcnu5aWE2QU14mkuJ');

  I.see('1 READ attachment', transactionInfoPage.fields.amount);

  I.waitForVisible(transactionInfoPage.fields.amountAsset);
  I.click(transactionInfoPage.fields.amountAsset);
  I.seeCurrentUrlEquals('/assets/FZNHSm4sVENS9kr2mKe5MzHy2hDfYHcXmiC2v4kFs5PN');
});

Scenario('Fee not in Waves', (I, transactionInfoPage) => {
  I.openExplorer('/tx/J7ABVzJ2cZvdjLBh8LDXgAehphCJcnu5aWE2QU14mkuJ');

  I.see('0.001 RPG Coin', transactionInfoPage.fields.fee);

  I.waitForVisible(transactionInfoPage.fields.feeAsset);
  I.click(transactionInfoPage.fields.feeAsset);
  I.seeCurrentUrlEquals('/assets/7wQtHuEnv4ZerU5zJ37aBkQKas8AzeEZXf2ZK22q1CBM');
});