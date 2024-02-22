function validateForm() {
    let form = document.forms["contactForm"];
    let email = form["email"].value;
    let phone = form["phone"].value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    let consent = form["consent"].checked;
    let captchaResponse = form["captcha"].value;
    let country = form["country"].value;
    let validPhone = false;

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return false;
    }

    // Phone validation
    switch (country) {
        case 'br':
            validPhone = /^55\d{10,11}$/.test(phone);
            break;
        case 'pt':
            validPhone = /^351\d{9}$/.test(phone);
            break;
        case 'us': 
            validPhone = /^1\d{10}$/.test(phone);
            break;
        case 'es':
            validPhone = /^34\d{9}$/.test(phone);
            break;
        case 'fr':
            validPhone = /^33\d{9}$/.test(phone);
            break;
        default:
            validPhone = false; 
    }

    if (!validPhone) {
        alert("Por favor, insira um número de telefone válido, incluindo o código do país e o código de área.");
        return false;
    }

    // Accept terms validation
    if (!consent) {
        alert("Você deve concordar com a política de privacidade.");
        return false;
    }

    // Captcha validation
    if (captchaResponse != "7") {
        alert("Resposta do captcha incorreta.");
        return false;
    }

    return true; // Form valid
}

function updatePhoneCode(countryCode) {
    var phoneInput = document.forms['contactForm']['phone']; 
    switch (countryCode) {
        case 'br':
            phoneInput.placeholder = "+55";
            break;
        case 'pt':
            phoneInput.placeholder = "+351";
            break;
        case 'us':
            phoneInput.placeholder = "+1";
            break;
        case 'es':
            phoneInput.placeholder = "+34";
            break;
        case 'fr':
            phoneInput.placeholder = "+33";
            break;
        default:
            phoneInput.placeholder = "Telefone";
            break;
    }
}
