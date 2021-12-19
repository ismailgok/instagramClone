const follow = document.getElementById("comment_input")
const shareBtn = document.querySelector(".share")


follow.addEventListener("keyup", function(e) {

    if (e.target.value !== "") {
        shareBtn.style.transition = "all 0.4s ease"
        shareBtn.style.opacity = "1"
        shareBtn.style.cursor = "pointer"
    }


    if (e.target.value === "") {
        shareBtn.style.opacity = "0.2"

        console.log(e.target.value);
    }


});