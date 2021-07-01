<template>
  <div>
    <!-- Student Profile -->
    <div class="student-profile py-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="card shadow-sm">
              <div class="card-header bg-transparent border-0">
                <h3 class="mb-0"><i class="far fa-clone pr-1"></i>Activity</h3>
              </div>
              <div class="card-body pt-0">
                <table class="table table-bordered">
                  <tr>
                    <th width="30%">Tutorials</th>
                    <td width="2%">:</td>
                    <td>0 points</td>
                  </tr>
                  <tr>
                    <th width="30%">Quizzes</th>
                    <td width="2%">:</td>
                    <td>{{ quizActivity }} points</td>
                  </tr>
                  <tr>
                    <th width="30%">Exercise</th>
                    <td width="2%">:</td>
                    <td>0 points</td>
                  </tr>
                  <tr>
                    <th width="30%">Total</th>
                    <td width="2%">:</td>
                    <td>{{ quizActivity }} points</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quizActivity: 0,
    };
  },
  created() {
    this.quizActivity = localStorage.getItem("score") * 5;
  },
};
</script>

<style scoped>
.student-profile .card {
  border-radius: 10px;
}

.student-profile .card .card-header .profile_img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin: 10px auto;
  border: 10px solid #ccc;
  border-radius: 50%;
}

.student-profile .card h3 {
  font-size: 20px;
  font-weight: 700;
}

.student-profile .card p {
  font-size: 16px;
  color: #000;
}

.student-profile .table th,
.student-profile .table td {
  font-size: 14px;
  padding: 5px 10px;
  color: #000;
}
</style>