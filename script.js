// public/script.js

// Function to set the active link in the taskbar
function setActive(element) {
    const links = document.querySelectorAll('.taskbar a');
    links.forEach(link => link.classList.remove('active'));
    element.classList.add('active');

    // Redirect to the page specified in the data-target attribute
    const targetPage = element.getAttribute('data-target');
    if (targetPage) {
        window.location.href = targetPage;
    }
}

// Function to send a message in the chatbot
function sendMessage() {
    const input = document.getElementById('chatbotInput');
    const message = input.value;

    if (message.trim() !== '') {
        // Display the user's message
        displayMessage('User ', message);
        input.value = ''; // Clear the input

        // Get the chatbot response based on the user's message
        const response = getChatbotResponse(message);
        displayMessage('Chatbot', response);
    }
}

// Function to display messages in the chatbot
function displayMessage(sender, message) {
    const chatbotMessages = document.getElementById('chatbotMessages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender === 'User ' ? 'user-message' : 'chatbot-message');
    messageElement.textContent = `${sender}: ${message}`;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Scroll to the bottom
}

// Function to get a programmed chatbot response
function getChatbotResponse(userMessage) {
    // Simple rule-based responses
    const responses = {
        "hello": "Hi there! How can I assist you today?",
        "how are you?": "I'm just a program, but thanks for asking! How can I help you?",
        "what is vittagya?": "Vittagya is a rural business empowerment platform that assists rural communities in establishing and expanding small businesses.",
        "help": "Sure! What do you need help with?",
        "bye": "Goodbye! Have a great day!",
    };

    // Normalize the user message to lowercase for matching
    const normalizedMessage = userMessage.toLowerCase();

    // Return the response if it exists, otherwise return a default message
    return responses[normalizedMessage] || "I'm sorry, I don't understand that. Can you please rephrase?";
}