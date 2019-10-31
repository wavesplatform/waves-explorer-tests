
Feature('Invoke Script transaction');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/tx/EKfZoKFfn8EohjjjwR6B5wuKJq1k21Q4NydKDFdTxafq');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('EKfZoKFfn8EohjjjwR6B5wuKJq1k21Q4NydKDFdTxafq', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Invoke Script transaction elements', (I, transactionInfoPage) => {
  I.openExplorer('/tx/EKfZoKFfn8EohjjjwR6B5wuKJq1k21Q4NydKDFdTxafq');

  I.waitForVisible(transactionInfoPage.fields.type.text);
  I.waitForVisible(transactionInfoPage.fields.type.icon);
  I.waitForVisible(transactionInfoPage.fields.version);
  I.waitForVisible(transactionInfoPage.fields.timestamp);
  I.waitForVisible(transactionInfoPage.fields.block);
  I.waitForVisible(transactionInfoPage.fields.proofs);
  
  I.waitForVisible(transactionInfoPage.fields.dappAddress);
  I.waitForVisible(transactionInfoPage.fields.callFunction);
  I.waitForVisible(transactionInfoPage.fields.payment);

  I.waitForVisible(transactionInfoPage.fields.fee);
  I.waitForVisible(transactionInfoPage.fields.sender);
  I.waitForVisible(transactionInfoPage.fields.senderPublicKey);
  I.waitForVisible(transactionInfoPage.fields.stateChanges);
  I.waitForVisible(transactionInfoPage.fields.json.showButton);
});

Scenario('Invoke Script data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/tx/EKfZoKFfn8EohjjjwR6B5wuKJq1k21Q4NydKDFdTxafq');

  I.see('16', transactionInfoPage.fields.type.text);
  I.see('Script Invocation', transactionInfoPage.fields.type.icon);
  I.see('1', transactionInfoPage.fields.version);

  var testDate = new Date(1571649015742);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('1759838', transactionInfoPage.fields.block);
  I.see('5wRffjZTEGu31od5dHcFy5V56cX3P5Y7ef9YMaaoMsbG7V1kTXdRea9DHQYXqpvKx8bAEuiGcRX1LLgVPEpm7XVo', transactionInfoPage.fields.proofs);
  
  I.see('3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW', transactionInfoPage.fields.dappAddress);
  //Function name
  I.see('writeToState', transactionInfoPage.fields.callFunction);
  //Arguments values
  I.see('some string!', transactionInfoPage.fields.callFunction);
  I.see('-123', transactionInfoPage.fields.callFunction);
  I.see('true', transactionInfoPage.fields.callFunction);
  I.see('base64:V1RGIHlvdSBsb29raW5nIGF0Pw==', transactionInfoPage.fields.callFunction);

  I.see('0.00000123 DASH', transactionInfoPage.fields.payment);

  I.see('5 feetoken', transactionInfoPage.fields.fee);
  I.see('3PC6vbbRvhv1ojcJwfgPT61rgpgRC7jzvod', transactionInfoPage.fields.sender);
  I.see('4KxkQHV5VP5a5tm5ETSEj78r9JfLUPFqZFmnQz1q878Y', transactionInfoPage.fields.senderPublicKey);
  I.see('"key": "test_string"', transactionInfoPage.fields.stateChanges);

  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});

Scenario('Link to Block info', (I, transactionInfoPage) => {
  I.openExplorer('/tx/EKfZoKFfn8EohjjjwR6B5wuKJq1k21Q4NydKDFdTxafq');

  I.waitForVisible(transactionInfoPage.fields.block);
  I.click(transactionInfoPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1759838');
});

Scenario('Link to Sender', (I, transactionInfoPage) => {
  I.openExplorer('/tx/EKfZoKFfn8EohjjjwR6B5wuKJq1k21Q4NydKDFdTxafq');

  I.waitForVisible(transactionInfoPage.fields.sender);
  I.click(transactionInfoPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3PC6vbbRvhv1ojcJwfgPT61rgpgRC7jzvod/tx');
});

Scenario('Link to DappAddress', (I, transactionInfoPage) => {
  I.openExplorer('/tx/EKfZoKFfn8EohjjjwR6B5wuKJq1k21Q4NydKDFdTxafq');

  I.waitForVisible(transactionInfoPage.fields.dappAddress);
  I.click(transactionInfoPage.fields.dappAddress);
  I.seeCurrentUrlEquals('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/tx');
});

Scenario('Link to DappAddress (Alias)', (I, transactionInfoPage) => {
  I.openExplorer('/tx/9qqnNVTjtvPmcN9ApGrd4RENFQ937uiWDow7ofYqZQmp');

  I.waitForVisible(transactionInfoPage.fields.dappAddress);
  I.click(transactionInfoPage.fields.dappAddress);
  I.wait(2);
  I.seeCurrentUrlEquals('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/tx');
});

Scenario('Link to Fee asset', (I, transactionInfoPage) => {
  I.openExplorer('/tx/EKfZoKFfn8EohjjjwR6B5wuKJq1k21Q4NydKDFdTxafq');

  I.waitForVisible(transactionInfoPage.fields.feeAsset);
  I.click(transactionInfoPage.fields.feeAsset);
  I.seeCurrentUrlEquals('/assets/8RwwkZJ373Nm6fJCgV2Lefe6FeWawUY2APujcsauUNMR');
});

Scenario('Link to Payment asset', (I, transactionInfoPage) => {
  I.openExplorer('/tx/EKfZoKFfn8EohjjjwR6B5wuKJq1k21Q4NydKDFdTxafq');

  I.waitForVisible(transactionInfoPage.fields.paymentAsset);
  I.click(transactionInfoPage.fields.paymentAsset);
  I.seeCurrentUrlEquals('/assets/B3uGHFRpSUuGEDWjqB9LWWxafQj8VTvpMucEyoxzws5H');
});