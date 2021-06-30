const quizData = {
  language: 'HTML QUIZ',
  body: [
    {
      questionText: "The correct sequence of HTML tags for starting a webpage is -",
      answerOptions: [
        { answerText: "Head, Title, HTML, body", isCorrect: false },
        { answerText: "HTML, Body, Title, Head", isCorrect: false },
        { answerText: "HTML, Title, Head, Body", isCorrect: false },
        { answerText: "HTML, Head, Title, Body", isCorrect: true },
      ],
    },
    {
      questionText: "Which of the following element is responsible for making the text bold in HTML?",
      answerOptions: [
        { answerText: "<pre>", isCorrect: false },
        { answerText: "<a>", isCorrect: false },
        { answerText: "<b>", isCorrect: true },
        { answerText: "<br>", isCorrect: false },
      ],
    },
    {
      questionText: "<input> is -?",
      answerOptions: [
        { answerText: "a format tag.", isCorrect: false },
        { answerText: "All of the above.", isCorrect: false },
        { answerText: "None of the above", isCorrect: false },
        { answerText: "an empty tag.", isCorrect: true },
      ],
    },
    {
      questionText: " Which of the following tag is used to define options in a drop-down selection list?",
      answerOptions: [
        { answerText: "<select>", isCorrect: false },
        { answerText: "<list>", isCorrect: false },
        { answerText: "<dropdown>", isCorrect: false },
        { answerText: "<option>", isCorrect: true },
      ],
    },
    {
      questionText: " HTML tags are enclosed in-",
      answerOptions: [
        { answerText: "# and #", isCorrect: false },
        { answerText: "{ and }", isCorrect: false },
        { answerText: "! and ?", isCorrect: false },
        { answerText: "< and >", isCorrect: true },
      ],
    },
    {
      questionText:
        "Which of the following tag is used to add rows in the table?",
      answerOptions: [
        { answerText: "<td> and </td>", isCorrect: false },
        { answerText: "<th> and </th>", isCorrect: false },
        { answerText: "<tr> and </tr>", isCorrect: true },
        { answerText: "None of the above", isCorrect: false },
      ],
    },
    {
      questionText: " The <hr> tag in HTML is used for -",
      answerOptions: [
        { answerText: "new line", isCorrect: false },
        { answerText: "vertical ruler", isCorrect: false },
        { answerText: "new paragraph", isCorrect: false },
        { answerText: "horizontal ruler", isCorrect: true },
      ],
    },
  ],
}

export default quizData;