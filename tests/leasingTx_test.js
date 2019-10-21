
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

Scenario('Lease transaction elements', (I, leasingTxPage) => {
  I.openExplorer('/tx/CjjDaHE925v3iMWGUUrNbyk6xJQAQwU6eW2e5twvdRNi');

  I.waitForVisible(leasingTxPage.fields.type.text);
  I.waitForVisible(leasingTxPage.fields.type.icon);
  I.waitForVisible(leasingTxPage.fields.version);
  I.waitForVisible(leasingTxPage.fields.timestamp);
  I.waitForVisible(leasingTxPage.fields.block);
  I.waitForVisible(leasingTxPage.fields.proofs);
  I.waitForVisible(leasingTxPage.fields.amount);
  I.waitForVisible(leasingTxPage.fields.fee);
  I.waitForVisible(leasingTxPage.fields.recipient);
  I.waitForVisible(leasingTxPage.fields.sender);
  I.waitForVisible(leasingTxPage.fields.senderPublicKey);
  I.waitForVisible(leasingTxPage.fields.status);
  I.waitForVisible(leasingTxPage.fields.json.showButton);
});

Scenario('Lease transaction data parsing', (I, leasingTxPage) => {
  I.openExplorer('/tx/CjjDaHE925v3iMWGUUrNbyk6xJQAQwU6eW2e5twvdRNi');

  I.see('8', leasingTxPage.fields.type.text);
  I.see('Lease', leasingTxPage.fields.type.icon);
  I.see('2', leasingTxPage.fields.version);
  I.see('17:17:35, 03.06.2019', leasingTxPage.fields.timestamp);
  I.see('1555444', leasingTxPage.fields.block);
  I.see('3MMDkzm5nAoZhUbdpjnjXE9JHVuwZsRYL3ndTV7ge9vu1F2bvy7nEHPncFyRh5RwpAf75CmTvTHJuqC1qDrEfnBD', leasingTxPage.fields.proofs);
  I.see('0.1 WAVES', leasingTxPage.fields.amount);
  I.see('0.001 WAVES', leasingTxPage.fields.fee);
  I.see('3PPcfszx7AnMsjjn9ysEAbjPfTALRqmKscx', leasingTxPage.fields.recipient);
  I.see('3PC6vbbRvhv1ojcJwfgPT61rgpgRC7jzvod', leasingTxPage.fields.sender);
  I.see('4KxkQHV5VP5a5tm5ETSEj78r9JfLUPFqZFmnQz1q878Y', leasingTxPage.fields.senderPublicKey);
  I.see('canceled', leasingTxPage.fields.status);
  I.click(leasingTxPage.fields.json.showButton);
  I.waitForVisible(leasingTxPage.fields.json.text);
});

Scenario('Link to Block info', (I, leasingTxPage) => {
  I.openExplorer('/tx/CjjDaHE925v3iMWGUUrNbyk6xJQAQwU6eW2e5twvdRNi');

  I.waitForVisible(leasingTxPage.fields.block);
  I.click(leasingTxPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1555444');
});

Scenario('Link to Recipient', (I, leasingTxPage) => {
  I.openExplorer('/tx/CjjDaHE925v3iMWGUUrNbyk6xJQAQwU6eW2e5twvdRNi');

  I.waitForVisible(leasingTxPage.fields.recipient);
  I.click(leasingTxPage.fields.recipient);
  I.seeCurrentUrlEquals('/address/3PPcfszx7AnMsjjn9ysEAbjPfTALRqmKscx/tx');
});

Scenario('Link to Sender', (I, leasingTxPage) => {
  I.openExplorer('/tx/CjjDaHE925v3iMWGUUrNbyk6xJQAQwU6eW2e5twvdRNi');

  I.waitForVisible(leasingTxPage.fields.sender);
  I.click(leasingTxPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3PC6vbbRvhv1ojcJwfgPT61rgpgRC7jzvod/tx');
});

Scenario('Active leasing status', (I, leasingTxPage) => {
  I.openExplorer('/tx/2g74jFuAvMGx7qsCEL2u23jYU3GEfU13BiweJPkBX3Ba');

  I.see('active', leasingTxPage.fields.status);
});

Scenario('Link to Recipient (Alias)', (I, leasingTxPage) => {
  I.openExplorer('/tx/2g74jFuAvMGx7qsCEL2u23jYU3GEfU13BiweJPkBX3Ba');

  I.see('merry', leasingTxPage.fields.recipient);
  I.waitForVisible(leasingTxPage.fields.recipient);
  I.click(leasingTxPage.fields.recipient);
  I.wait(2);
  I.seeCurrentUrlEquals('/address/3PCAB4sHXgvtu5NPoen6EXR5yaNbvsEA8Fj/tx');
});