const socket = io();

const userId = Date.now();
const username = `User${userId}`;

socket.on('message', (message) => {
  console.log('Received message:', message);
  displayMessage(message);
});

function displayMessage(message) {
  const chatContainer = document.getElementById('chat-container');
  const newMessage = document.createElement('div');
  newMessage.className = 'message';

  if (message && message.sender === username) {
    newMessage.classList.add('sent');
  } else {
    newMessage.classList.add('received');
  }

  // Display timestamp
  newMessage.innerHTML = `
    <span>${message.text || 'Message missing'}</span>
    <div class="timestamp">${message.timestamp || ''}</div>
  `;
  
  chatContainer.appendChild(newMessage);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function sendMessage() {
  const chatInput = document.getElementById('chat-input');
  const messageText = chatInput.value.trim();
  if (messageText) {
    const message = {
      text: messageText,
      sender: username
    };
    socket.emit('sendMessage', message);
    chatInput.value = '';
  }
}
