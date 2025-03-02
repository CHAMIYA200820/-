function searchSong() {
  const query = document.getElementById("songQuery").value;
  if (query) {
    const youtubeUrl = `https://www.youtube.com/embed/${getYouTubeVideoId(query)}`;
    document.getElementById("youtube-player").src = youtubeUrl;
  }
}

function getYouTubeVideoId(query) {
  return "dQw4w9WgXcQ";
}

function stopMusic() {
  document.getElementById("youtube-player").src = "";
}

function openChat() {
  document.getElementById("chatContainer").style.display = 'block';
}

document.getElementById('chatInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const userInput = e.target.value;
    if (userInput) {
      addMessageToChat('You: ' + userInput);
      e.target.value = '';
      setTimeout(() => {
        addMessageToChat('AI: ' + generateAIResponse(userInput));
      }, 1000);
    }
  }
});

function addMessageToChat(message) {
  const chatBox = document.getElementById('chatBox');
  chatBox.innerHTML += `<p>${message}</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateAIResponse(input) {
  return "I'm still learning, but you asked: " + input;
}
