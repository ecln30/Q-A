const question = document.querySelectorAll(".question")
const answer = document.querySelectorAll(".answer")

question.forEach( question => {
    question.addEventListener("click", showAnswer)
})


function showAnswer(e) {
   const el = e.target
   console.log("Hello")
   const imgEl = el.parentElement.nextElementSibling
   const answerEl = el.nextElementSibling
   el.classList.toggle("active")
   imgEl.classList.toggle("arrow")
   answerEl.classList.toggle("showAnswer")
}

































































