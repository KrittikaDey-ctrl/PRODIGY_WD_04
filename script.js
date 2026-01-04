// Simple scroll reveal logic
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.project-card');
    const triggerBottom = window.innerHeight / 5 * 4;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Initialize card styles for the animation
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s ease-out';
});