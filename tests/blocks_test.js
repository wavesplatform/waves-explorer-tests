
Feature('Blocks page');

var assert = require('chai').assert

Scenario('Blocks list elements', (I, blocksPage) => {
  I.openExplorer('/blocks');

  I.waitForVisible(blocksPage.title);

  //Navigator
  I.waitForVisible(blocksPage.navigator.first);
  I.waitForVisible(blocksPage.navigator.last);
  I.waitForVisible(blocksPage.navigator.nextFive);
  I.waitForVisible(blocksPage.navigator.currentPage);

  //Table headers
  I.waitForVisible(blocksPage.header.height);
  I.waitForVisible(blocksPage.header.baseTarget);
  I.waitForVisible(blocksPage.header.generator);
  I.waitForVisible(blocksPage.header.txCount);

  //Block row
  I.waitForVisible(blocksPage.blockRow.icon);
  I.waitForVisible(blocksPage.blockRow.height);
  I.waitForVisible(blocksPage.blockRow.timestamp);
  I.waitForVisible(blocksPage.blockRow.baseTarget);
  I.waitForVisible(blocksPage.blockRow.generator);
  I.waitForVisible(blocksPage.blockRow.signature);
  I.waitForVisible(blocksPage.blockRow.txCount);
});

Scenario('Navigation: Last/First page', async (I, blocksPage) => {
  I.openExplorer('/blocks');

  I.say('Current page is 1');
  I.waitForVisible(blocksPage.navigator.currentPage);
  I.see('1', blocksPage.navigator.currentPage);
  I.waitForVisible(blocksPage.blockRow.height);
  var height = await I.grabTextFrom(blocksPage.blockRow.height);

  I.say('Click on Last page');
  I.click(blocksPage.navigator.last);
  
  I.say('Current page is not 1');
  var pageNum = await I.grabTextFrom(blocksPage.navigator.currentPage);
  assert.notEqual(pageNum, '1');

  I.say('Check that table updates');
  I.wait(2);
  I.dontSee(height[0], blocksPage.blockRow.height);

  I.say('Click on First page');
  I.click(blocksPage.navigator.first);
  I.say('Current page is 1');
  I.see('1', blocksPage.navigator.currentPage);
});

Scenario('Navigation: Next/Prev 5 pages', async (I, blocksPage) => {
  I.openExplorer('/blocks');

  I.say('Current page is 1');
  I.waitForVisible(blocksPage.navigator.currentPage);
  I.see('1', blocksPage.navigator.currentPage);
  I.waitForVisible(blocksPage.blockRow.height);
  var height = await I.grabTextFrom(blocksPage.blockRow.height);

  I.say('Click on Next 5 pages (...)');
  I.click(blocksPage.navigator.nextFive);
  I.say('Current page is 6');
  I.see('6', blocksPage.navigator.currentPage);
  I.say('Check that table updates');
  I.wait(2);
  I.dontSee(height[0], blocksPage.blockRow.height);

  I.say('Click on Prev 5 pages (...)');
  I.click(blocksPage.navigator.prevFive);
  I.say('Current page is 5');
  I.see('5', blocksPage.navigator.currentPage);
});

Scenario('Navigation: Page numbers', async (I, blocksPage) => {
  I.openExplorer('/blocks');

  I.say('Current page is 1');
  I.waitForVisible(blocksPage.navigator.currentPage);
  I.see('1', blocksPage.navigator.currentPage);
  I.waitForVisible(blocksPage.blockRow.height);
  var height = await I.grabTextFrom(blocksPage.blockRow.height);

  I.say('Click on page 4');
  I.click(blocksPage.navigator.getPageByNum('4'));
  I.say('Current page is 4');
  I.see('4', blocksPage.navigator.currentPage);
  I.say('Check that table updates');
  I.wait(2);
  I.dontSee(height[0], blocksPage.blockRow.height);

  I.say('Click on page 2');
  I.click(blocksPage.navigator.getPageByNum('2'));
  I.say('Current page is 2');
  I.see('2', blocksPage.navigator.currentPage);
});

Scenario('Block height link', async (I, blocksPage) => {
  I.openExplorer('/blocks');

  I.waitForVisible(blocksPage.blockRow.height);
  var height = await I.grabTextFrom(blocksPage.blockRow.height);

  I.click(blocksPage.blockRow.height);
  I.seeCurrentUrlEquals(`/blocks/${height[0]}`);
});

Scenario('Block generator link', async (I, blocksPage) => {
  I.openExplorer('/blocks');

  I.waitForVisible(blocksPage.blockRow.generator);
  var generator = await I.grabTextFrom(blocksPage.blockRow.generator);

  I.click(blocksPage.blockRow.generator);
  I.seeCurrentUrlEquals(`/address/${generator[0]}/tx`);
});
