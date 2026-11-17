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
    document.cookie = cookieName +  "=;  expires=Thu, 18 Dec 2042 12:00:00 UTC; path=/";

}
