
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

Scenario('Transfer transaction elements', (I, transferTxPage) => {
  I.openExplorer('/tx/5Hnes5zdZH8pqQ2xP6APsxNZoUtvjCKXJ8rtupZQngVM');

  I.waitForVisible(transferTxPage.fields.type.text);
  I.waitForVisible(transferTxPage.fields.type.icon);
  I.waitForVisible(transferTxPage.fields.version);
  I.waitForVisible(transferTxPage.fields.timestamp);
  I.waitForVisible(transferTxPage.fields.block);
  I.waitForVisible(transferTxPage.fields.proofs);
  I.waitForVisible(transferTxPage.fields.recipient);
  I.waitForVisible(transferTxPage.fields.amount);
  I.waitForVisible(transferTxPage.fields.fee);
  I.waitForVisible(transferTxPage.fields.attachment);
  I.waitForVisible(transferTxPage.fields.sender);
  I.waitForVisible(transferTxPage.fields.senderPublicKey);
  I.waitForVisible(transferTxPage.fields.json.showButton);
});

Scenario('Transaction data parsing', (I, transferTxPage) => {
  I.openExplorer('/tx/5Hnes5zdZH8pqQ2xP6APsxNZoUtvjCKXJ8rtupZQngVM');

  I.see('4', transferTxPage.fields.type.text);
  I.see('Asset Transfer', transferTxPage.fields.type.icon);
  I.see('2', transferTxPage.fields.version);
  I.see('17:39:29, 11.12.2018', transferTxPage.fields.timestamp);
  I.see('1301279', transferTxPage.fields.block);
  I.see('26A3sYdsv97MjQyEHMrufwwMWHN6X9W7eRcXSvoSd6tTNmhKE4MWtQnfHaZq9N1epaTPKg7BBx7zXgx351o6ykrF', transferTxPage.fields.proofs);
  I.see('3PEDGbdcSYAorLoV4oDVSJPTezGUPFrZj8f', transferTxPage.fields.recipient);
  I.see('0.001 WAVES', transferTxPage.fields.amount);
  I.see('0.001 WAVES', transferTxPage.fields.fee);
  I.see('Test description message !@#$%^&*()_+}{":?>< Тест мессадж дескрипшен :)', transferTxPage.fields.attachment);
  I.see('3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18', transferTxPage.fields.sender);
  I.see('27C8ksVhVFUXyngF1F8TfyCGLmkDMsm2QuTv4VvhBpJU', transferTxPage.fields.senderpPublicKey);
  I.click(transferTxPage.fields.json.showButton);
  I.waitForVisible(transferTxPage.fields.json.text);
})

Scenario('Link to Block info', (I, transferTxPage) => {
  I.openExplorer('/tx/5Hnes5zdZH8pqQ2xP6APsxNZoUtvjCKXJ8rtupZQngVM');

  I.waitForVisible(transferTxPage.fields.block);
  I.click(transferTxPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1301279');
});

Scenario('Link to Recipient page', (I, transferTxPage) => {
  I.openExplorer('/tx/5Hnes5zdZH8pqQ2xP6APsxNZoUtvjCKXJ8rtupZQngVM');

  I.waitForVisible(transferTxPage.fields.recipient);
  I.click(transferTxPage.fields.recipient);
  I.seeCurrentUrlEquals('/address/3PEDGbdcSYAorLoV4oDVSJPTezGUPFrZj8f/tx');
});

Scenario('Link to Sender page', (I, transferTxPage) => {
  I.openExplorer('/tx/5Hnes5zdZH8pqQ2xP6APsxNZoUtvjCKXJ8rtupZQngVM');

  I.waitForVisible(transferTxPage.fields.sender);
  I.click(transferTxPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18/tx');
});

Scenario('Alias in Recipient', (I, transferTxPage) => {
  I.openExplorer('/tx/77BaFqrP17oA9y7CyKW9SzCX1DuEs2uD19dZkA2KdLwS');

  I.see('send2', transferTxPage.fields.recipient);
});

Scenario('Link to Recipient page (Alias)', (I, transferTxPage) => {
  I.openExplorer('/tx/77BaFqrP17oA9y7CyKW9SzCX1DuEs2uD19dZkA2KdLwS');

  I.waitForVisible(transferTxPage.fields.recipient);
  I.click(transferTxPage.fields.recipient);
  I.wait(2);
  I.seeCurrentUrlEquals('/address/3PCAB4sHXgvtu5NPoen6EXR5yaNbvsEA8Fj/tx');
});

Scenario('Amount not in Waves', (I, transferTxPage) => {
  I.openExplorer('/tx/J7ABVzJ2cZvdjLBh8LDXgAehphCJcnu5aWE2QU14mkuJ');

  I.see('1 READ attachment', transferTxPage.fields.amount);

  I.waitForVisible(transferTxPage.fields.amountAsset);
  I.click(transferTxPage.fields.amountAsset);
  I.seeCurrentUrlEquals('/assets/FZNHSm4sVENS9kr2mKe5MzHy2hDfYHcXmiC2v4kFs5PN');
});

Scenario('Fee not in Waves', (I, transferTxPage) => {
  I.openExplorer('/tx/J7ABVzJ2cZvdjLBh8LDXgAehphCJcnu5aWE2QU14mkuJ');

  I.see('0.001 RPG Coin', transferTxPage.fields.fee);

  I.waitForVisible(transferTxPage.fields.feeAsset);
  I.click(transferTxPage.fields.feeAsset);
  I.seeCurrentUrlEquals('/assets/7wQtHuEnv4ZerU5zJ37aBkQKas8AzeEZXf2ZK22q1CBM');
});