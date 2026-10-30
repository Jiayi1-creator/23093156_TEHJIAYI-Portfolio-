
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert("Please fill out every field.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address. Example: xxx@gmail.com or xxx@hotmail.com");
        return false;
    }

    alert("Message sent successfully!!!");

    setTimeout(() => {
        window.location.href = "../index/index.html";
    }, 2000);

    return false;
}