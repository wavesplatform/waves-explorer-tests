
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

Scenario('Lease Cancel transaction elements', (I, leasingCancelTxPage) => {
  I.openExplorer('/tx/6zLFLPB6SBnCmczqzuDbqRBsT8Lg3R8qzxB3bAxvjLst');

  I.waitForVisible(leasingCancelTxPage.fields.type.text);
  I.waitForVisible(leasingCancelTxPage.fields.type.icon);
  I.waitForVisible(leasingCancelTxPage.fields.version);
  I.waitForVisible(leasingCancelTxPage.fields.timestamp);
  I.waitForVisible(leasingCancelTxPage.fields.block);
  I.waitForVisible(leasingCancelTxPage.fields.proofs);
  I.waitForVisible(leasingCancelTxPage.fields.leaseId);
  I.waitForVisible(leasingCancelTxPage.fields.fee);
  I.waitForVisible(leasingCancelTxPage.fields.sender);
  I.waitForVisible(leasingCancelTxPage.fields.senderPublicKey);
  I.waitForVisible(leasingCancelTxPage.fields.json.showButton);
});

Scenario('Lease Cancel data parsing', (I, leasingCancelTxPage) => {
  I.openExplorer('/tx/6zLFLPB6SBnCmczqzuDbqRBsT8Lg3R8qzxB3bAxvjLst');

  I.see('9', leasingCancelTxPage.fields.type.text);
  I.see('Lease Cancel', leasingCancelTxPage.fields.type.icon);
  I.see('2', leasingCancelTxPage.fields.version);
  I.see('14:47:17, 26.10.2018', leasingCancelTxPage.fields.timestamp);
  I.see('1233672', leasingCancelTxPage.fields.block);
  I.see('354bxgaMx82nJ8vVKx77AESj9VCNuYjWfTq6Uia7kDR8GfzkAgCqRbvksZXNwQReT3mPfSdrvTYRY6BTTNfhcbf', leasingCancelTxPage.fields.proofs);
  I.see('665kiShWB2AJDwhh8E1AATmKdRzYEqKRpGmNcYobXVzr', leasingCancelTxPage.fields.leaseId);
  I.see('0.001 WAVES', leasingCancelTxPage.fields.fee);
  I.see('3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18', leasingCancelTxPage.fields.sender);
  I.see('27C8ksVhVFUXyngF1F8TfyCGLmkDMsm2QuTv4VvhBpJU', leasingCancelTxPage.fields.senderPublicKey);
  I.click(leasingCancelTxPage.fields.json.showButton);
  I.waitForVisible(leasingCancelTxPage.fields.json.text);
});

Scenario('Link to Block info', (I, leasingCancelTxPage) => {
  I.openExplorer('/tx/6zLFLPB6SBnCmczqzuDbqRBsT8Lg3R8qzxB3bAxvjLst');

  I.waitForVisible(leasingCancelTxPage.fields.block);
  I.click(leasingCancelTxPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1233672');
});

Scenario('Link to Leasing Tx', (I, leasingCancelTxPage) => {
  I.openExplorer('/tx/6zLFLPB6SBnCmczqzuDbqRBsT8Lg3R8qzxB3bAxvjLst');

  I.waitForVisible(leasingCancelTxPage.fields.leaseId);
  I.click(leasingCancelTxPage.fields.leaseId);
  I.seeCurrentUrlEquals('/tx/665kiShWB2AJDwhh8E1AATmKdRzYEqKRpGmNcYobXVzr');
});

Scenario('Link to Sender', (I, leasingCancelTxPage) => {
  I.openExplorer('/tx/6zLFLPB6SBnCmczqzuDbqRBsT8Lg3R8qzxB3bAxvjLst');

  I.waitForVisible(leasingCancelTxPage.fields.sender);
  I.click(leasingCancelTxPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18/tx');
});