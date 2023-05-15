// this is the date for holding which page we're on
let pageNumber = 0

// have the content of these pages
const pages = [
  {
    copy: "a computing and languages student @ tud",
    background: "#edc7a9",
    circle: "#3e78ed"
  },
  {
    copy: "new international student officer @ tudsu",
    background: "#a1fffe",
    circle: "#e34a47"
  },
  {
    copy: "looking for a job at the start of july",
    background: "#d3c7f3",
    circle: "#f7fe00"
  },
  {
    copy: 'letting you <a href="https://www.linkedin.com/in/marconocerino/">check my linkedin</a>',
    background: "#faffb8",
    circle: "#b472e6"
  }
]

// pick the relevant tag
const nextTag = document.querySelector('footer img.next')
const previousTag = document.querySelector('footer img.prev')
const randomTag = document.querySelector('footer img.random')
const outputTag = document.querySelector('h2')
const circleTag = document.querySelector('section div.circle')
const bodyTag = document.querySelector('body')

// make a function to increase the page number
const next = function() {
  pageNumber++
  
  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }
  
  updateSection()
}

// make a function to decrease the page number
const previous = function() {
  pageNumber--
  
  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }
  
  updateSection()
}

// make a function to randomize the page number
const random = function() {
  pageNumber = Math.floor( Math.random() * pages.length )
  updateSection()
}

const updateSection = function() {
  outputTag.innerHTML = pages[pageNumber].copy
  circleTag.style.backgroundColor = pages[pageNumber].circle
  bodyTag.style.backgroundColor = pages[pageNumber].background
}

// on click of nextTag, do this
nextTag.addEventListener('click', function() {
  next()
})

// on click of previousTag, do this
previousTag.addEventListener('click', function() {
  previous()
})

// on click of randomTag, do this
randomTag.addEventListener('click', function() {
  random()
})

// when a user presses a key, check for arrows left or right
// and do next or prev correctly
document.addEventListener('keyup', function(event) {
  // if the key being pressed is arrow right
  if (event.key == "ArrowRight") {
    next()
  }
  
  // if the key being pressed is arrow left
  if (event.key == "ArrowLeft") {
    previous()
    
  }
})