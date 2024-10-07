// Description: A fun little show off to demonstrate how to use localStorage to store user consent for cookies.
document.addEventListener('DOMContentLoaded', function () {
    var consent = localStorage.getItem('cookieConsent');
    if (consent !== 'given') {
        document.getElementById('cookieConsentModal').style.display = 'block';
    }
    // When accepted the display disappears and the consent is stored in localStorage
    document.getElementById('acceptCookies').addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'given');
        document.getElementById('cookieConsentModal').style.display = 'none';
    });
    // When rejected the user is redirected to google.com
    // A legal grey area, and morally questionable
    // But funny anyway!
    document.getElementById('declineCookies').addEventListener('click', function() {
        window.location.href = 'https://google.com';
    });
});
