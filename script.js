// Get the parent element to attach the event listener
let faqs = document.getElementById('faqs');

// Add event listener for click events
faqs.addEventListener('click', e => {
    // Check if the clicked element is button
    if (e.target.classList.contains('question-btn')) {
        const target = e.target;        
        const question = target.parentElement;
        // Close all expanded answers if any
        let activeQuestion = document.querySelector('.question.active');
        if (activeQuestion !== question && activeQuestion !== null) {
            // Remove 'active' class from previously active question
            activeQuestion.classList.remove('active');
        }
        // Toggle 'active' class on the clicked question
        question.classList.toggle('active');
    }
});