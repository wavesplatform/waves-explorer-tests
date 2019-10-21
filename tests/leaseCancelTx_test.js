
Feature('Lease cancel transaction');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/tx/6zLFLPB6SBnCmczqzuDbqRBsT8Lg3R8qzxB3bAxvjLst');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('6zLFLPB6SBnCmczqzuDbqRBsT8Lg3R8qzxB3bAxvjLst', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Lease Cancel transaction elements', (I, transactionInfoPage) => {
  I.openExplorer('/tx/6zLFLPB6SBnCmczqzuDbqRBsT8Lg3R8qzxB3bAxvjLst');

  I.waitForVisible(transactionInfoPage.fields.type.text);
  I.waitForVisible(transactionInfoPage.fields.type.icon);
  I.waitForVisible(transactionInfoPage.fields.version);
  I.waitForVisible(transactionInfoPage.fields.timestamp);
  I.waitForVisible(transactionInfoPage.fields.block);
  I.waitForVisible(transactionInfoPage.fields.proofs);
  I.waitForVisible(transactionInfoPage.fields.leaseId);
  I.waitForVisible(transactionInfoPage.fields.fee);
  I.waitForVisible(transactionInfoPage.fields.sender);
  I.waitForVisible(transactionInfoPage.fields.senderPublicKey);
  I.waitForVisible(transactionInfoPage.fields.json.showButton);
});

Scenario('Lease Cancel data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/tx/6zLFLPB6SBnCmczqzuDbqRBsT8Lg3R8qzxB3bAxvjLst');

  I.see('9', transactionInfoPage.fields.type.text);
  I.see('Lease Cancel', transactionInfoPage.fields.type.icon);
  I.see('2', transactionInfoPage.fields.version);
  I.see('14:47:17, 26.10.2018', transactionInfoPage.fields.timestamp);
  I.see('1233672', transactionInfoPage.fields.block);
  I.see('354bxgaMx82nJ8vVKx77AESj9VCNuYjWfTq6Uia7kDR8GfzkAgCqRbvksZXNwQReT3mPfSdrvTYRY6BTTNfhcbf', transactionInfoPage.fields.proofs);
  I.see('665kiShWB2AJDwhh8E1AATmKdRzYEqKRpGmNcYobXVzr', transactionInfoPage.fields.leaseId);
  I.see('0.001 WAVES', transactionInfoPage.fields.fee);
  I.see('3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18', transactionInfoPage.fields.sender);
  I.see('27C8ksVhVFUXyngF1F8TfyCGLmkDMsm2QuTv4VvhBpJU', transactionInfoPage.fields.senderPublicKey);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});

Scenario('Link to Block info', (I, transactionInfoPage) => {
  I.openExplorer('/tx/6zLFLPB6SBnCmczqzuDbqRBsT8Lg3R8qzxB3bAxvjLst');

  I.waitForVisible(transactionInfoPage.fields.block);
  I.click(transactionInfoPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1233672');
});

Scenario('Link to Leasing Tx', (I, transactionInfoPage) => {
  I.openExplorer('/tx/6zLFLPB6SBnCmczqzuDbqRBsT8Lg3R8qzxB3bAxvjLst');

  I.waitForVisible(transactionInfoPage.fields.leaseId);
  I.click(transactionInfoPage.fields.leaseId);
  I.seeCurrentUrlEquals('/tx/665kiShWB2AJDwhh8E1AATmKdRzYEqKRpGmNcYobXVzr');
});

Scenario('Link to Sender', (I, transactionInfoPage) => {
  I.openExplorer('/tx/6zLFLPB6SBnCmczqzuDbqRBsT8Lg3R8qzxB3bAxvjLst');

  I.waitForVisible(transactionInfoPage.fields.sender);
  I.click(transactionInfoPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18/tx');
});