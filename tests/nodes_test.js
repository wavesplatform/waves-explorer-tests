
Feature('Nodes');

Scenario('Nodes elements', (I, nodesPage) => {
  I.openExplorer('/nodes');

  I.waitForVisible(nodesPage.title);

  //Headers
  I.waitForVisible(nodesPage.header.node);
  I.waitForVisible(nodesPage.header.version);
  I.waitForVisible(nodesPage.header.height);
  I.waitForVisible(nodesPage.header.baseTarget);
  I.waitForVisible(nodesPage.header.utxs);
  I.waitForVisible(nodesPage.header.maintainer);

  //Table content
  I.waitForVisible(nodesPage.tableRow.node);
  I.waitForVisible(nodesPage.tableRow.version);
  I.waitForVisible(nodesPage.tableRow.height);
  I.waitForVisible(nodesPage.tableRow.baseTarget);
  I.waitForVisible(nodesPage.tableRow.utxs);
  I.waitForVisible(nodesPage.tableRow.maintainer);
});
