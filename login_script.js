var username = ''
var password = ''


// if myConfig() exists as function, execute.
if (typeof myConfig() == 'function') {
    myConfig();
}
//Bypass LMS password by autofill and auto-submit
document.getElementById("loginForm").userId.value = username;
document.getElementById("loginForm").password.value = password;
document.getElementById("loginForm").submit();

async function getFromStorage() {
    return new Promise(resolve => {
        chrome.storage.local.get((data) => {
            resolve(data)
        });
    });
}