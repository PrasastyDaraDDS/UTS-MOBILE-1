document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let slideIndex = 0;

    nextBtn.addEventListener("click", () => {
        if (slideIndex < slides.length - 1) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }
        updateSlider();
    });

    prevBtn.addEventListener("click", () => {
        if (slideIndex > 0) {
            slideIndex--;
        } else {
            slideIndex = slides.length - 1;
        }
        updateSlider();
    });

    function updateSlider() {
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
});
