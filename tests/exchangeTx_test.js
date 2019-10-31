var page = require('../pages/transactionInfo.js');

Feature('Exchange Transacrion');

var testData = new DataTable(['field', 'link']);
//Exchange
testData.add([page.fields.pair.amountAsset, '/assets/FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW']);
testData.add([page.fields.pair.priceAsset, '/assets/8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS']);
testData.add([page.fields.block, '/blocks/1274917']);
testData.add([page.fields.sender, '/address/3PJaDyprvekvPXPuAtxrapacuDJopgJRaU3/tx']);
testData.add([page.fields.amountAsset, '/assets/FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW']);
testData.add([page.fields.totalAsset, '/assets/8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS']);
//Buy Order
testData.add([page.buyOrder.fields.amountAsset, '/assets/FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW']);
testData.add([page.buyOrder.fields.sender, '/address/3PC6vbbRvhv1ojcJwfgPT61rgpgRC7jzvod/tx']);
//Sell Order
testData.add([page.sellOrder.fields.amountAsset, '/assets/FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW']);
testData.add([page.sellOrder.fields.sender, '/address/3PC1SeGGy5imdwL94Qc86jgaFja1MBSGHPw/tx']);

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/tx/3hfT7iVcJ4MAVeaRU8yjEzWB3USHGBrVUa11M8QsscqW');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('3hfT7iVcJ4MAVeaRU8yjEzWB3USHGBrVUa11M8QsscqW', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Exchange transaction elements', (I, transactionInfoPage) => {
  I.openExplorer('/tx/3hfT7iVcJ4MAVeaRU8yjEzWB3USHGBrVUa11M8QsscqW');

  I.waitForVisible(transactionInfoPage.fields.type.text);
  I.waitForVisible(transactionInfoPage.fields.type.icon);
  I.waitForVisible(transactionInfoPage.fields.pair.amountAsset);
  I.waitForVisible(transactionInfoPage.fields.pair.priceAsset);
  I.waitForVisible(transactionInfoPage.fields.version);
  I.waitForVisible(transactionInfoPage.fields.timestamp);
  I.waitForVisible(transactionInfoPage.fields.block);
  I.waitForVisible(transactionInfoPage.fields.proofs);
  I.waitForVisible(transactionInfoPage.fields.sender);
  I.waitForVisible(transactionInfoPage.fields.senderPublicKey);
  I.waitForVisible(transactionInfoPage.fields.amount);
  I.waitForVisible(transactionInfoPage.fields.price);
  I.waitForVisible(transactionInfoPage.fields.total);
  I.waitForVisible(transactionInfoPage.fields.fee);
  I.waitForVisible(transactionInfoPage.fields.buyMatcherFee);
  I.waitForVisible(transactionInfoPage.fields.sellMatcherFee);
  I.waitForVisible(transactionInfoPage.fields.json.showButton);
});

Scenario('Buy order elements', (I, transactionInfoPage) => {
  I.openExplorer('/tx/3hfT7iVcJ4MAVeaRU8yjEzWB3USHGBrVUa11M8QsscqW');

  I.waitForVisible(transactionInfoPage.buyOrder.fields.orderId);
  I.waitForVisible(transactionInfoPage.buyOrder.fields.timestamp);
  I.waitForVisible(transactionInfoPage.buyOrder.fields.amount);
  I.waitForVisible(transactionInfoPage.buyOrder.fields.price);
  I.waitForVisible(transactionInfoPage.buyOrder.fields.sender);
  I.waitForVisible(transactionInfoPage.buyOrder.fields.matcherFee);
});

Scenario('Sell order elements', (I, transactionInfoPage) => {
  I.openExplorer('/tx/3hfT7iVcJ4MAVeaRU8yjEzWB3USHGBrVUa11M8QsscqW');

  I.waitForVisible(transactionInfoPage.sellOrder.fields.orderId);
  I.waitForVisible(transactionInfoPage.sellOrder.fields.timestamp);
  I.waitForVisible(transactionInfoPage.sellOrder.fields.amount);
  I.waitForVisible(transactionInfoPage.sellOrder.fields.price);
  I.waitForVisible(transactionInfoPage.sellOrder.fields.sender);
  I.waitForVisible(transactionInfoPage.sellOrder.fields.matcherFee);
});

