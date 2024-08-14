let username = "";

function joinChat() {
    username = document.getElementById('username').value.trim();
    if (username) {
        document.getElementById('messageInput').disabled = false;
        document.getElementById('sendButton').disabled = false;
        document.getElementById('username').disabled = true;
        document.querySelector('button[onclick="joinChat()"]').disabled = true;
        displayMessage("You have joined the chat", "system");
    } else {
        alert("Please enter a username.");
    }
}

function sendMessage() {
    const message = document.getElementById('messageInput').value.trim();
    if (message) {
        displayMessage(message, username);
        document.getElementById('messageInput').value = "";
    }
}

function displayMessage(message, sender) {
    const chatDisplay = document.getElementById('chatDisplay');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatDisplay.appendChild(messageElement);
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

// Simulate receiving a message from a random user
setInterval(() => {
    if (username) {
        const randomMessages = ["Hello!", "How are you?", "Nice weather today.", "What's up?"];
        const randomUser = "User" + Math.floor(Math.random() * 100);
        const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
        displayMessage(randomMessage, randomUser);
    }
}, 5000); // Every 5 seconds
