// Get the parent element to attach the event listener
let faqs = document.getElementById('faqs');

// Function to toggle question active state
let toggleQuestionActive = function (target) {
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

// Add event listener for click events
faqs.addEventListener('click', e => {
    // Check if the clicked element is a question text or button
    if (e.target.classList.contains('question-text') || e.target.classList.contains('question-btn')) {
        toggleQuestionActive(e.target);
    }
});

// Add event listener for keypress events
faqs.addEventListener('keypress', e => {
    // Check if the pressed key is Enter and if pressed element is a question text
    if (e.key === "Enter" && e.target.classList.contains('question-text')) {
        toggleQuestionActive(e.target);
    }
})