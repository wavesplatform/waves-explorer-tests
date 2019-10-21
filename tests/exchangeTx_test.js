var page = require('../pages/exchangeTx.js');

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

Scenario('Exchange transaction elements', (I, exchangeTxPage) => {
  I.openExplorer('/tx/3hfT7iVcJ4MAVeaRU8yjEzWB3USHGBrVUa11M8QsscqW');

  I.waitForVisible(exchangeTxPage.fields.type.text);
  I.waitForVisible(exchangeTxPage.fields.type.icon);
  I.waitForVisible(exchangeTxPage.fields.pair.amountAsset);
  I.waitForVisible(exchangeTxPage.fields.pair.priceAsset);
  I.waitForVisible(exchangeTxPage.fields.version);
  I.waitForVisible(exchangeTxPage.fields.timestamp);
  I.waitForVisible(exchangeTxPage.fields.block);
  I.waitForVisible(exchangeTxPage.fields.proofs);
  I.waitForVisible(exchangeTxPage.fields.sender);
  I.waitForVisible(exchangeTxPage.fields.senderPublicKey);
  I.waitForVisible(exchangeTxPage.fields.amount);
  I.waitForVisible(exchangeTxPage.fields.price);
  I.waitForVisible(exchangeTxPage.fields.total);
  I.waitForVisible(exchangeTxPage.fields.fee);
  I.waitForVisible(exchangeTxPage.fields.buyMatcherFee);
  I.waitForVisible(exchangeTxPage.fields.sellMatcherFee);
  I.waitForVisible(exchangeTxPage.fields.json.showButton);
});

Scenario('Buy order elements', (I, exchangeTxPage) => {
  I.openExplorer('/tx/3hfT7iVcJ4MAVeaRU8yjEzWB3USHGBrVUa11M8QsscqW');

  I.waitForVisible(exchangeTxPage.buyOrder.fields.orderId);
  I.waitForVisible(exchangeTxPage.buyOrder.fields.timestamp);
  I.waitForVisible(exchangeTxPage.buyOrder.fields.amount);
  I.waitForVisible(exchangeTxPage.buyOrder.fields.price);
  I.waitForVisible(exchangeTxPage.buyOrder.fields.sender);
  I.waitForVisible(exchangeTxPage.buyOrder.fields.matcherFee);
});

Scenario('Sell order elements', (I, exchangeTxPage) => {
  I.openExplorer('/tx/3hfT7iVcJ4MAVeaRU8yjEzWB3USHGBrVUa11M8QsscqW');

  I.waitForVisible(exchangeTxPage.sellOrder.fields.orderId);
  I.waitForVisible(exchangeTxPage.sellOrder.fields.timestamp);
  I.waitForVisible(exchangeTxPage.sellOrder.fields.amount);
  I.waitForVisible(exchangeTxPage.sellOrder.fields.price);
  I.waitForVisible(exchangeTxPage.sellOrder.fields.sender);
  I.waitForVisible(exchangeTxPage.sellOrder.fields.matcherFee);
});

Scenario('Exchange transaction data parsing', (I, exchangeTxPage) => {
  I.openExplorer('/tx/3hfT7iVcJ4MAVeaRU8yjEzWB3USHGBrVUa11M8QsscqW');

  I.see('7', exchangeTxPage.fields.type.text);
  I.see('Exchange', exchangeTxPage.fields.type.icon);
  I.see('Kolin', exchangeTxPage.fields.pair.amountAsset);
  I.see('WBTC', exchangeTxPage.fields.pair.priceAsset);
  I.see('1', exchangeTxPage.fields.version);
  I.see('18:06:38, 23.11.2018', exchangeTxPage.fields.timestamp);
  I.see('1274917', exchangeTxPage.fields.block);
  I.see('4VSVsRbxYHP11f7DidnWSoB8rd47bK7z4Nnc6q2gAtWeMKzqEgNEPrLzfBeStYV8rEu9TY4WceKyP1TBZ9coCHwJ', exchangeTxPage.fields.proofs);
  I.see('3PJaDyprvekvPXPuAtxrapacuDJopgJRaU3', exchangeTxPage.fields.sender);
  I.see('7kPFrHDiGw1rCm7LPszuECwWYL3dMf6iMifLRDJQZMzy', exchangeTxPage.fields.senderPublicKey);
  I.see('1 Kolin', exchangeTxPage.fields.amount);
  I.see('0.00000002', exchangeTxPage.fields.price);
  I.see('0.00000002 WBTC', exchangeTxPage.fields.total);
  I.see('0.003 WAVES', exchangeTxPage.fields.fee);
  I.see('0.003 WAVES', exchangeTxPage.fields.buyMatcherFee);
  I.see('0 WAVES', exchangeTxPage.fields.sellMatcherFee);
  I.click(exchangeTxPage.fields.json.showButton);
  I.waitForVisible(exchangeTxPage.fields.json.text);
});

Scenario('Buy order data parsing', (I, exchangeTxPage) => {
  I.openExplorer('/tx/3hfT7iVcJ4MAVeaRU8yjEzWB3USHGBrVUa11M8QsscqW');

  I.see('CzeqYGJoaTvmGKw7MD6iDe9RKWEAHnJeFQCe6ANVGc7F', exchangeTxPage.buyOrder.fields.orderId);
  I.see('18:06:36, 23.11.2018', exchangeTxPage.buyOrder.fields.timestamp);
  I.see('1 Kolin', exchangeTxPage.buyOrder.fields.amount);
  I.see('0.00000002', exchangeTxPage.buyOrder.fields.price);
  I.see('3PC6vbbRvhv1ojcJwfgPT61rgpgRC7jzvod', exchangeTxPage.buyOrder.fields.sender);
  I.see('0.003 WAVES', exchangeTxPage.buyOrder.fields.matcherFee);
});

Scenario('Sell order data parsing', (I, exchangeTxPage) => {
  I.openExplorer('/tx/3hfT7iVcJ4MAVeaRU8yjEzWB3USHGBrVUa11M8QsscqW');

  I.see('FDSe9L3n9m6BvgTzUhVUfQmbMtrptrzGMgzszRWvEwZi', exchangeTxPage.sellOrder.fields.orderId);
  I.see('01:32:14, 20.11.2018', exchangeTxPage.sellOrder.fields.timestamp);
  I.see('1,623,874.01 Kolin', exchangeTxPage.sellOrder.fields.amount);
  I.see('0.00000002', exchangeTxPage.sellOrder.fields.price);
  I.see('3PC1SeGGy5imdwL94Qc86jgaFja1MBSGHPw', exchangeTxPage.sellOrder.fields.sender);
  I.see('0.003 WAVES', exchangeTxPage.sellOrder.fields.matcherFee);
});

Data(testData).Scenario('Links in fields', async (current, I) => {
  I.openExplorer('/tx/3hfT7iVcJ4MAVeaRU8yjEzWB3USHGBrVUa11M8QsscqW');

  I.waitForVisible(current.field);
  I.click(current.field);
  I.seeCurrentUrlEquals(current.link);
});