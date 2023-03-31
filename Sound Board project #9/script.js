//array of sounds with sound names
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

//select buttons DIV
const buttonsContainer = document.getElementsByClassName("buttons")[0];

//create a function that creates a button for each sound and appends them to the buttons DIV
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  //btn class for CSS
  btn.classList.add("btn");

  btn.innerText = sound;

  //inner event Listener that on each click plays the audio under the ID of each sound
  btn.addEventListener("click", () => {
    //calls external function to stop current playing audio if another one is played
    stopPlay();
    document.getElementById(sound).play();
  });

  buttonsContainer.appendChild(btn);
});

//function that pauses audio with id from the array and resets its timer
const stopPlay = function () {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
};
