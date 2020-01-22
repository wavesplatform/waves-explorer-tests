
Feature('Transfer transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/71hHgknUid1LV5xw16C2q1H7zX9gm5hyAHt13u1wYiny');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('71hHgknUid1LV5xw16C2q1H7zX9gm5hyAHt13u1wYiny', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Transaction data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/71hHgknUid1LV5xw16C2q1H7zX9gm5hyAHt13u1wYiny');

  I.see('4', transactionInfoPage.fields.type.text);
  I.see('Asset Transfer', transactionInfoPage.fields.type.icon);
  I.see('2', transactionInfoPage.fields.version);

  var testDate = new Date(1577446497867);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('260181', transactionInfoPage.fields.block);
  I.see('E7CSsvrxiCD1Aksf6XKgkFDAM6cjJnCm7jdn4k4rUT2AK4QmSnXCT9CABzFwaXy4QmGFYZoeMiWYci52yoTfZfP', transactionInfoPage.fields.proofs);
  I.see('merry', transactionInfoPage.fields.recipient);
  I.see('0.00400001 000_MyToken', transactionInfoPage.fields.amount);
  I.see('0.001 WAVES', transactionInfoPage.fields.fee);
  I.see('Some Comment!', transactionInfoPage.fields.attachment);
  I.see('3MRXWDTXtSc1iRHiTwn23K2qhyLc1hCioMC', transactionInfoPage.fields.sender);
  I.see('FB5ErjREo817duEBBQUqUdkgoPctQJEYuG3mU7w3AYjc', transactionInfoPage.fields.senderpPublicKey);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
})
