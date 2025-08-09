// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Portfolio button interactions
document.querySelectorAll('.group').forEach(button => {
    button.addEventListener('click', function() {
        const companyName = this.querySelector('h3').textContent;
        alert(`กำลังเปิด Portfolio สำหรับ ${companyName}\n(หน้านี้จะถูกพัฒนาในขั้นตอนถัดไป)`);
    });
});

// Add floating animation on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelectorAll('.floating');
    const speed = 0.5;

    parallax.forEach(element => {
        const yPos = -(scrolled * speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
});
