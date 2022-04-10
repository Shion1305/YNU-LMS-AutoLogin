let loginForm = document.getElementById("loginForm");
getFromStorage();

async function getFromStorage() {
    return new Promise(resolve => {
        chrome.storage.local.get((data) => {
            console.log(data.userData);
            if (data.userData === undefined) {
                loginForm.addEventListener("submit", async (event) => {
                    let data = {
                        userData: {
                            username: loginForm.userId.value,
                            password: loginForm.password.value
                        }
                    };
                    chrome.storage.local.set(data);
                });
            } else {
                if (document.getElementById("addMess2") === null) {
                    loginForm.userId.value = data.userData.username;
                    loginForm.password.value = data.userData.password;
                    loginForm.submit();
                } else {
                    chrome.storage.local.clear();
                }
            }
        });
    });
}