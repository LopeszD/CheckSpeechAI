window.onload = function() {
    let consent = localStorage.getItem('cookieConsent');
    if (!consent) {
        document.getElementById('cookieConsentContainer').style.display = 'block';
    }

    document.getElementById('cookieConsentButton').onclick = function() {
        localStorage.setItem('cookieConsent', 'true');
        document.getElementById('cookieConsentContainer').style.display = 'none';
    };
};