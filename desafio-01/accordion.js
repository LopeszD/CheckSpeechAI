function toggleAccordion(element) {
    var content = element.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        var allContent = document.querySelectorAll('.accordion-content');
        for (var i = 0; i < allContent.length; i++) {
            allContent[i].style.display = 'none';
        }
        content.style.display = "block";
    }
}