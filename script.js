var progressBar = {
    leftHalf: document.querySelector(".left-half"),
    rightHalf: document.querySelector(".right-half"),
    indicator: document.querySelector(".percentage")
};

progressBar.progress = function (percentage) {
    if (percentage > 100) {
        percentage = 100;
    }

    if (percentage < 0) {
        percentage = 0;
    }

    if (percentage <= 50) {
        this.leftHalf.style.visibility = "hidden";
        this.leftHalf.style.transform = "rotate(180deg)";
        this.rightHalf.style.transform = "rotate(" + (percentage * 3.6) + "deg)";
    } else {
        this.leftHalf.style.visibility = "visible";
        this.rightHalf.style.transform = "rotate(180deg)";
        this.leftHalf.style.transform = "rotate(" + (percentage * 3.6) + "deg)";
    }
    this.indicator.innerText = Math.round(percentage) + "%";
}

progressBar.progress(67);