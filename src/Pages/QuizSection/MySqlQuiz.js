const mysqlData = {
    language: 'MYSQL QUIZ',
    body: [
        {
            questionText: "What operator tests column for absence of data",
            answerOptions: [
                { answerText: "NOT Operator", isCorrect: false },
                { answerText: "Exists Operator", isCorrect: false },
                { answerText: "IS NULL Operator", isCorrect: true },
                { answerText: "None of the above", isCorrect: false },
            ],
        },
        {
            questionText: " In which of the following cases a DML statement is not executed?",
            answerOptions: [
                { answerText: "When existing rows are modified.", isCorrect: false },
                { answerText: "When a table is deleted.", isCorrect: true },
                {
                    answerText: "When some rows are deleted.", isCorrect: false
                },
                {
                    answerText: "All of the above", isCorrect: false
                },
            ],
        },
        {
            questionText: " If we have not specified ASC or DESC after a SQL ORDER BY clause, the following is used by default",
            answerOptions: [
                { answerText: "DESC", isCorrect: false },
                { answerText: "ASC", isCorrect: true },
                { answerText: "There is no default value", isCorrect: false },
                { answerText: "None of the mentioned", isCorrect: false },
            ],
        },
        {
            questionText: " Which of the following statement is true?",
            answerOptions: [
                { answerText: "TRUNCATE free the table space while DELETE does not.", isCorrect: true },
                { answerText: "Both TRUNCATE and DELETE statements free the table's space.", isCorrect: false },
                {
                    answerText: "Both TRUNCATE and DELETE statement does not free the table's space.", isCorrect: false
                },
                { answerText: "DELETE free the table space while TRUNCATE does not.", isCorrect: false },
            ],
        },
        {
            questionText: "What is returned by INSTR ('JAVAT POINT', 'P')?",
            answerOptions: [
                { answerText: "6", isCorrect: false },
                { answerText: "7", isCorrect: true },
                { answerText: "POINT", isCorrect: false },
                { answerText: "JAVAT", isCorrect: false },
            ],
        },
        {
            questionText:
                " A command that lets you change one or more field in a table is:",
            answerOptions: [
                { answerText: "INSERT", isCorrect: false },
                { answerText: "MODIFY", isCorrect: true },
                { answerText: "LOOK-UP", isCorrect: false },
                { answerText: "All of the above", isCorrect: false },
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

export default mysqlData;