if (!('webkitSpeechRecognition' in window)) {
    alert("Sorry, your browser doesn't support speech recognition.");
  } else {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
  
    recognition.onstart = function() {
      console.log("Voice recognition started. Try speaking into the microphone.");
    };
  
    recognition.onerror = function(event) {
      console.error("Error occurred in recognition: " + event.error);
    };
  
    recognition.onend = function() {
      console.log("Voice recognition ended.");
    };
  
    recognition.onresult = function(event) {
      var transcript = event.results[0][0].transcript;
      console.log("You said: ", transcript);
      document.getElementById('search-input').value = transcript;
      performSearch(transcript);
    };
  
    document.getElementById('start-record-btn').addEventListener('click', function() {
      recognition.start();
    });
  
    function performSearch(query) {
      console.log("Searching for: ", query);
      // Implement your search logic here
    }
  }
  
