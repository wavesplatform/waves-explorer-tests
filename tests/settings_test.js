
Feature('Settings');

Scenario('Settings elements', (I, sideMenuFragment, settingsFragment) => {
  I.openExplorer();

  within(sideMenuFragment.root, function() {
    I.waitForVisible(sideMenuFragment.network.settings);
    I.click(sideMenuFragment.network.settings);
  });

  I.waitForVisible(settingsFragment.root);
  within(settingsFragment.root, function() {
    I.waitForVisible(settingsFragment.title);
    I.waitForVisible(settingsFragment.closeIcon);
    I.waitForVisible(settingsFragment.network);
    I.waitForVisible(settingsFragment.nodeAddress);
    I.waitForVisible(settingsFragment.copyAddress);
    I.waitForVisible(settingsFragment.saveButton);

    I.click(settingsFragment.closeIcon);
  });

  I.waitForInvisible(settingsFragment.root);
});
