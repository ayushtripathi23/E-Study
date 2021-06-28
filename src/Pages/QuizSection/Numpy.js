const numpyData = {
    language: 'NUMPY QUIZ',
    body: [
        {
            questionText: "NumPY stands for?",
            answerOptions: [
                { answerText: " Numbering Python", isCorrect: false },
                { answerText: " Number In Python", isCorrect: false },
                { answerText: "Numerical Python", isCorrect: true },
                { answerText: " None of the above.", isCorrect: false },
            ],
        },
        {
            questionText: "NumPy is often used along with packages like?",
            answerOptions: [
                { answerText: "Node.js", isCorrect: false },
                { answerText: " Matplotlib", isCorrect: false },
                {
                    answerText: "SciPy", isCorrect: false
                },
                {
                    answerText: "Both B and C", isCorrect: true
                },
            ],
        },
        {
            questionText: " The most important object defined in NumPy is an N-dimensional array type called?",
            answerOptions: [
                { answerText: "ndarray", isCorrect: true },
                { answerText: "narray", isCorrect: false },
                { answerText: "nd_array", isCorrect: false },
                { answerText: "darray", isCorrect: false },
            ],
        },
        {
            questionText: "Which of the following statement is false?",
            answerOptions: [
                {
                    answerText: " ndarray is also known as the axis array.", isCorrect: true
                },
                { answerText: "ndarray.dataitemSize is the buffer containing the actual elements of the array.", isCorrect: false },
                {
                    answerText: "NumPy main object is the homogeneous multidimensional array", isCorrect: false
                },
                { answerText: " In Numpy, dimensions are called axes", isCorrect: false },
            ],
        },
        {
            questionText: " If a dimension is given as ____ in a reshaping operation, the other dimensions are automatically calculated.",
            answerOptions: [
                { answerText: "Zero", isCorrect: false },
                { answerText: " One", isCorrect: false },
                { answerText: "Negative one", isCorrect: true },
                {
                    answerText: "Infinite", isCorrect: false
                },
            ],
        },
        {
            questionText:
                "Which of the following sets the size of the buffer used in ufuncs?",
            answerOptions: [
                { answerText: "bufsize(size)", isCorrect: false },
                { answerText: "setsize(size)", isCorrect: false },
                { answerText: "setbufsize(size)", isCorrect: true },
                { answerText: "size(size)", isCorrect: false },
            ],
        },
        {
            questionText: " Each built-in data type has a character code that uniquely identifies it.What is meaning of code 'M'?",
            answerOptions: [
                { answerText: "timedelta", isCorrect: false },
                { answerText: "datetime", isCorrect: true },
                { answerText: "objects", isCorrect: false },
                { answerText: "Unicode", isCorrect: false },
            ],
        },
    ],
}

export default numpyData;