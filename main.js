




var slides = document.querySelectorAll(".slide")

var pag_slide = document.getElementById("pag_slide")

var active = 0

for (var i = 0; i < slides.length; i++){
    pag_slide.innerHTML += `<span name=${i}>●</span>`
}


pag_slide.addEventListener("click", (e) => {
    if (e.target.getAttribute("name")){
        slides[active].classList.add("hidden")
        slides[e.target.getAttribute("name")].classList.remove("hidden")
        active = e.target.getAttribute("name")
    }
})


pag_slide.addEventListener("wheel", (e)=> {



    slides[active].classList.add("hidden")
    if (active <= slides.length){
        active++

    }else {
        active = 0
    }
    slides[active].classList.remove("hidden")






})