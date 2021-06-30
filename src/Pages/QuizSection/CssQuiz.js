const cssData = {
    language: 'CSS QUIZ',
    body: [
        {
            questionText: "Which of the following is the correct syntax for referring the external style sheet?",
            answerOptions: [
                { answerText: "<style src = example.css>", isCorrect: false },
                { answerText: "<style src = 'example.css' >", isCorrect: false },
                { answerText: "<stylesheet> example.css </stylesheet>", isCorrect: false },
                { answerText: "<link rel='stylesheet' type='text / css' href='example.css'>", isCorrect: true },
            ],
        },
        {
            questionText: " The property in CSS used to change the background color of an element is -",
            answerOptions: [
                { answerText: "bgcolor", isCorrect: false },
                { answerText: "color", isCorrect: false },
                {
                    answerText: "background-color", isCorrect: true
                },
                {
                    answerText: "All of the above", isCorrect: false
                },
            ],
        },
        {
            questionText: " The property in CSS used to change the text color of an element is -",
            answerOptions: [
                { answerText: "bgcolor", isCorrect: false },
                { answerText: "color", isCorrect: true },
                {
                    answerText: "background-color", isCorrect: false
                },
                {
                    answerText: "All of the above", isCorrect: false
                },
            ],
        },
        {
            questionText: "The HTML attribute used to define the internal stylesheet is -",
            answerOptions: [
                { answerText: "<style>", isCorrect: true },
                { answerText: "style", isCorrect: false },
                { answerText: "<link>", isCorrect: false },
                { answerText: "<script>", isCorrect: false },
            ],
        },
        {
            questionText: "Which of the following CSS property is used to set the background image of an element?",
            answerOptions: [
                { answerText: "background-attachment", isCorrect: false },
                { answerText: "background-image", isCorrect: true },
                { answerText: "background-color", isCorrect: false },
                { answerText: "None of the above", isCorrect: false },
            ],
        },
        {
            questionText:
                "Which of the following is the correct syntax to display the hyperlinks without any underline?",
            answerOptions: [
                { answerText: "a {text-decoration : underline;}", isCorrect: false },
                { answerText: "a {decoration : no-underline;}", isCorrect: false },
                { answerText: "a {text-decoration : none;}", isCorrect: true },
                { answerText: "None of the above", isCorrect: false },
            ],
        },
        {
            questionText: " Are the negative values allowed in padding property?",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: false },
                { answerText: "Can't say", isCorrect: false },
                { answerText: "May be", isCorrect: false },
            ],
        },
    ],
}

export default cssData;