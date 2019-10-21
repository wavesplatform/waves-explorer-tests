
Feature('Peers');

Scenario('Peers elements', (I, peersPage) => {
  I.openExplorer('/peers');

  I.waitForVisible(peersPage.title);
  I.waitForVisible(peersPage.connectionsCount);

  //Headers
  I.waitForVisible(peersPage.header.address);
  I.waitForVisible(peersPage.header.declaredAddress);
  I.waitForVisible(peersPage.header.nodeName);
  I.waitForVisible(peersPage.header.nodeNonce);

  //Table content
  I.waitForVisible(peersPage.tableRow.address);
  I.waitForVisible(peersPage.tableRow.declaredAddress);
  I.waitForVisible(peersPage.tableRow.nodeName);
  I.waitForVisible(peersPage.tableRow.nodeNonce);
});

Scenario('Connections count', async (I, peersPage) => {
  I.openExplorer('/peers');

  var listCount = await I.grabNumberOfVisibleElements(peersPage.tableRow.address);
  I.see(listCount, peersPage.connectionsCount);
});