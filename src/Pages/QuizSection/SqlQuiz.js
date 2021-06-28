const sqlData = {
    language: 'SQL QUIZ',
    body: [
        {
            questionText: " Which of the following is not a valid SQL type?",
            answerOptions: [
                { answerText: "FLOAT", isCorrect: false },
                { answerText: "NUMERIC", isCorrect: false },
                { answerText: "DECIMAL", isCorrect: true },
                { answerText: "DOUBLE", isCorrect: false },
            ],
        },
        {
            questionText: " Which of the following is not a DDL command?",
            answerOptions: [
                { answerText: "TRUNCATE", isCorrect: false },
                { answerText: "ALTER", isCorrect: false },
                {
                    answerText: "CREATE", isCorrect: false
                },
                {
                    answerText: "UPDATE", isCorrect: true
                },
            ],
        },
        {
            questionText: " Which of the following are TCL commands?",
            answerOptions: [
                { answerText: "COMMIT and ROLLBACK", isCorrect: true },
                { answerText: "UPDATE and TRUNCATE", isCorrect: false },
                { answerText: "SELECT and INSERT", isCorrect: false },
                { answerText: "GRANT and REVOKE", isCorrect: false },
            ],
        },
        {
            questionText: " Which statement is used to delete all rows in a table without having the action logged?",
            answerOptions: [
                { answerText: "DELETE", isCorrect: false },
                { answerText: "REMOVE", isCorrect: false },
                { answerText: "DROP", isCorrect: false },
                { answerText: "TRUNCATE", isCorrect: true },
            ],
        },
        {
            questionText: "SQL Views are also known as",
            answerOptions: [
                { answerText: "Simple tables", isCorrect: false },
                { answerText: "Virtual tables", isCorrect: true },
                { answerText: "Complex tables", isCorrect: false },
                { answerText: "Actual Tables", isCorrect: false },
            ],
        },
        {
            questionText:
                "How many Primary keys can have in a table?",
            answerOptions: [
                { answerText: "Only 1", isCorrect: true },
                { answerText: "Only 2", isCorrect: false },
                { answerText: "Depends on no of Columns", isCorrect: false },
                { answerText: "Depends on DBA", isCorrect: false },
            ],
        },
        {
            questionText: "Which of the following is not Constraint in SQL?",
            answerOptions: [
                { answerText: "Primary Key", isCorrect: false },
                { answerText: "Not Null", isCorrect: false },
                { answerText: "Check", isCorrect: false },
                { answerText: "Union", isCorrect: true },
            ],
        },
    ],
}

export default sqlData;