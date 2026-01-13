// Messages functionality
const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.querySelector('.chat-input input');
const sendBtn = document.querySelector('.send-btn');
const attachBtn = document.querySelector('.attach-btn');
const chatRecipientName = document.querySelector('.chat-recipient h3');
const chatRecipientSubject = document.querySelector('.chat-recipient span');
const contacts = document.querySelectorAll('.contact-card');

const conversations = {
    johnson: {
        name: 'Prof. Johnson',
        subject: 'Mathematics',
        messages: [
            { direction: 'incoming', text: "Hi Adam, I've reviewed your latest assignment.", time: '10:25 AM' },
            { direction: 'incoming', text: 'Your calculus work was excellent. You scored 92%.', time: '10:26 AM' },
            { direction: 'outgoing', text: 'Thank you, Professor! I really enjoyed those problems.', time: '10:28 AM' },
            { direction: 'incoming', text: 'Your assignment has been graded. Keep up the good work!', time: '10:30 AM' }
        ]
    },
    smith: {
        name: 'Dr. Smith',
        subject: 'Physics',
        messages: [
            { direction: 'incoming', text: 'Adam, please check the lab report feedback I sent.', time: 'Yesterday' },
            { direction: 'outgoing', text: 'Got it, I will update the data table and resubmit.', time: 'Yesterday' },
            { direction: 'incoming', text: 'Perfect. Also, prep questions for Friday\'s session.', time: 'Yesterday' }
        ]
    },
    wilson: {
        name: 'Ms. Wilson',
        subject: 'English Literature',
        messages: [
            { direction: 'incoming', text: 'Loved your take on symbolism in chapter 3.', time: '2 days ago' },
            { direction: 'incoming', text: 'Could you expand the conclusion by two paragraphs?', time: '2 days ago' },
            { direction: 'outgoing', text: 'Sure thing, I will refine the conclusion tonight.', time: '2 days ago' }
        ]
    },
    davis: {
        name: 'Prof. Davis',
        subject: 'Chemistry',
        messages: [
            { direction: 'incoming', text: 'Reminder: Office hours moved to 3 PM this week.', time: '3 days ago' },
            { direction: 'incoming', text: 'Bring your titration notes for a quick review.', time: '3 days ago' },
            { direction: 'outgoing', text: 'Thanks for the heads-up. See you then!', time: '3 days ago' }
        ]
    }
};

let activeContactId = 'johnson';

function formatTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

function createMessageBubble(direction, text, time) {
    const messageRow = document.createElement('div');
    messageRow.className = `message-row ${direction === 'outgoing' ? 'outgoing' : 'incoming'}`;

    const messageBubble = document.createElement('div');
    messageBubble.className = 'message-bubble';

    const messageText = document.createElement('p');
    messageText.textContent = text;

    const messageTime = document.createElement('span');
    messageTime.className = 'message-time';
    messageTime.textContent = time;

    messageBubble.appendChild(messageText);
    messageBubble.appendChild(messageTime);
    messageRow.appendChild(messageBubble);

    return messageRow;
}

function renderConversation(contactId) {
    const conversation = conversations[contactId];
    if (!conversation) return;

    chatRecipientName.textContent = conversation.name;
    chatRecipientSubject.textContent = conversation.subject;
    chatMessages.innerHTML = '';

    conversation.messages.forEach(({ direction, text, time }) => {
        chatMessages.appendChild(createMessageBubble(direction, text, time));
    });

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function setActiveContact(contactId) {
    activeContactId = contactId;
    contacts.forEach((card) => {
        const isActive = card.dataset.contactId === contactId;
        card.classList.toggle('active', isActive);
    });
    renderConversation(contactId);
}

function updateContactPreview(contactId, text) {
    const card = document.querySelector(`.contact-card[data-contact-id="${contactId}"] .contact-preview`);
    if (card) {
        card.textContent = text;
    }
}

function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    const time = formatTime();
    const conversation = conversations[activeContactId];
    conversation.messages.push({ direction: 'outgoing', text: message, time });

    chatMessages.appendChild(createMessageBubble('outgoing', message, time));
    chatMessages.scrollTop = chatMessages.scrollHeight;
    chatInput.value = '';

    updateContactPreview(activeContactId, message);
}

contacts.forEach((card) => {
    card.addEventListener('click', () => {
        const contactId = card.dataset.contactId;
        setActiveContact(contactId);
    });
});

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage();
    }
});

attachBtn.addEventListener('click', () => {
    alert('Attachment functionality coming soon!');
});

setActiveContact(activeContactId);
