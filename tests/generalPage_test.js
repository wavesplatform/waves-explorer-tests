
Feature('General Page');

Scenario('Logo and info box elements', (I, generalPage) => {
  I.openExplorer();
  
  I.waitForVisible(generalPage.logo);

  I.waitForVisible(generalPage.infoBox.block);
  I.waitForVisible(generalPage.infoBox.version);
  I.waitForVisible(generalPage.infoBox.currentHeight);
  I.waitForVisible(generalPage.infoBox.baseTarge);
  I.waitForVisible(generalPage.infoBox.blockDelay);
  I.waitForVisible(generalPage.infoBox.delayTooltip);
});

Scenario('Last blocks elements', (I, generalPage) => {
  I.openExplorer();

  I.waitForVisible(generalPage.lastBlocks.block);
  I.waitForVisible(generalPage.lastBlocks.title);
  I.waitForVisible(generalPage.lastBlocks.allBlocksLink);

  I.waitForVisible(generalPage.lastBlocks.row.block);
  I.waitForVisible(generalPage.lastBlocks.row.icon);
  I.waitForVisible(generalPage.lastBlocks.row.text);
  I.waitForVisible(generalPage.lastBlocks.row.signature);
  I.waitForVisible(generalPage.lastBlocks.row.timestamp);
  I.waitForVisible(generalPage.lastBlocks.row.blockLink);
});

Scenario('UTX elements', (I, generalPage) => {
  I.openExplorer();

  I.waitForVisible(generalPage.utx.block);
  I.waitForVisible(generalPage.utx.title, 30);

  I.waitForVisible(generalPage.utx.row.block);
  I.waitForVisible(generalPage.utx.row.txId);
  I.waitForVisible(generalPage.utx.row.info);
  I.waitForVisible(generalPage.utx.row.sender);
  I.waitForVisible(generalPage.utx.row.time);
  I.waitForVisible(generalPage.utx.row.date);
  I.waitForVisible(generalPage.utx.row.type);
});

Scenario('View all blocks link', (I, generalPage) => {
  I.openExplorer();

  I.waitForVisible(generalPage.lastBlocks.allBlocksLink);
  I.click(generalPage.lastBlocks.allBlocksLink);
  I.seeCurrentUrlEquals('/blocks');
});

Scenario('Block height link', async (I, generalPage) => {
  I.openExplorer();

  I.waitForVisible(generalPage.lastBlocks.row.blockLink);
  var blockHeight = await I.grabTextFrom(generalPage.lastBlocks.row.blockLink);
  
  I.click(generalPage.lastBlocks.row.blockLink);
  I.seeCurrentUrlEquals(`/blocks/${blockHeight[0]}`);
});