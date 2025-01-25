let currentTabId = null;

browser.tabs.onActivated.addListener(activeInfo => {
  currentTabId = activeInfo.tabId;
});

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getTabId") {
    sendResponse(currentTabId || sender.tab.id);
  }
});