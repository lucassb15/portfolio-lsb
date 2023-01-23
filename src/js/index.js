window.addEventListener("scroll", () => { showmenu() });
var line = document.getElementById('active-line');
line.style.visibility = 'hidden';
showmenu = () => {
  
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        line.style.visibility = "visible";
    } else {
        line.style.visibility = "hidden";
    }
}


// PRE LOADER 
const preloader = document.querySelector('.preloader');
const fadeOutEffect = setInterval(() => {
    if (!preloader.style.opacity) {
      preloader.style.opacity = 1;
    }
    if (preloader.style.opacity > 0) {
      preloader.style.opacity -= 0.1;
    } else {
      clearInterval(fadeOutEffect);
      preloader.style.display = 'none';
    }
  }, 400);
  


// SLIDE CAROUSEL
const sliderEl = document.querySelector(".blaze-slider");


// Config slide carousel
      const blazeSlider = new BlazeSlider(sliderEl, {
        all: {
        //   enableAutoplay: true,
          slidesToScroll: 3,
          slidesToShow: 3,
          transitionDuration: 300,
          loop: true
        },
        "(max-width: 900px)": {
          slidesToShow: 2,
          slidesToShow: 2,
          slidesGap: "40px"
        },
        "(max-width: 500px)": {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      });

// listen for slide event
blazeSlider.onSlide(
    (pageIndex, firstVisibleSlideIndex, lastVisibleSlideIndex) => {
        console.log({
            pageIndex,
            firstVisibleSlideIndex,
            lastVisibleSlideIndex
        });
    }
);

ScrollReveal().reveal('.reveal-name', { delay: 300 });
