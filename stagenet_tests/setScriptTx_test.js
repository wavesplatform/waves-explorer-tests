
Feature('Set Script transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/4RsG3ajFkLUmQuqyEdJSVdZzGD54Ashaw3Nnty5UsAJ5');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('4RsG3ajFkLUmQuqyEdJSVdZzGD54Ashaw3Nnty5UsAJ5', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Set Script data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/4RsG3ajFkLUmQuqyEdJSVdZzGD54Ashaw3Nnty5UsAJ5');

  I.see('13', transactionInfoPage.fields.type.text);
  I.see('Script', transactionInfoPage.fields.type.icon);
  I.see('1', transactionInfoPage.fields.version);

  var testDate = new Date(1580964546144);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('279063', transactionInfoPage.fields.block);
  I.see('gaiHv52BZBQmWkVezj3eVpV6bpiXGH8oMeLjNupyqVAkCGGSLfTnBtKcwr8aqe3JdxiihN82yriYzvPidRBc9Fk', transactionInfoPage.fields.proofs);
  
  I.see('func writeToState (numb,bool,str,binary)', transactionInfoPage.fields.script.text);

  I.see('0.01 WAVES', transactionInfoPage.fields.fee);
  I.see('3MXefnoNKqi38LbfXXZ4PcgwE9xZ7pdDorn', transactionInfoPage.fields.sender);

  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});

Scenario('View Decompiled script', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/4RsG3ajFkLUmQuqyEdJSVdZzGD54Ashaw3Nnty5UsAJ5');

  transactionInfoPage.switchToBase64View();
  I.see('base64:AAIDAAAAAAAAABQIARIAEgYKBAEECAISBgoEAQQIAgAAAAEBAAAAC2RlcG9z', transactionInfoPage.fields.script.text);
});