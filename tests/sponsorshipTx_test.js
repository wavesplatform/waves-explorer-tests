
Feature('Sponsorship transaction');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/tx/4dTFirQ9KP1qb8Eap5PY3BzFaZUVnZ2qPyy8HbaAftzL');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('4dTFirQ9KP1qb8Eap5PY3BzFaZUVnZ2qPyy8HbaAftzL', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Sponsorship transaction elements', (I, sponsorshipTxPage) => {
  I.openExplorer('/tx/4dTFirQ9KP1qb8Eap5PY3BzFaZUVnZ2qPyy8HbaAftzL');

  I.waitForVisible(sponsorshipTxPage.fields.type.text);
  I.waitForVisible(sponsorshipTxPage.fields.type.icon);
  I.waitForVisible(sponsorshipTxPage.fields.version);
  I.waitForVisible(sponsorshipTxPage.fields.timestamp);
  I.waitForVisible(sponsorshipTxPage.fields.block);
  I.waitForVisible(sponsorshipTxPage.fields.proofs);
  
  I.waitForVisible(sponsorshipTxPage.fields.sponsoredFee);

  I.waitForVisible(sponsorshipTxPage.fields.fee);
  I.waitForVisible(sponsorshipTxPage.fields.sender);
  I.waitForVisible(sponsorshipTxPage.fields.senderPublicKey);
  I.waitForVisible(sponsorshipTxPage.fields.json.showButton);
});

Scenario('Sponsorship data parsing', (I, sponsorshipTxPage) => {
  I.openExplorer('/tx/4dTFirQ9KP1qb8Eap5PY3BzFaZUVnZ2qPyy8HbaAftzL');

  I.see('14', sponsorshipTxPage.fields.type.text);
  I.see('Sponsorship', sponsorshipTxPage.fields.type.icon);
  I.see('1', sponsorshipTxPage.fields.version);
  I.see('14:58:00, 26.10.2018', sponsorshipTxPage.fields.timestamp);
  I.see('1233681', sponsorshipTxPage.fields.block);
  I.see('23YZYYDGa48a3SUrNuURFGor4vtSMhwWteDVwTniW3E4LFXMtAdPoUadsgKqWqqKXsR5rPX8HsEbgwLeU45vBgz1', sponsorshipTxPage.fields.proofs);
  I.see('1 Golden', sponsorshipTxPage.fields.sponsoredFee);
  I.see('1 WAVES', sponsorshipTxPage.fields.fee);
  I.see('3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18', sponsorshipTxPage.fields.sender);
  I.see('27C8ksVhVFUXyngF1F8TfyCGLmkDMsm2QuTv4VvhBpJU', sponsorshipTxPage.fields.senderPublicKey);

  I.click(sponsorshipTxPage.fields.json.showButton);
  I.waitForVisible(sponsorshipTxPage.fields.json.text);
});

Scenario('Link to Block info', (I, sponsorshipTxPage) => {
  I.openExplorer('/tx/4dTFirQ9KP1qb8Eap5PY3BzFaZUVnZ2qPyy8HbaAftzL');

  I.waitForVisible(sponsorshipTxPage.fields.block);
  I.click(sponsorshipTxPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1233681');
});

xScenario('Link to Sponsored asset', (I, sponsorshipTxPage) => {
  I.openExplorer('/tx/4dTFirQ9KP1qb8Eap5PY3BzFaZUVnZ2qPyy8HbaAftzL');

  I.waitForVisible(sponsorshipTxPage.fields.sponsoredFeeAsset);
  I.click(sponsorshipTxPage.fields.sponsoredFeeAsset);
  I.seeCurrentUrlEquals('/assets/H4r9fS7bn78CPhj7cjTYUMHz3idB2ZxRPx5HcjFRJJCX');
});

Scenario('Link to Sender', (I, sponsorshipTxPage) => {
  I.openExplorer('/tx/4dTFirQ9KP1qb8Eap5PY3BzFaZUVnZ2qPyy8HbaAftzL');

  I.waitForVisible(sponsorshipTxPage.fields.sender);
  I.click(sponsorshipTxPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18/tx');
});