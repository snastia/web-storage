// local storage

console.log(localStorage)

localStorage.setItem("data", 'ksdfsfef')

const storageKey = localStorage.getItem("data")

console.log(storageKey)

localStorage.removeItem("data")

// job

const form = document.querySelector(".js-feedback-form")
const input = document.querySelector(".js-feedback-form input")
const textArea = document.querySelector(".js-feedback-form textarea")

textArea.addEventListener("input", textareaInputHandler)

function textareaInputHandler(event){
   const inputValue = event.target.value
   console.log(inputValue)
   localStorage.setItem("value", inputValue)
}