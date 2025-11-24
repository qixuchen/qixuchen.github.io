// Smooth scrolling for navigation links (only for single-page navigation)
document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const navHeight = document.querySelector('#navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Email obfuscation to prevent spam
document.addEventListener('DOMContentLoaded', function() {
    const emailUser = 'qchenax';
    const emailDomain = 'connect.ust.hk';
    const emailAddress = emailUser + '@' + emailDomain;

    // Update email link in About section
    const emailLink = document.getElementById('email-link');
    if (emailLink) {
        emailLink.href = 'mailto:' + emailAddress;
    }

    // Update email display in Contact section
    const contactEmail = document.getElementById('contact-email');
    if (contactEmail) {
        contactEmail.textContent = emailAddress;
    }
});
