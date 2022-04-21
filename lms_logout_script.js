chrome.storage.local.clear().then(() => {
    let e = document.createElement("div");
    e.setAttribute("style", "width:100%; text-align:center;font-size:2.5rem; margin: auto 0;")
    e.innerHTML = "オートログイン設定をリセットしました<br>Configuration for auto-login has been deleted."
    document.getElementsByTagName('body')[0]
        .appendChild(e);
});