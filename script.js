// Text-to-Speech functionality
document.getElementById("ttsBtn").addEventListener("click", () => {
  const utterance = new SpeechSynthesisUtterance(document.body.innerText);
  speechSynthesis.speak(utterance);
});
