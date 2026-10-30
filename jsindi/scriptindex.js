function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.getElementById("typing");
    const roles = [
        "Sunwayian",
        "Python Programmer",
        "Web Designer",
        "Part-time Chess Coach",
        "Future Full-Stack Developer"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];
        const displayedText = currentRole.substring(0, charIndex);
        typingElement.textContent = displayedText;

        if (!isDeleting && charIndex < currentRole.length) {
            charIndex++;
            setTimeout(typeEffect, 150);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 100);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                roleIndex = (roleIndex + 1) % roles.length;
            }
            setTimeout(typeEffect, 1000);
        }
    }

    typeEffect();

    const backToTopBtn = document.getElementById("back-to-top");
    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
        });
        backToTopBtn.addEventListener("click", scrollToTop);
    }
});
