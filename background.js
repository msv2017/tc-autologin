var origin = '';

chrome.history.onVisited.addListener(function (item) {
  if (/ci\.3plearning\.com\/viewType/i.test(item.url)) {
    origin = item.url;
  }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && /ci\.3plearning\.com\/login\.html/i.test(tab.url)) {
    chrome.tabs.sendMessage(tabId, {
      message: 'aadlogin'
    });
  }

  if (changeInfo.status === 'complete' && /ci\.3plearning\.com\/overview\.html/i.test(tab.url)) {
    chrome.tabs.sendMessage(tabId, {
      message: 'redirect',
      url: origin
    });
  }
});