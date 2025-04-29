// Handle chat selection
document.querySelectorAll('.chat-item').forEach(chat => {
    chat.addEventListener('click', function() {
        // Remove active class from all chats
        document.querySelectorAll('.chat-item').forEach(c => 
            c.classList.remove('active')
        );
        // Add active class to selected chat
        this.classList.add('active');
        
        // Update chat header with selected user
        const userName = this.querySelector('.chat-name').textContent;
        document.querySelector('.chat-header-name').textContent = userName;
        
        // Load chat messages (simulate)
        loadChatMessages(this.dataset.userId);
    });
});

// Simulate loading chat messages
function loadChatMessages(userId) {
    const messageList = document.querySelector('.message-list');
    // Clear existing messages
    messageList.innerHTML = '';
    
    // Add sample messages (in a real app, these would come from a backend)
    const messages = [
        { sent: false, text: 'Hello! How can I help you today?', time: '10:00 AM' },
        { sent: true, text: 'I have a question about my insurance claim', time: '10:02 AM' },
        { sent: false, text: 'Sure, I\'d be happy to help. Could you provide your claim number?', time: '10:03 AM' },
    ];
    
    messages.forEach(msg => {
        const messageEl = document.createElement('div');
        messageEl.className = `message ${msg.sent ? 'sent' : ''}`;
        messageEl.innerHTML = `
            <div class="message-bubble">
                <div class="message-text">${msg.text}</div>
                <div class="message-time">${msg.time}</div>
            </div>
        `;
        messageList.appendChild(messageEl);
    });
    
    // Scroll to bottom
    messageList.scrollTop = messageList.scrollHeight;
}

// Handle message form submission
document.querySelector('.message-input-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const input = this.querySelector('.message-input');
    const message = input.value.trim();
    
    if (message) {
        // Add message to chat (in a real app, this would be sent to a backend)
        const messageList = document.querySelector('.message-list');
        const messageEl = document.createElement('div');
        messageEl.className = 'message sent';
        messageEl.innerHTML = `
            <div class="message-bubble">
                <div class="message-text">${message}</div>
                <div class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            </div>
        `;
        messageList.appendChild(messageEl);
        
        // Clear input
        input.value = '';
        
        // Scroll to bottom
        messageList.scrollTop = messageList.scrollHeight;
    }
});

// Handle navigation icons
document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === 'dms.html') {
        link.classList.add('text-blue-500');
    }
});