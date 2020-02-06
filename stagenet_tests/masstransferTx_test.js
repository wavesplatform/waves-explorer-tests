
Feature('Mass Transfer transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/EfPR2Cn8F4gF8rJJzd9PUNmJJdTAoBrBM5VTJ6iQsw6B');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('EfPR2Cn8F4gF8rJJzd9PUNmJJdTAoBrBM5VTJ6iQsw6B', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Mass Transfer data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/EfPR2Cn8F4gF8rJJzd9PUNmJJdTAoBrBM5VTJ6iQsw6B');

  I.see('11', transactionInfoPage.fields.type.text);
  I.see('Mass Payment', transactionInfoPage.fields.type.icon);
  I.see('1', transactionInfoPage.fields.version);

  var testDate = new Date(1580969073600);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('279150', transactionInfoPage.fields.block);
  I.see('ySR63qgavkdro1PDxrcDhQNCDsUdWZhff2UyzPzPRT3CQGG94eQYX6LJjSinh4qXrpTKpkeFvvSxkGcx7vPnPsR', transactionInfoPage.fields.proofs);
  I.see('0.00042606 WAVES', transactionInfoPage.fields.totalAmount);
  I.see('3', transactionInfoPage.fields.transfersCount);
  I.see('Some text!', transactionInfoPage.fields.attachment);
  I.see('0.003 WAVES', transactionInfoPage.fields.fee);
  I.see('3MYVzb3RHkZj7hiFgQKcn7tDw3JZvXMM1kt', transactionInfoPage.fields.sender);
  I.see('CKSSqFyPwucYP9cSbWxccw43jedVxipeABQCJt5EkXHT', transactionInfoPage.fields.senderPublicKey);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);

  I.see('3MXefnoNKqi38LbfXXZ4PcgwE9xZ7pdDorn', transactionInfoPage.transfers.tableRow.recipient);
  I.see('0.00014202 WAVES', transactionInfoPage.transfers.tableRow.amount);
});