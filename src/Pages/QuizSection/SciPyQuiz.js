const scipyData = {
    language: 'SCIPY QUIZ',
    body: [
        {
            questionText: "SciPy stands for?",
            answerOptions: [
                { answerText: "science library", isCorrect: false },
                { answerText: " source library", isCorrect: false },
                { answerText: "significant library", isCorrect: false },
                { answerText: "scientific library.", isCorrect: true },
            ],
        },
        {
            questionText: "Which of the following is not correct sub-packages of SciPy?",
            answerOptions: [
                { answerText: "scipy.cluster", isCorrect: false },
                { answerText: "scipy.source", isCorrect: true },
                {
                    answerText: "scipy.interpolate", isCorrect: false
                },
                {
                    answerText: " scipy.signal", isCorrect: false
                },
            ],
        },
        {
            questionText: "How to import Constants Package in SciPy?",
            answerOptions: [
                { answerText: "import scipy.constants", isCorrect: false },
                { answerText: " from scipy.constants", isCorrect: true },
                { answerText: "import scipy.constants.package", isCorrect: false },
                { answerText: "from scipy.constants.package", isCorrect: false },
            ],
        },
        {
            questionText: "what is constant defined for Boltzmann constant in SciPy?",
            answerOptions: [
                {
                    answerText: "G", isCorrect: false
                },
                { answerText: "e", isCorrect: false },
                {
                    answerText: "R", isCorrect: false
                },
                { answerText: "k", isCorrect: true },
            ],
        },
        {
            questionText: "In SciPy, determinant is computed using?",
            answerOptions: [
                { answerText: "determinant()", isCorrect: false },
                { answerText: "SciPy.determinant()", isCorrect: false },
                { answerText: "det()", isCorrect: true },
                {
                    answerText: "SciPy.det()", isCorrect: false
                },
            ],
        },
        {
            questionText:
                "Which of the following is false?",
            answerOptions: [
                { answerText: "scipy.linalg also has some other advanced functions that are not in numpy.linalg", isCorrect: false },

                { answerText: "SciPy version might be faster depending on how NumPy was installed.", isCorrect: false },
                { answerText: "Both A and B", isCorrect: false },
                { answerText: "None of the above", isCorrect: true },
            ],
        },
        {
            questionText: "What relation is consider between Eigen value (lambda), square matrix (A) and Eign vector(v)?",
            answerOptions: [
                { answerText: " Av = lambda*v", isCorrect: true },
                { answerText: "Av =Constant * lambda*v", isCorrect: false },
                { answerText: "Av =10 * lambda*v", isCorrect: false },
                { answerText: "Av != lambda*v", isCorrect: false },
            ],
        },
    ],
}

export default scipyData;