
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

Scenario('Invoke Script transaction elements', (I, invokeScriptTxPage) => {
  I.openExplorer('/tx/EKfZoKFfn8EohjjjwR6B5wuKJq1k21Q4NydKDFdTxafq');

  I.waitForVisible(invokeScriptTxPage.fields.type.text);
  I.waitForVisible(invokeScriptTxPage.fields.type.icon);
  I.waitForVisible(invokeScriptTxPage.fields.version);
  I.waitForVisible(invokeScriptTxPage.fields.timestamp);
  I.waitForVisible(invokeScriptTxPage.fields.block);
  I.waitForVisible(invokeScriptTxPage.fields.proofs);
  
  I.waitForVisible(invokeScriptTxPage.fields.dappAddress);
  I.waitForVisible(invokeScriptTxPage.fields.callFunction);
  I.waitForVisible(invokeScriptTxPage.fields.payment);

  I.waitForVisible(invokeScriptTxPage.fields.fee);
  I.waitForVisible(invokeScriptTxPage.fields.sender);
  I.waitForVisible(invokeScriptTxPage.fields.senderPublicKey);
  I.waitForVisible(invokeScriptTxPage.fields.stateChanges);
  I.waitForVisible(invokeScriptTxPage.fields.json.showButton);
});

Scenario('Invoke Script data parsing', (I, invokeScriptTxPage) => {
  I.openExplorer('/tx/EKfZoKFfn8EohjjjwR6B5wuKJq1k21Q4NydKDFdTxafq');

  I.see('16', invokeScriptTxPage.fields.type.text);
  I.see('Script Invocation', invokeScriptTxPage.fields.type.icon);
  I.see('1', invokeScriptTxPage.fields.version);
  I.see('12:10:15, 21.10.2019', invokeScriptTxPage.fields.timestamp);
  I.see('1759838', invokeScriptTxPage.fields.block);
  I.see('5wRffjZTEGu31od5dHcFy5V56cX3P5Y7ef9YMaaoMsbG7V1kTXdRea9DHQYXqpvKx8bAEuiGcRX1LLgVPEpm7XVo', invokeScriptTxPage.fields.proofs);
  
  I.see('3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW', invokeScriptTxPage.fields.dappAddress);
  //Function name
  I.see('writeToState', invokeScriptTxPage.fields.callFunction);
  //Arguments values
  I.see('some string!', invokeScriptTxPage.fields.callFunction);
  I.see('-123', invokeScriptTxPage.fields.callFunction);
  I.see('true', invokeScriptTxPage.fields.callFunction);
  I.see('base64:V1RGIHlvdSBsb29raW5nIGF0Pw==', invokeScriptTxPage.fields.callFunction);

  I.see('0.00000123 DASH', invokeScriptTxPage.fields.payment);

  I.see('5 feetoken', invokeScriptTxPage.fields.fee);
  I.see('3PC6vbbRvhv1ojcJwfgPT61rgpgRC7jzvod', invokeScriptTxPage.fields.sender);
  I.see('4KxkQHV5VP5a5tm5ETSEj78r9JfLUPFqZFmnQz1q878Y', invokeScriptTxPage.fields.senderPublicKey);
  I.see('"key": "test_string"', invokeScriptTxPage.fields.stateChanges);

  I.click(invokeScriptTxPage.fields.json.showButton);
  I.waitForVisible(invokeScriptTxPage.fields.json.text);
});

Scenario('Link to Block info', (I, invokeScriptTxPage) => {
  I.openExplorer('/tx/EKfZoKFfn8EohjjjwR6B5wuKJq1k21Q4NydKDFdTxafq');

  I.waitForVisible(invokeScriptTxPage.fields.block);
  I.click(invokeScriptTxPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1759838');
});

Scenario('Link to Sender', (I, invokeScriptTxPage) => {
  I.openExplorer('/tx/EKfZoKFfn8EohjjjwR6B5wuKJq1k21Q4NydKDFdTxafq');

  I.waitForVisible(invokeScriptTxPage.fields.sender);
  I.click(invokeScriptTxPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3PC6vbbRvhv1ojcJwfgPT61rgpgRC7jzvod/tx');
});

Scenario('Link to DappAddress', (I, invokeScriptTxPage) => {
  I.openExplorer('/tx/EKfZoKFfn8EohjjjwR6B5wuKJq1k21Q4NydKDFdTxafq');

  I.waitForVisible(invokeScriptTxPage.fields.dappAddress);
  I.click(invokeScriptTxPage.fields.dappAddress);
  I.seeCurrentUrlEquals('/address/3P94WBB8fPrFsrBRugeyT9xFymZEbHMaLWW/tx');
});
