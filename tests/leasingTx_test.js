
Feature('Leasing Transaction');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/tx/CjjDaHE925v3iMWGUUrNbyk6xJQAQwU6eW2e5twvdRNi');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('CjjDaHE925v3iMWGUUrNbyk6xJQAQwU6eW2e5twvdRNi', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Lease transaction elements', (I, transactionInfoPage) => {
  I.openExplorer('/tx/CjjDaHE925v3iMWGUUrNbyk6xJQAQwU6eW2e5twvdRNi');

  I.waitForVisible(transactionInfoPage.fields.type.text);
  I.waitForVisible(transactionInfoPage.fields.type.icon);
  I.waitForVisible(transactionInfoPage.fields.version);
  I.waitForVisible(transactionInfoPage.fields.timestamp);
  I.waitForVisible(transactionInfoPage.fields.block);
  I.waitForVisible(transactionInfoPage.fields.proofs);
  I.waitForVisible(transactionInfoPage.fields.amount);
  I.waitForVisible(transactionInfoPage.fields.fee);
  I.waitForVisible(transactionInfoPage.fields.recipient);
  I.waitForVisible(transactionInfoPage.fields.sender);
  I.waitForVisible(transactionInfoPage.fields.senderPublicKey);
  I.waitForVisible(transactionInfoPage.fields.status);
  I.waitForVisible(transactionInfoPage.fields.json.showButton);
});

Scenario('Lease transaction data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/tx/CjjDaHE925v3iMWGUUrNbyk6xJQAQwU6eW2e5twvdRNi');

  I.see('8', transactionInfoPage.fields.type.text);
  I.see('Lease', transactionInfoPage.fields.type.icon);
  I.see('2', transactionInfoPage.fields.version);
  I.see('17:17:35, 03.06.2019', transactionInfoPage.fields.timestamp);
  I.see('1555444', transactionInfoPage.fields.block);
  I.see('3MMDkzm5nAoZhUbdpjnjXE9JHVuwZsRYL3ndTV7ge9vu1F2bvy7nEHPncFyRh5RwpAf75CmTvTHJuqC1qDrEfnBD', transactionInfoPage.fields.proofs);
  I.see('0.1 WAVES', transactionInfoPage.fields.amount);
  I.see('0.001 WAVES', transactionInfoPage.fields.fee);
  I.see('3PPcfszx7AnMsjjn9ysEAbjPfTALRqmKscx', transactionInfoPage.fields.recipient);
  I.see('3PC6vbbRvhv1ojcJwfgPT61rgpgRC7jzvod', transactionInfoPage.fields.sender);
  I.see('4KxkQHV5VP5a5tm5ETSEj78r9JfLUPFqZFmnQz1q878Y', transactionInfoPage.fields.senderPublicKey);
  I.see('canceled', transactionInfoPage.fields.status);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});

Scenario('Link to Block info', (I, transactionInfoPage) => {
  I.openExplorer('/tx/CjjDaHE925v3iMWGUUrNbyk6xJQAQwU6eW2e5twvdRNi');

  I.waitForVisible(transactionInfoPage.fields.block);
  I.click(transactionInfoPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1555444');
});

Scenario('Link to Recipient', (I, transactionInfoPage) => {
  I.openExplorer('/tx/CjjDaHE925v3iMWGUUrNbyk6xJQAQwU6eW2e5twvdRNi');

  I.waitForVisible(transactionInfoPage.fields.recipient);
  I.click(transactionInfoPage.fields.recipient);
  I.seeCurrentUrlEquals('/address/3PPcfszx7AnMsjjn9ysEAbjPfTALRqmKscx/tx');
});

Scenario('Link to Sender', (I, transactionInfoPage) => {
  I.openExplorer('/tx/CjjDaHE925v3iMWGUUrNbyk6xJQAQwU6eW2e5twvdRNi');

  I.waitForVisible(transactionInfoPage.fields.sender);
  I.click(transactionInfoPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3PC6vbbRvhv1ojcJwfgPT61rgpgRC7jzvod/tx');
});

Scenario('Active leasing status', (I, transactionInfoPage) => {
  I.openExplorer('/tx/2g74jFuAvMGx7qsCEL2u23jYU3GEfU13BiweJPkBX3Ba');

  I.see('active', transactionInfoPage.fields.status);
});

Scenario('Link to Recipient (Alias)', (I, transactionInfoPage) => {
  I.openExplorer('/tx/2g74jFuAvMGx7qsCEL2u23jYU3GEfU13BiweJPkBX3Ba');

  I.see('merry', transactionInfoPage.fields.recipient);
  I.waitForVisible(transactionInfoPage.fields.recipient);
  I.click(transactionInfoPage.fields.recipient);
  I.wait(2);
  I.seeCurrentUrlEquals('/address/3PCAB4sHXgvtu5NPoen6EXR5yaNbvsEA8Fj/tx');
});