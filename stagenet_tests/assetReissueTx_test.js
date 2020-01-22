
Feature('Asset Reissue transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/B58BDYKxrMQ7fvnrZx2Fs5ymrPdKhZ8Nf1WrZox7exJB');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('B58BDYKxrMQ7fvnrZx2Fs5ymrPdKhZ8Nf1WrZox7exJB', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Asset Reissue data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/B58BDYKxrMQ7fvnrZx2Fs5ymrPdKhZ8Nf1WrZox7exJB');

  I.see('5', transactionInfoPage.fields.type.text);
  I.see('Asset Reissue', transactionInfoPage.fields.type.icon);
  I.see('2', transactionInfoPage.fields.version);

  var testDate = new Date(1577446473335);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('260181', transactionInfoPage.fields.block);
  I.see('5ivtCGHARLcya6oGaKWSsPQKHjnVxfEbL4La7k1g1ubB8FiAFbsjqLCXigK7f2QH9cegxHwqFaxb1FF66Ww3yXLT', transactionInfoPage.fields.proofs);
  
  I.see('100 0TKN36342', transactionInfoPage.fields.quantity);
  I.see('true', transactionInfoPage.fields.reissuable);

  I.see('1.004 WAVES', transactionInfoPage.fields.fee);
  I.see('3MRXWDTXtSc1iRHiTwn23K2qhyLc1hCioMC', transactionInfoPage.fields.sender);
  I.see('FB5ErjREo817duEBBQUqUdkgoPctQJEYuG3mU7w3AYjc', transactionInfoPage.fields.senderPublicKey);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});
