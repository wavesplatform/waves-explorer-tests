
var assert = require('chai').assert;

Feature('Block Info');

Scenario('Block info elements', { retries: 3 }, (I, blockInfoPage) => {
  I.openExplorer('/blocks/1741111');

  I.waitForVisible(blockInfoPage.backLink);
  I.see('1741111', blockInfoPage.blockTitle);

  //Fields
  I.see('1741111', blockInfoPage.fields.height.text);
  I.waitForVisible(blockInfoPage.fields.height.previous);
  I.waitForVisible(blockInfoPage.fields.height.next);
  I.see('4', blockInfoPage.fields.version);

  var testDate = new Date('2019-10-08T13:30:46Z');
  I.see(I.formatDateToExplorerFormat(testDate), blockInfoPage.fields.timestamp);

  I.see('110', blockInfoPage.fields.transactions);
  I.see('kgTLcsg8gmrh9vDAezUUWhTyt27Fs1UHrBqhFZx28jRDHFD86hzkSRqNjLcuWwXYTa1fFhGZzR2fzQRVn5wr1fg', blockInfoPage.fields.parentBlock.text);
  I.waitForVisible(blockInfoPage.fields.parentBlock.copyButton);
  I.see('3P5dg6PtSAQmdH1qCGKJWu7bkzRG27mny5i', blockInfoPage.fields.generator);
  I.see('3Rp38ju6ePcepWq8K7cNBNrGLyrJs6ToN7J9RPcNbqW3997QXxukj8rZStR6bTnrcT2E2kZ5FBaJsN64EcY5VhYf', blockInfoPage.fields.signature.text);
  I.waitForVisible(blockInfoPage.fields.signature.copyButton);
  I.see('45070 bytes', blockInfoPage.fields.size);
  I.see('0.599 WAVES', blockInfoPage.fields.totalFee);
  I.see('6 WAVES', blockInfoPage.fields.reward);

  //TXs table
  I.waitForVisible(blockInfoPage.transactionList.headline);
  I.waitForVisible(blockInfoPage.transactionList.hideList);
  I.waitForVisible(blockInfoPage.transactionList.table);
});

Scenario('Block not found', (I, blockInfoPage) => {
  I.openExplorer('/blocks/1000000000');

  I.waitForVisible(blockInfoPage.blockNotFound.icon);
  I.waitForVisible(blockInfoPage.blockNotFound.errorText);
});

Scenario('Previous/Next block button', { retries: 3 }, (I, blockInfoPage) => {
  I.openExplorer('/blocks/10000');

  I.waitForVisible(blockInfoPage.fields.height.previous);
  I.click(blockInfoPage.fields.height.previous);
  I.seeCurrentUrlEquals('/blocks/9999');

  I.wait(2);

  I.waitForVisible(blockInfoPage.fields.height.next);
  I.click(blockInfoPage.fields.height.next);
  I.seeCurrentUrlEquals('/blocks/10000');

  //Wait for nginx node block request limits
  I.wait(2);
});

Scenario('Generator link', { retries: 3 }, (I, blockInfoPage) => {
  I.openExplorer('/blocks/10000');

  I.waitForVisible(blockInfoPage.fields.generator);
  I.click(blockInfoPage.fields.generator);
  I.seeCurrentUrlEquals('/address/3PAGPDPqnGkyhcihyjMHe9v36Y4hkAh9yDy/tx');
});