const phpData = {
    language: 'PHP QUIZ',
    body: [
        {
            questionText: "Which of the following magic constant of PHP returns full path and filename of the file?",
            answerOptions: [
                { answerText: "_LINE_", isCorrect: false },
                { answerText: " _FILE_", isCorrect: true },
                { answerText: "_FUNCTION_", isCorrect: false },
                { answerText: " _CLASS_", isCorrect: false },
            ],
        },
        {
            questionText: "Which of the following function is used to locate a string within a string?",
            answerOptions: [
                { answerText: " search()", isCorrect: false },
                { answerText: "locate()", isCorrect: false },
                {
                    answerText: "strpos()", isCorrect: true
                },
                {
                    answerText: " None of the above.", isCorrect: false
                },
            ],
        },
        {
            questionText: "Which of the following variable is used to get user's browser and operating system details in PHP?",
            answerOptions: [
                { answerText: "HTTP_USER_AGENT", isCorrect: true },
                { answerText: "USER", isCorrect: false },
                { answerText: "AGENT", isCorrect: false },
                { answerText: " None of the above.", isCorrect: false },
            ],
        },
        {
            questionText: "Which of the following function returns the sum of the values in an array?",
            answerOptions: [
                {
                    answerText: "array_sum()", isCorrect: true
                },
                { answerText: "array_splice()", isCorrect: false },
                {
                    answerText: "array_udiff()", isCorrect: false
                },
                { answerText: " array_udiff_assoc()", isCorrect: false },
            ],
        },
        {
            questionText: "Which of the following is used to check that a cookie is set or not?",
            answerOptions: [
                { answerText: "$GLOBALS", isCorrect: false },
                { answerText: " $_SERVER", isCorrect: true },
                { answerText: "$_COOKIE", isCorrect: false },
                { answerText: "$_SESSION.", isCorrect: false },
            ],
        },
        {
            questionText:
                "Which of the following method returns a formatted string representing a date?",
            answerOptions: [
                { answerText: "time()", isCorrect: false },
                { answerText: "getdate()", isCorrect: true },
                { answerText: "date()", isCorrect: false },
                { answerText: "None of the above.", isCorrect: false },
            ],
        },
        {
            questionText: "Which of the following is also called an INNER JOIN?",
            answerOptions: [
                { answerText: "SELF JOIN", isCorrect: false },
                { answerText: "EQUI JOIN", isCorrect: false },
                { answerText: "NON-EQUI JOIN", isCorrect: false },
                { answerText: "None of the above", isCorrect: true },
            ],
        },
    ],
}

export default phpData;