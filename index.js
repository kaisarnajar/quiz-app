const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'HTML stands for -',
    answers: [
      { text: 'HighText Machine Language', correct: false },
      { text: 'HyperText and links Markup Language', correct: false },
      { text: 'HyperText Markup Language', correct: true },
      { text: 'None of these', correct: false }
    ]
  },
  {
    question: 'The correct sequence of HTML tags for starting a webpage is -',
    answers: [
      { text: 'Head, Title, HTML, body', correct: false },
      { text: 'HTML, Body, Title, Head', correct: false },
      { text: 'HTML, Head, Body, Title', correct: false },
      { text: 'HTML, Head, Title, Body', correct: true }
    ]
  },
  {
    question: 'Which of the following element is responsible for making the text bold in HTML?',
    answers: [
      { text: '<pre>', correct: false },
      { text: '<a>', correct: false },
      { text: '<b>', correct: true },
      { text: '<br>', correct: false }
    ]
  },
  {
    question: 'Which of the following tag is used for inserting the largest heading in HTML?',
    answers: [
      { text: '<h3>', correct: false },
      { text: '<h5>', correct: false },
      { text: '<h1>', correct: true },
      { text: '<h6>', correct: false }
    ]
  },
  {
    question: 'Which of the following tag is used to insert a line-break in HTML?',
    answers: [
      { text: '<pre>', correct: false },
      { text: '<a>', correct: false },
      { text: '<b>', correct: false },
      { text: '<br>', correct: true }
    ]
  },
  {
    question: 'How to create an unordered list (a list with the list items in bullets) in HTML?',
    answers: [
      { text: '<ul>', correct: true },
      { text: '<ol>', correct: false },
      { text: '<li>', correct: false },
      { text: '<i>', correct: false }
    ]
  },
  {
    question: 'Which character is used to represent the closing of a tag in HTML?',
    answers: [
      { text: '/', correct: true },
      { text: '?', correct : false},
      { text: '!', correct: false },
      { text: '.', correct: false }
    ]
  },
  {
    question: 'How to create a hyperlink in HTML?',
    answers: [
      { text: '<a href = "www.abc.com"> abc.com </a>', correct: true },
      { text: '<a url = "www.abc.com" abc.com /a>', correct: false },
      { text: '<a link = "www.abc.com"> abc.com </a>', correct: false },
      { text: '<a> www.abc.com <abc.com /a>', correct: false }
    ]
  },
  {
    question: 'How to create an ordered list (a list with the list items in numbers) in HTML?',
    answers: [
      { text: '<ul>', correct: false },
      { text: '<ol>', correct: true },
      { text: '<li>', correct: false },
      { text: '<i>', correct: false }
    ]
  },
  {
    question: 'Which of the following element is responsible for making the text italic in HTML?',
    answers: [
      { text: '<i>', correct: true },
      { text: '<italic>', correct: false },
      { text: '<it>', correct: false },
      { text: '<pre>', correct: false }
    ]
  }
]