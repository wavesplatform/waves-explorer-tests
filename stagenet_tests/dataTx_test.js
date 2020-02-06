
Feature('Data transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/GRvpZbVXNUePrevtyvVmf6MpuBVWvQo4NV19Es1VSgLc');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('GRvpZbVXNUePrevtyvVmf6MpuBVWvQo4NV19Es1VSgLc', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Data TX data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/GRvpZbVXNUePrevtyvVmf6MpuBVWvQo4NV19Es1VSgLc');

  I.see('12', transactionInfoPage.fields.type.text);
  I.see('Data', transactionInfoPage.fields.type.icon);
  I.see('1', transactionInfoPage.fields.version);

  var testDate = new Date(1580968995224);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('279150', transactionInfoPage.fields.block);
  I.see('C6ssX15sBWciN7CcvDP4MAxcH7RxHvHQsPDoUtZdG4zZfDrM8ZRnrgqdcNuZAWCUXFUybU51zwomMN72QgsZ7Xk', transactionInfoPage.fields.proofs);
  I.see('"key": "price_315629"', transactionInfoPage.fields.data);
  I.see('0.001 WAVES', transactionInfoPage.fields.fee);
  I.see('3MRzeHJTxhcAw3FhPbwPSR2ZxA7M8hA5AzV', transactionInfoPage.fields.sender);
  I.see('6evGWz6dQ8Skrd2XhAF3bGLH5reaPQUUenyRKkcBRJcK', transactionInfoPage.fields.senderPublicKey);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});
