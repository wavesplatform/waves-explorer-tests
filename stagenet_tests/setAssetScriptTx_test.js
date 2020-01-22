
Feature('Set Asset Script transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/FD3FNRe4gCtpASfZuP7guEgCE6fhfzSGuSVjDHjSYSbp');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('FD3FNRe4gCtpASfZuP7guEgCE6fhfzSGuSVjDHjSYSbp', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Set Script data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/FD3FNRe4gCtpASfZuP7guEgCE6fhfzSGuSVjDHjSYSbp');

  I.see('15', transactionInfoPage.fields.type.text);
  I.see('Asset Script', transactionInfoPage.fields.type.icon);
  I.see('1', transactionInfoPage.fields.version);

  var testDate = new Date(1579692971019);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('294357', transactionInfoPage.fields.block);
  I.see('4EvGSCLg1NgDdfNxrL6EezCsYE1pPHQfDByvZtHNk41Ybyt1bCkjnXTNRmdNF6aa4KveGigGSWjxE3vzWBH17dTc', transactionInfoPage.fields.proofs);
  
  I.see('Scripted Asset', transactionInfoPage.fields.asset);
  I.see('base64:AwZd0cYf', transactionInfoPage.fields.script.text);

  I.see('1 WAVES', transactionInfoPage.fields.fee);
  I.see('3Maom8S6NrD3PodqTZ6kxauzq4Ma9xPKaoh', transactionInfoPage.fields.sender);
  I.see('2M25DqL2W4rGFLCFadgATboS8EPqyWAN3DjH12AH5Kdr', transactionInfoPage.fields.senderPublicKey);

  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});

Scenario('View Decompiled script', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/FD3FNRe4gCtpASfZuP7guEgCE6fhfzSGuSVjDHjSYSbp');

  transactionInfoPage.switchToDecompiledView();
  I.wait(2);

  I.see('CONTENT_TYPE EXPRESSION', transactionInfoPage.fields.script.text);
});
