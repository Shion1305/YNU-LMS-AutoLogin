
async function getFromStorage() {
    return new Promise(resolve => {
        chrome.storage.local.get((data) => {
            resolve(data)
        });
    });
}