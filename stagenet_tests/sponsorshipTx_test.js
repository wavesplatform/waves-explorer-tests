
Feature('Sponsorship transaction @stagenet');

Scenario('Header elements', (I, navigationFragment) => {
  I.openExplorer('/stagenet/tx/4ZtpwqTKD3Dy6gAWufvr5rmvpU6tMioY1janyW6zmbZH');

  within(navigationFragment.root, () => {
    I.waitForVisible(navigationFragment.backLink);

    I.see('Transaction', navigationFragment.headline.title);
    I.see('4ZtpwqTKD3Dy6gAWufvr5rmvpU6tMioY1janyW6zmbZH', navigationFragment.headline.details);
    I.waitForVisible(navigationFragment.headline.copyButton);
  });
});

Scenario('Sponsorship data parsing', (I, transactionInfoPage) => {
  I.openExplorer('/stagenet/tx/4ZtpwqTKD3Dy6gAWufvr5rmvpU6tMioY1janyW6zmbZH');

  I.see('14', transactionInfoPage.fields.type.text);
  I.see('Sponsorship', transactionInfoPage.fields.type.icon);
  I.see('1', transactionInfoPage.fields.version);

  var testDate = new Date(1579688118223);
  I.see(I.formatDateToExplorerFormat(testDate), transactionInfoPage.fields.timestamp);

  I.see('294272', transactionInfoPage.fields.block);
  I.see('24ZYZcMBKUsbEuZ8NTuH7am7rWtgtivoMv4hta1ggGAhMwEvjTXKoJvzGQcaQSxexMgGZQCGiNUcK5yTJ3GompBG', transactionInfoPage.fields.proofs);
  I.see('1 My sponsored', transactionInfoPage.fields.sponsoredFee);
  I.see('1 WAVES', transactionInfoPage.fields.transactionFee);
  I.see('3Maom8S6NrD3PodqTZ6kxauzq4Ma9xPKaoh', transactionInfoPage.fields.sender);
  I.see('2M25DqL2W4rGFLCFadgATboS8EPqyWAN3DjH12AH5Kdr', transactionInfoPage.fields.senderPublicKey);

  I.click(transactionInfoPage.fields.json.showButton);
  I.waitForVisible(transactionInfoPage.fields.json.text);
});