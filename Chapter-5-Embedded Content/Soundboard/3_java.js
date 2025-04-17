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
    const button = document.getElementById(`btn-${sound.id}`);
    const audio = new Audio(`./audio/${sound.file}`);
  
    button.addEventListener("click", () => {
      audio.currentTime = 0;
      audio.play();
  
      button.classList.add("active");
      setTimeout(() => {
        button.classList.remove("active");
      }, 300);
    });
  });
  