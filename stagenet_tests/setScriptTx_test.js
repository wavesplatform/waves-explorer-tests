
Feature('Set Script transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/FYTaapV7EFKJh72177rBVVXJwoPFVqhcjpsHwNVxnBds');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('FYTaapV7EFKJh72177rBVVXJwoPFVqhcjpsHwNVxnBds', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Set Script data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/FYTaapV7EFKJh72177rBVVXJwoPFVqhcjpsHwNVxnBds');

  I.see('13', transactionInfoPage.fields.type.text);
  I.see('Script', transactionInfoPage.fields.type.icon);
  I.see('1', transactionInfoPage.fields.version);

  var testDate = new Date(1579686640449);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('294251', transactionInfoPage.fields.block);
  I.see('6sq8FKZHY8F864qQjPAeD1GN8pfJk29DzazRgjoFhQJLsfDXYTtT1NcRzj3CrHrwFfC5fATRiN23DvUeiQmP9CN', transactionInfoPage.fields.proofs);
  
  I.see('base64:AAIDAAAAAAAAAA8', transactionInfoPage.fields.script.text);

  I.see('0.01 WAVES', transactionInfoPage.fields.fee);
  I.see('3MakWfAEmsCAJTskba14B9WmYJfPRJJ49gP', transactionInfoPage.fields.sender);

  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});

Scenario('View Decompiled script', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/FYTaapV7EFKJh72177rBVVXJwoPFVqhcjpsHwNVxnBds');

  transactionInfoPage.switchToDecompiledView();
  I.wait(2);

  I.see('func send (address)', transactionInfoPage.fields.script.text);
});