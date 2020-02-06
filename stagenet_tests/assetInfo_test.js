
Feature('Asset Info page @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/assets/9be3uZKfMQJs6Xc9jkTK7X8DUpWcpToKLzTEs4jKeaPA');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Asset', navigationFragment.headline.title);
    I.see('9be3uZKfMQJs6Xc9jkTK7X8DUpWcpToKLzTEs4jKeaPA', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Asset Info data parsing', (I, assetInfoPage) => {
  I.openExplorer('/stagenet/assets/HFcLscWqN3hUQno18MDqPiqkhft2FUwaBpuvD7c4SjYi');

  I.see('HFcLscWqN3hUQno18MDqPiqkhft2FUwaBpuvD7c4SjYi', assetInfoPage.fields.transactionId);
  I.see('279105', assetInfoPage.fields.issueHeight);

  var testDate = new Date(1580966907048);
  I.see(I.formatDateToExplorerFormat(testDate), assetInfoPage.fields.timestamp);

  I.see('3MYVzb3RHkZj7hiFgQKcn7tDw3JZvXMM1kt', assetInfoPage.fields.issuer);
  I.see('Smart', assetInfoPage.fields.assetName);
  I.see('Smart Asset', assetInfoPage.fields.description);
  I.see('8', assetInfoPage.fields.decimals);
  I.see('true', assetInfoPage.fields.reissuable);
  I.see('1,000,000 Smart', assetInfoPage.fields.quantity);
  I.see('true', assetInfoPage.fields.scripted);
  I.see('N/A', assetInfoPage.fields.sponsoredFee);

  I.see('CONTENT_TYPE EXPRESSION', assetInfoPage.fields.script.text);
});

Scenario('Sponsored asset', (I, assetInfoPage) => {
  I.openExplorer('/stagenet/assets/1XaP9dbvVMGeARfykwn2DSSzqJu7rr9CLL7E9P3MRWU');

  I.see('1 SponsorAsset', assetInfoPage.fields.sponsoredFee);
});

Scenario('View Decompiled script', (I, assetInfoPage) => {
  I.openExplorer('/stagenet/assets/HFcLscWqN3hUQno18MDqPiqkhft2FUwaBpuvD7c4SjYi');

  assetInfoPage.switchToBase64View();
  I.see('base64:AwZd0cYf', assetInfoPage.fields.script.text);
});