
Feature('Mass Transfer transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/76D1acmSeuBgijfCykZHUSvJMLARFuKUtBuUAvVyLTYc');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('76D1acmSeuBgijfCykZHUSvJMLARFuKUtBuUAvVyLTYc', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Mass Transfer data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/76D1acmSeuBgijfCykZHUSvJMLARFuKUtBuUAvVyLTYc');

  I.see('11', transactionInfoPage.fields.type.text);
  I.see('Mass Payment', transactionInfoPage.fields.type.icon);
  I.see('1', transactionInfoPage.fields.version);

  var testDate = new Date(1577446453499);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('260181', transactionInfoPage.fields.block);
  I.see('4PKyeDmxhuHdbou9Am9vS3UfDQ72eeCUCgZu9Ho5HRYsFirSsvjNsVoNGN7TJjQXLrNqPQEnZmiLPbwx8kHm1irh', transactionInfoPage.fields.proofs);
  I.see('0.04532641 WAVES', transactionInfoPage.fields.totalAmount);
  I.see('100', transactionInfoPage.fields.transfersCount);
  I.see('Some text!', transactionInfoPage.fields.attachment);
  I.see('0.051 WAVES', transactionInfoPage.fields.fee);
  I.see('3MRXWDTXtSc1iRHiTwn23K2qhyLc1hCioMC', transactionInfoPage.fields.sender);
  I.see('FB5ErjREo817duEBBQUqUdkgoPctQJEYuG3mU7w3AYjc', transactionInfoPage.fields.senderPublicKey);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);

  I.see('3MTHaQ92o94KYYxMMBj72BNQkhbd4YmdQQq', transactionInfoPage.transfers.tableRow.recipient);
  I.see('0.00014202 WAVES', transactionInfoPage.transfers.tableRow.amount);
});