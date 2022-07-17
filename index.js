
// let noofdrums = document.querySelectorAll(".drum");

// for (let i = 0; i < noofdrums.length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("keydown", function (e) {
//         // alert("i got clicked!");
//         // let audio = new Audio('C:\\Drumkit starting\\Drum Kit Starting Files\\sounds\\tom-1.mp3');
//         // audio.play();

//         console.log(e.code);

//     });

// }

//const w = document.querySelectorAll("button")[0];
window.addEventListener("keydown", function (e) {
    console.log(e.code);
    if (e.code === 'KeyW') {
        let audio = new Audio('C:\\Drumkit starting\\Drum Kit Starting Files\\sounds\\tom-1.mp3');
        audio.play();
    }
    if (e.code === 'KeyA') {
        let audio = new Audio('C:\\Drumkit starting\\Drum Kit Starting Files\\sounds\\tom-2.mp3');
        audio.play();
    }
    if (e.code === 'KeyS') {
        let audio = new Audio('C:\\Drumkit starting\\Drum Kit Starting Files\\sounds\\tom-3.mp3');
        audio.play();
    }
    if (e.code === 'KeyD') {
        let audio = new Audio('C:\\Drumkit starting\\Drum Kit Starting Files\\sounds\\tom-4.mp3');
        audio.play();
    }
    if (e.code === 'KeyJ') {
        let audio = new Audio('C:\\Drumkit starting\\Drum Kit Starting Files\\sounds\\crash.mp3');
        audio.play();
    }
    if (e.code === 'KeyK') {
        let audio = new Audio('C:\\Drumkit starting\\Drum Kit Starting Files\\sounds\\crash.mp3');
        audio.play();
    }
    if (e.code === 'KeyJ') {
        let audio = new Audio('C:\\Drumkit starting\\Drum Kit Starting Files\\sounds\\crash.mp3');
        audio.play();
    }
    if (e.code === 'KeyL') {
        let audio = new Audio('C:\\Drumkit starting\\Drum Kit Starting Files\\sounds\\crash.mp3');
        audio.play();
    }

})








