const quizData = {
    language: 'JAVASCRIPT QUIZ',
    body: [
        {
            questionText: "Which type of JavaScript language is ___",
            answerOptions: [
                { answerText: "Object-Oriented", isCorrect: false },
                { answerText: "Object-Based", isCorrect: true },
                { answerText: "Assembly-Language", isCorrect: false },
                { answerText: "High-Level", isCorrect: false },
            ],
        },
        {
            questionText: "Which one of the following also known as Conditional Expression:",
            answerOptions: [
                { answerText: "Alternative to if-else", isCorrect: false },
                { answerText: "Switch statement", isCorrect: false },
                {
                    answerText: "If-then-else statement", isCorrect: false
                },
                {
                    answerText: "immediate if", isCorrect: true
                },
            ],
        },
        {
            questionText: " In JavaScript, what is a block of statement?",
            answerOptions: [
                { answerText: "both conditional block and a single statement", isCorrect: false },
                { answerText: "block that contains a single statement", isCorrect: false },
                { answerText: "Conditional block", isCorrect: false },
                { answerText: "block that combines a number of statements into a single compound statement", isCorrect: true },
            ],
        },
        {
            questionText: "When interpreter encounters an empty statements, what it will do:",
            answerOptions: [
                { answerText: "Shows a warning", isCorrect: false },
                { answerText: "Prompts to complete the statement", isCorrect: false },
                { answerText: "Throws an error", isCorrect: false },
                { answerText: "Ignores the statements", isCorrect: true },
            ],
        },
        {
            questionText: "The 'function' and ' var' are known as:",
            answerOptions: [
                { answerText: "Keywords", isCorrect: false },
                { answerText: "Declaration statements", isCorrect: true },
                { answerText: "Prototypes", isCorrect: false },
                { answerText: "Data types", isCorrect: false },
            ],
        },
        {
            questionText:
                "Which of the following variables takes precedence over the others if the names are the same?",
            answerOptions: [
                { answerText: "Global variable", isCorrect: false },
                { answerText: "The local element", isCorrect: true },
                { answerText: "The two of the above", isCorrect: false },
                { answerText: "None of the above", isCorrect: false },
            ],
        },
        {
            questionText: "Which one of the following is the correct way for calling the JavaScript code?",
            answerOptions: [
                { answerText: "Preprocessor", isCorrect: false },
                { answerText: "Triggering Event", isCorrect: false },
                { answerText: "RMI", isCorrect: false },
                { answerText: "Function/Method", isCorrect: true },
            ],
        },
    ],
}

export default quizData;