var video = document.getElementById("myVideo");

function myfunction() {

    if (video.paused) {
        video.play();
    } else {
        video.paused();
    }

}