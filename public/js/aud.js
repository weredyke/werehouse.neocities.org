      let mySongs = ["https://files.catbox.moe/13ulve.wav" ];

         let x = Math.floor(Math.random() * mySongs.length);
  var element = document.getElementById('myAudio');
  var myDiv = document.getElementById('song');

function songChooser(mySongs){
  return mySongs[x];
}

window.addEventListener('load', (event) => {
  let createAudio = `
<audio id="myAudio" autoplay controls>
<source src="${songChooser(mySongs)}">
        `;
    myDiv.innerHTML = createAudio;
});
