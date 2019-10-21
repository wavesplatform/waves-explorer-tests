
Feature('Set Script transaction');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/tx/4v7wz8GkN1MGV7zSGw8h7BFqzSvz5YWUd2xtrQWrZzAK');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('4v7wz8GkN1MGV7zSGw8h7BFqzSvz5YWUd2xtrQWrZzAK', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Set Script transaction elements', (I, setScriptTxPage) => {
  I.openExplorer('/tx/4v7wz8GkN1MGV7zSGw8h7BFqzSvz5YWUd2xtrQWrZzAK');

  I.waitForVisible(setScriptTxPage.fields.type.text);
  I.waitForVisible(setScriptTxPage.fields.type.icon);
  I.waitForVisible(setScriptTxPage.fields.version);
  I.waitForVisible(setScriptTxPage.fields.timestamp);
  I.waitForVisible(setScriptTxPage.fields.block);
  I.waitForVisible(setScriptTxPage.fields.proofs);
  
  I.waitForVisible(setScriptTxPage.fields.script.text);
  I.waitForVisible(setScriptTxPage.fields.script.viewType.select);
  I.waitForVisible(setScriptTxPage.fields.script.copy);

  I.waitForVisible(setScriptTxPage.fields.fee);
  I.waitForVisible(setScriptTxPage.fields.sender);
  I.waitForVisible(setScriptTxPage.fields.senderPublicKey);
  I.waitForVisible(setScriptTxPage.fields.json.showButton);
});

Scenario('Set Script data parsing', (I, setScriptTxPage) => {
  I.openExplorer('/tx/4v7wz8GkN1MGV7zSGw8h7BFqzSvz5YWUd2xtrQWrZzAK');

  I.see('13', setScriptTxPage.fields.type.text);
  I.see('Script', setScriptTxPage.fields.type.icon);
  I.see('1', setScriptTxPage.fields.version);
  I.see('15:00:15, 26.10.2018', setScriptTxPage.fields.timestamp);
  I.see('1233683', setScriptTxPage.fields.block);
  I.see('Y3d4RHae6pv6PemcWypoRNdzMJASnv84hKVVbdnx8aiGcFeFCDsG4yVAzGEUxZK9fTm1YfPrQQ3MnGB1FMEaVPg', setScriptTxPage.fields.proofs);
  
  I.see('base64:AQQAAAAJcHV', setScriptTxPage.fields.script.text);

  I.see('0.01 WAVES', setScriptTxPage.fields.fee);
  I.see('3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18', setScriptTxPage.fields.sender);

  I.click(setScriptTxPage.fields.json.showButton);
  I.waitForVisible(setScriptTxPage.fields.json.text);
});

Scenario('Link to Block info', (I, setScriptTxPage) => {
  I.openExplorer('/tx/4v7wz8GkN1MGV7zSGw8h7BFqzSvz5YWUd2xtrQWrZzAK');

  I.waitForVisible(setScriptTxPage.fields.block);
  I.click(setScriptTxPage.fields.block);
  I.seeCurrentUrlEquals('/blocks/1233683');
});

Scenario('Link to Sender', (I, setScriptTxPage) => {
  I.openExplorer('/tx/4v7wz8GkN1MGV7zSGw8h7BFqzSvz5YWUd2xtrQWrZzAK');

  I.waitForVisible(setScriptTxPage.fields.sender);
  I.click(setScriptTxPage.fields.sender);
  I.seeCurrentUrlEquals('/address/3P5r1EXZwxJ21f3T3zvjx61RtY52QV4fb18/tx');
});

Scenario('View Decompiled script', (I, setScriptTxPage) => {
  I.openExplorer('/tx/4v7wz8GkN1MGV7zSGw8h7BFqzSvz5YWUd2xtrQWrZzAK');

  setScriptTxPage.switchToDecompiledView();
  I.wait(2);

  I.see('let publicKey', setScriptTxPage.fields.script.text);
});

Scenario('Cancel script', (I, setScriptTxPage) => {
  I.openExplorer('/tx/Dvt8GGSPJqpD35p94tsjTFDsgpaENK7GxJ9QheFqPBGw');

  I.waitForInvisible(setScriptTxPage.fields.script.text);
  I.waitForInvisible(setScriptTxPage.fields.script.viewType.select);
  I.waitForInvisible(setScriptTxPage.fields.script.copy);
  
  I.waitForVisible(setScriptTxPage.fields.script.emptyIcon);
});
