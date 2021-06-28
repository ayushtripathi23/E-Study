const pandaData = {
    language: 'PANDAS QUIZ',
    body: [
        {
            questionText: " Pandas is an open-source _______ Library?",
            answerOptions: [
                { answerText: "Ruby", isCorrect: false },
                { answerText: "Javascript", isCorrect: false },
                { answerText: "Python", isCorrect: true },
                { answerText: "Java.", isCorrect: false },
            ],
        },
        {
            questionText: "Pandas key data structure is called?",
            answerOptions: [
                { answerText: "Keyframe", isCorrect: false },
                { answerText: "DataFrame", isCorrect: true },
                {
                    answerText: "Statistics", isCorrect: false
                },
                {
                    answerText: "Econometrics", isCorrect: false
                },
            ],
        },
        {
            questionText: "In pandas, Index values must be?",
            answerOptions: [
                { answerText: "unique", isCorrect: false },
                { answerText: "hashable", isCorrect: false },
                { answerText: "Both A and B", isCorrect: true },
                { answerText: "None of the above", isCorrect: false },
            ],
        },
        {
            questionText: "Which of the following is correct Features of DataFrame?",
            answerOptions: [
                {
                    answerText: "Potentially columns are of different types", isCorrect: false
                },
                { answerText: "Can Perform Arithmetic operations on rows and columns", isCorrect: false },
                {
                    answerText: "Labeled axes (rows and columns)", isCorrect: false
                },
                { answerText: "All of the above", isCorrect: true },
            ],
        },
        {
            questionText: "A panel is a ___ container of data",
            answerOptions: [
                { answerText: "1D", isCorrect: false },
                { answerText: " 2D", isCorrect: false },
                { answerText: "3D", isCorrect: true },
                {
                    answerText: "Infinite", isCorrect: false
                },
            ],
        },
        {
            questionText:
                "Which of the following is true?",
            answerOptions: [
                { answerText: " If data is an ndarray, index must be the same length as data.", isCorrect: false },
                { answerText: "Series is a one-dimensional labeled array capable of holding any data type.", isCorrect: false },
                { answerText: "Both A and B", isCorrect: true },
                { answerText: "None of the above", isCorrect: false },
            ],
        },
        {
            questionText: "Which of the following takes a dict of dicts or a dict of array-like sequences and returns a DataFrame?",
            answerOptions: [
                { answerText: "DataFrame.from_items", isCorrect: true },
                { answerText: "DataFrame.from_records", isCorrect: false },
                { answerText: "DataFrame.from_dict", isCorrect: false },
                { answerText: "All of the above", isCorrect: false },
            ],
        },
    ],
}

export default pandaData;