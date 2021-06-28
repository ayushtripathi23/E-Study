const jqueryData = {
    language: 'JQUERY QUIZ',
    body: [
        {
            questionText: "Who developed jQuery, and in which year it was first released?",
            answerOptions: [
                { answerText: "John Richard in 2001", isCorrect: false },
                { answerText: "Mark Bensman in 2004", isCorrect: false },
                { answerText: "John Resig in 2006", isCorrect: true },
                { answerText: "None of the above.", isCorrect: false },
            ],
        },
        {
            questionText: "jQuery is a -",
            answerOptions: [
                { answerText: "JavaScript method", isCorrect: false },
                { answerText: "JavaScript library", isCorrect: true },
                {
                    answerText: "JSON library", isCorrect: false
                },
                {
                    answerText: "PHP method", isCorrect: false
                },
            ],
        },
        {
            questionText: "Which of the following sign is used as a shortcut for jQuery?",
            answerOptions: [
                { answerText: "the % sign", isCorrect: false },
                { answerText: "the & sign", isCorrect: false },
                { answerText: "the $ sign", isCorrect: true },
                { answerText: "the @ sign", isCorrect: false },
            ],
        },
        {
            questionText: " $(this) in jQuery is used when -",
            answerOptions: [
                {
                    answerText: "an HTML element references the entire document", isCorrect: false
                },
                { answerText: "an HTML element references its own action", isCorrect: true },
                {
                    answerText: "an HTML element references the action of its parent element", isCorrect: false
                },
                { answerText: "All of the above", isCorrect: false },
            ],
        },
        {
            questionText: "Which of the following jQuery method is used to hide the selected elements?",
            answerOptions: [
                { answerText: "The hidden() method", isCorrect: false },
                { answerText: " The hide() method", isCorrect: true },
                { answerText: "The visible(false) method", isCorrect: false },
                {
                    answerText: "The display(none) method", isCorrect: false
                },
            ],
        },
        {
            questionText:
                "Which jQuery method is used to set one or more style properties to the selected element?",
            answerOptions: [
                { answerText: " The html() method", isCorrect: false },
                { answerText: "The style() method", isCorrect: false },
                { answerText: "The css() method", isCorrect: true },
                { answerText: "ALL of the above", isCorrect: false },
            ],
        },
        {
            questionText: "Which of the following jQuery method can be used to deal with the name conflicts?",
            answerOptions: [
                { answerText: "The conflict() method", isCorrect: false },
                { answerText: "The nameConflict() method", isCorrect: false },
                { answerText: "The noConflict() method", isCorrect: true },
                { answerText: "All of the above", isCorrect: false },
            ],
        },
    ],
}

export default jqueryData;