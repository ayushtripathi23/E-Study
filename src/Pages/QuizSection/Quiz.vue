<template>
  <div class="d-flex justify-content-center">
    <div v-if="showScore">
      <!-- <b-card title="Results" style="max-width: 30rem; margin-top: 30px">
        You Scored {{ score }} out of {{ quizCategory.body.length }}
      </b-card> -->
      <b-card
        v-if="score < 3"
        title="Results"
        style="max-width: 30rem; margin-top: 30px"
      >
        You Scored {{ score }} out of {{ quizCategory.body.length }}
        <h2>Focus on Study</h2>
      </b-card>
      <b-card
        v-if="score > 3 && score < 5"
        title="Results"
        style="max-width: 30rem; margin-top: 30px"
      >
        You Scored {{ score }} out of {{ quizCategory.body.length }}
        <h2>You can do better</h2>
      </b-card>
      <b-card
        v-if="score >= 6"
        title="Results"
        style="max-width: 30rem; margin-top: 30px"
      >
        You Scored {{ score }} out of {{ quizCategory.body.length }}
        <h2>brilliant</h2>
      </b-card>
    </div>

    <div class="card-q" v-else>
      <span v-if="!startQuiz">
        <b-card
          img-src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          img-alt="Image"
          img-top
          style="max-width: 20rem; margin-top: 30px"
          class="mb-2"
        >
          {{ quizName }}
          <b-card-text>Every Question have 30 Second to complete </b-card-text>
          <b-button @click="startQuizFunc()">Start Quiz</b-button>
        </b-card>
      </span>
      <span v-else>
        <b-card
          title="Simple Quiz Application"
          style="max-width: 20rem"
          class="mb-2"
          v-if="quizName === finalQuizCategory"
        >
          <b-card-text>
            Question No.{{ currentQuestion + 1 }} of
            {{ quizCategory.body.length }}
          </b-card-text>
          <br />
          <b-progress
            variant="warning"
            :max="30"
            :value="countDown"
            height="4px"
          ></b-progress>

          <b-card-text>
            <span style="font-size: 40px"
              ><strong>{{ countDown }} </strong></span
            >
          </b-card-text>
          <b-card-text>
            {{ quizCategory.body[currentQuestion].questionText }}
          </b-card-text>
          <div class="answer-section">
            <b-button
              :key="index"
              v-for="(option, index) in quizCategory.body[currentQuestion]
                .answerOptions"
              @click="handleAnswerClick(option.isCorrect)"
              class="ans-option-btn"
              variant="primary"
              >{{ option.answerText }}</b-button
            >
          </div>
        </b-card>
      </span>
    </div>
  </div>
</template>

<script>
import quizData from "./QuizData";
import javaQuiz from "./JavaScriptQuiz";
import cssData from "./CssQuiz";
import sqlData from "./SqlQuiz";
import mysqldata from "./MySqlQuiz";
import phpdata from "./PhpQuiz";
import pythondata from "./PythonQuiz";
import numpydata from "./Numpy";
import scipydata from "./SciPyQuiz";
import jquerydata from "./Jquery";
export default {
  data() {
    return {
      currentQuestion: 0,
      showScore: false,
      score: 0,
      countDown: 30,
      timer: null,
      startQuiz: false,
      quizName: "",
      quizCategory: "",
      questions: [],
    };
  },

  methods: {
    startQuizFunc() {
      this.startQuiz = true;
      this.countDownTimer();
    },
    handleAnswerClick(isCorrect) {
      clearTimeout(this.timer);
      let nextQuestion = this.currentQuestion + 1;
      if (isCorrect) {
        this.score = this.score + 1;
      }
      if (nextQuestion < this.quizCategory.body.length) {
        this.currentQuestion = nextQuestion;
        // this.$store.state.questionAttended = this.currentQuestion;
        // localStorage.setItem('qattended', this.currentQuestion)

        this.countDown = 30;
        this.countDownTimer();
      } else {
        // localStorage.removeItem('qattended')
        this.showScore = true;
        // localStorage.setItem('testComplete',this.showScore)
      }
    },
    countDownTimer() {
      if (this.countDown > 0) {
        this.timer = setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.handleAnswerClick(false);
      }
    },
  },
  created() {
    console.log(this.$route.params.qid);
    // console.log(cssData.language,quizData.language)
    this.quizName = this.$route.params.qid;
    console.log(this.quizName);
    this.questions.push(
      quizData,
      javaQuiz,
      cssData,
      sqlData,
      mysqldata,
      phpdata,
      pythondata,
      numpydata,
      scipydata,
      jquerydata
    );
    console.log(this.questions);
    this.quizCategory = this.questions.find((lang) => {
      return lang.language === this.quizName;
    });
    this.finalQuizCategory = this.quizCategory.language;
    console.log(this.finalQuizCategory);
    //  alert(this.$store.state.questionAttended)
    //    this.showScore = localStorage.getItem('testComplete') || false
    //    this.currentQuestion = localStorage.getItem('qattended') || 0
    //    this.countDownTimer()
    //    this.fetchQuiz()
  },
};
</script>

<style scoped>
.card {
  min-width: 100%;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
}
.card-q {
  min-width: 60%;
}
.ans-option-btn {
  min-width: 50%;
  font-size: 16px;
  color: #ffffff;
  align-items: center;
  cursor: pointer;
  margin-bottom: 5px;
}
.answer-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.timer-text {
  background: rgb(230, 153, 12);
  padding: 15px;
  margin-top: 20px;
  margin-right: 20px;
  border: 5px solid rgb(255, 189, 67);
  border-radius: 15px;
  text-align: center;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  height: 350px;
}
/* .ans-option-btn {
  width: 100%;
  font-size: 16px;
  color: #ffffff;
  background-color: #252d4a;
  border-radius: 15px;
  display: flex;
  padding: 5px;
  justify-content: flex-start;
  align-items: center;
  border: 5px solid #234668;
  cursor: pointer;
} */
</style>
