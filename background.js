chrome.tabs.onUpdated.addListener(async function (_, __, tab) {
    if (tab.url.includes('lms.ynu.ac.jp/lms/lginLgir')) {
    }
});
chrome.runtime.onMessage.addListener(function(request, sender) {
    chrome.tabs.update(sender.tab.id, {url: request.redirect});
});