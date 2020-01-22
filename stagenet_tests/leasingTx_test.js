
Feature('Leasing Transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/FZMNhQjDsVPZJJJGE4Y71c8BZrZ2PkRjsbCkx8fSbCkL');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('FZMNhQjDsVPZJJJGE4Y71c8BZrZ2PkRjsbCkx8fSbCkL', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Lease transaction data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/FZMNhQjDsVPZJJJGE4Y71c8BZrZ2PkRjsbCkx8fSbCkL');

  I.see('8', transactionInfoPage.fields.type.text);
  I.see('Lease', transactionInfoPage.fields.type.icon);
  I.see('2', transactionInfoPage.fields.version);

  var testDate = new Date(1577446437573);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('260180', transactionInfoPage.fields.block);
  I.see('2wLD4wGmY2KXrNmGEGHmwFWJd1DwPSD8LR1ta8FaYdPCvXJW2wsQUrDvaCwzT96BpjnQCyLw9K1xYYSZsZ7UY9H5', transactionInfoPage.fields.proofs);
  I.see('0.00000001 WAVES', transactionInfoPage.fields.amount);
  I.see('0.001 WAVES', transactionInfoPage.fields.fee);
  I.see('merry', transactionInfoPage.fields.recipient);
  I.see('3MRXWDTXtSc1iRHiTwn23K2qhyLc1hCioMC', transactionInfoPage.fields.sender);
  I.see('FB5ErjREo817duEBBQUqUdkgoPctQJEYuG3mU7w3AYjc', transactionInfoPage.fields.senderPublicKey);
  I.see('canceled', transactionInfoPage.fields.status);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});