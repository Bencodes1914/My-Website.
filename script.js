document.querySelectorAll('.question-item').forEach(button => {
    button.addEventListener('click', () => {
        const container = button.parentElement;
        
        // Close all other questions
        document.querySelectorAll('.question-container').forEach(item => {
            if (item !== container) {
                item.classList.remove('active');
            }
        });

        // Toggle current question
        container.classList.toggle('active');
    });
});
function switchLanguage(lang) {
    // Remove active class from all buttons
    document.querySelectorAll('.language-switch button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to clicked button
    document.getElementById(`${lang}Btn`).classList.add('active');

    // Here you can add your language switching logic
    if (lang === 'ru') {
        // Switch content to Russian
        console.log('Switching to Russian');
        // You can add translations here
    } else {
        // Switch content to English
        console.log('Switching to English');
        // You can add translations here
    }
}
// Added a cursor follower
const circle = document.querySelector('.cursor-follower');
    
document.addEventListener('mousemove', (e) => {
  circle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});