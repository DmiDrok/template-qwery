function setWelcomeFull() {
  const welcome = document.querySelector(".welcome")
  welcome.style.height = window.innerHeight + 400 + "px"
}

function setCorrectSlider() {
  const slider = document.querySelector(".slider__block")
  const sliderLine = slider.querySelector(".slider__line")
  const sliderItems = slider.querySelectorAll(".slider__item")

  const prev = slider.querySelector(".slider__prev")
  const next = slider.querySelector(".slider__next")

  let offset = slider.clientWidth
  let lineOffset = 0
  const maxOffset = offset * 2

  setHandlers()

  // touches

  let startX = null
  let endX = null
  slider.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX
  })
  slider.addEventListener("touchend", (event) => {
    endX = event.changedTouches[0].clientX
    startX > endX ? moveNext() : movePrev()
  })


  function setHandlers() {
    prev.addEventListener("click", movePrev)
    next.addEventListener("click", moveNext)
  }

  function movePrev() {
    lineOffset += offset
    if (lineOffset > 0) lineOffset = -maxOffset
    sliderLine.style.left = lineOffset + "px"
  }

  function moveNext() {
    lineOffset += offset
    if (lineOffset > maxOffset) lineOffset = 0
    sliderLine.style.left = -lineOffset + "px"
  }
}

try {
  setWelcomeFull()
  setCorrectSlider()
} catch(err) {
  console.error(err)
}