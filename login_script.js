var username='b2164027'
var password=''

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