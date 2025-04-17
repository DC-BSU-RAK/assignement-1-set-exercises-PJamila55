// List of sound clips with their button IDs and audio file names
const sounds = [
    { id: "01", file: "ah-ha.mp3" },
    { id: "02", file: "dan.mp3" },
    { id: "03", file: "back-of-the-net.mp3" },
    { id: "04", file: "bangoutoforder.mp3" },
    { id: "05", file: "emailoftheevening.mp3" },
    { id: "06", file: "iateascotchegg.mp3" },
    { id: "07", file: "imconfused.mp3" },
    { id: "08", file: "hellopartridge.mp3" }
  ];
  
  sounds.forEach(sound => {
    // Find the matching button by ID (e.g. btn-01)
    const button = document.getElementById(`btn-${sound.id}`);
    // Create a new audio element for the sound
    const audio = new Audio(`./audio/${sound.file}`);
  
    // When the button is clicked:
    button.addEventListener("click", () => {
      audio.currentTime = 0; // Rewind to the start (in case it was already playing)
      audio.play(); // Play the sound
  
      button.classList.add("active");
      setTimeout(() => {
        button.classList.remove("active");
      }, 300);
    });
  });
  