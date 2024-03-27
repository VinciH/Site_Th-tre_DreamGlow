/*Section Coulisse et répétition*/
window.onload = function(){
    let slides = document.getElementsByClassName('carousel_content');

    function addActive(slide){
        slide.classList.add('active');
    }

    function removeActive(slide){
        slide.classList.remove('active');
    }

    addActive(slides[0]);
    setInterval(function() {
        for (let i = 0; i < slides.length; i++) {
            if (i+1 == slides.length) {
                addActive(slides[0]);
                setTimeout(removeActive, 350, slides[i]);
                break;
            }
            if (slides[i].classList.contains('active')) {
                
                setTimeout(removeActive, 350, slides[i]);
                addActive(slides[i+1]);
                break;
            }
        }
    }, 1500);
};

/*Section notre équipe*/
const initSlider = () => {
    const imageList = document.querySelector(".slide .image_list");
    const slideButtons = document.querySelectorAll(".slide .slide_button");
    const sliderScrollbar = document.querySelector(".slide_scrollbar");
    const scrollbarThumb= sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    /*fonctionnalité du scrollbar*/
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;


            const boundedPostion = Math.max(0,Math.min(maxThumbPosition, newThumbPosition ));
            const scrollPosition = (boundedPostion / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPostion}px`;
            imageList.scrollLeft = scrollPosition;
        }

        const handleMouseMUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseMUp);
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseMUp);
    });
    /*fonctionnalité du bouton*/
    slideButtons.forEach(button => {
        button.addEventListener("click",() => {
            const direction = button.id === "prev_slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy ({ left: scrollAmount, behavior: "smooth" });
        });
    });
 
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    /*fonctionnalité du scrollbar*/

    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }
    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();

    });

    

}

window.addEventListener("load",initSlider);