Scenario('Exchange transaction data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/tx/3hfT7iVcJ4MAVeaRU8yjEzWB3USHGBrVUa11M8QsscqW');

  I.see('7', transactionInfoPage.fields.type.text);
  I.see('Exchange', transactionInfoPage.fields.type.icon);
  I.see('Kolin', transactionInfoPage.fields.pair.amountAsset);
  I.see('WBTC', transactionInfoPage.fields.pair.priceAsset);
  I.see('1', transactionInfoPage.fields.version);

  var testDate = new Date(1542985598336);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('1274917', transactionInfoPage.fields.block);
  I.see('4VSVsRbxYHP11f7DidnWSoB8rd47bK7z4Nnc6q2gAtWeMKzqEgNEPrLzfBeStYV8rEu9TY4WceKyP1TBZ9coCHwJ', transactionInfoPage.fields.proofs);
  I.see('3PJaDyprvekvPXPuAtxrapacuDJopgJRaU3', transactionInfoPage.fields.sender);
  I.see('7kPFrHDiGw1rCm7LPszuECwWYL3dMf6iMifLRDJQZMzy', transactionInfoPage.fields.senderPublicKey);
  I.see('1 Kolin', transactionInfoPage.fields.amount);
  I.see('0.00000002', transactionInfoPage.fields.price);
  I.see('0.00000002 WBTC', transactionInfoPage.fields.total);
  I.see('0.003 WAVES', transactionInfoPage.fields.fee);
  I.see('0.003 WAVES', transactionInfoPage.fields.buyMatcherFee);
  I.see('0 WAVES', transactionInfoPage.fields.sellMatcherFee);
  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});

Scenario('Buy order data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/tx/3hfT7iVcJ4MAVeaRU8yjEzWB3USHGBrVUa11M8QsscqW');

  I.see('CzeqYGJoaTvmGKw7MD6iDe9RKWEAHnJeFQCe6ANVGc7F', transactionInfoPage.buyOrder.fields.orderId);

  var testDate = new Date(1542985596662);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.buyOrder.fields.timestamp);

  I.see('1 Kolin', transactionInfoPage.buyOrder.fields.amount);
  I.see('0.00000002', transactionInfoPage.buyOrder.fields.price);
  I.see('3PC6vbbRvhv1ojcJwfgPT61rgpgRC7jzvod', transactionInfoPage.buyOrder.fields.sender);
  I.see('0.003 WAVES', transactionInfoPage.buyOrder.fields.matcherFee);
});

Scenario('Sell order data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/tx/3hfT7iVcJ4MAVeaRU8yjEzWB3USHGBrVUa11M8QsscqW');

  I.see('FDSe9L3n9m6BvgTzUhVUfQmbMtrptrzGMgzszRWvEwZi', transactionInfoPage.sellOrder.fields.orderId);

  var testDate = new Date(1542666734675);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.sellOrder.fields.timestamp);

  I.see('1,623,874.01 Kolin', transactionInfoPage.sellOrder.fields.amount);
  I.see('0.00000002', transactionInfoPage.sellOrder.fields.price);
  I.see('3PC1SeGGy5imdwL94Qc86jgaFja1MBSGHPw', transactionInfoPage.sellOrder.fields.sender);
  I.see('0.003 WAVES', transactionInfoPage.sellOrder.fields.matcherFee);
});

Data(testData).Scenario('Links in fields', async (current, I) => {
  I.openExplorer('/tx/3hfT7iVcJ4MAVeaRU8yjEzWB3USHGBrVUa11M8QsscqW');

  I.waitForVisible(current.field);
  I.click(current.field);
  I.seeCurrentUrlEquals(current.link);
});