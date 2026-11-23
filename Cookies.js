function setCookie(cookieName, cookieValue, expireDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}
function getCookie(cookieName) {
    const match = document.cookie.split('; ').find(cookie=>cookie.startsWith(cookieName + '='));
    return match ? match.split('=')[1] : null;
}
function deleteCookie (cookieName) {
    document.cookie = cookieName +  "=;  expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

}

const consentBox = document.getElementById("consentBox");
const acceptBtn = document.querySelector(".consentButton");
const rejectBtn = document.querySelector(".rejectButton");

if(getCookie("cookiesConsent") !=="accepted" ){
    consentBox.style.display = "block";
}

acceptBtn.addEventListener("click",function() {
    setCookie("cookiesConsent", "accepted", 365);
    consentBox.style.display = "none";
});

rejectBtn.addEventListener("click",function() {
    deleteCookie("cookiesConsent");
    consentBox.style.display = "none";
});




