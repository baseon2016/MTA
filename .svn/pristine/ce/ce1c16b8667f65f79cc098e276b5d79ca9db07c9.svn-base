<template>
  <div class="self-learn">
    <h4 class="self-title">自主学习</h4>
    <div class="self-wrap">
      <div class="exam-radio">
        <h5>(一)、单选题</h5>
        <div
          v-for="(item, index) in examList.learnType1"
          :key="item.Subjects.SubjectId"
          class="exam-item"
        >
          <div>
            <span>{{ index + 1 }}、</span><span>{{ item.Subjects.Title }}</span
            ><span>( {{ item.userAnswer }} )</span>
          </div>
          <div>
            <el-radio-group size="medium" v-model="item.userAnswer">
              <el-radio
                v-for="ele in item.SubjectOptions"
                :key="ele.Id"
                :label="ele.itemKey"
                class="exam-item-option"
                >{{ ele.itemKey + "." + ele.itemValue }}</el-radio
              >
            </el-radio-group>
          </div>
        </div>
      </div>
      <div class="exam-checkbox">
        <h5>(二)、多选题</h5>
        <div
          v-for="(item, index) in examList.learnType2"
          :key="item.Subjects.SubjectId"
          class="exam-item"
        >
          <div>
            <span>{{ index + 1 }}、</span><span>{{ item.Subjects.Title }}</span
            ><span>( {{ [...item.userAnswer].sort().join() }} )</span>
          </div>
          <div>
            <el-checkbox-group size="medium" v-model="item.userAnswer">
              <el-checkbox
                v-for="ele in item.SubjectOptions"
                :key="ele.Id"
                :label="ele.itemKey"
                :name="ele.SubjectId"
                class="exam-item-option"
                >{{ ele.itemKey + "." + ele.itemValue }}</el-checkbox
              >
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <div class="exam-true-false">
        <h5>(三)、判断题</h5>
        <div
          v-for="(item, index) in examList.learnType3"
          :key="item.Subjects.SubjectId"
          class="exam-item"
        >
          <div>
            <span>{{ index + 1 }}、</span><span>{{ item.Subjects.Title }}</span
            ><span>( {{ item.userAnswer }} )</span>
          </div>
          <div>
            <el-radio-group size="medium" v-model="item.userAnswer">
              <el-radio
                v-for="ele in item.SubjectOptions"
                :key="ele.Id"
                :label="ele.itemKey"
                class="exam-item-option"
                >{{ ele.itemKey + "." + ele.itemValue }}</el-radio
              >
            </el-radio-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "self-learn",
  data() {
    return {
      examList: {
        learnType1: [],
        learnType2: [],
        learnType3: []
      }
    };
  },
  computed: {
    ...mapGetters(["learnType1"])
  },
  methods: {
    ...mapActions(["getSelfLearn"]),
    userChoosing(e) {
      console.log(e);
    }
  },
  created() {
    this.getSelfLearn().then(res => {
      console.log(res);

      const chooseType1 = res.data.Data.filter(
        item => item.Subjects.SubType === "1"
      );
      const learnType1 = chooseType1.map(item => {
        const answer = { ...item, userAnswer: "" };
        return answer;
      });
      const chooseType2 = res.data.Data.filter(
        item => item.Subjects.SubType === "2"
      );
      const learnType2 = chooseType2.map(item => {
        const answer = { ...item, userAnswer: [] };
        return answer;
      });
      const chooseType3 = res.data.Data.filter(
        item => item.Subjects.SubType === "3"
      );
      const learnType3 = chooseType3.map(item => {
        const answer = { ...item, userAnswer: "" };
        return answer;
      });
      this.examList.learnType1 = learnType1;
      this.examList.learnType2 = learnType2;
      this.examList.learnType3 = learnType3;
    });
  }
};
</script>

<style>
.self-learn {
  padding: 0 20px;
}
.self-learn label {
  display: block;
}
.self-learn h4 {
  font-size: 24px;
  font-weight: normal;
  color: #333;
}
.self-learn h5 {
  font-size: 20px;
  margin: 10px 0;
}
.self-learn {
  font-size: 16px;
  color: #333;
}
.exam-item {
  padding: 20px 0;
  border-bottom: 1px solid #ededed;
}
.exam-item-option {
  margin-top: 13px;
}
.self-learn .el-radio__input.is-checked .el-radio__inner {
  border-color: #002856;
  background: #002856;
}
.self-learn .el-radio__input.is-checked + .el-radio__label {
  color: #002856;
}
.self-learn .el-checkbox__input.is-checked .el-checkbox__inner,
.self-learn .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  border-color: #002856;
  background: #002856;
}
.self-learn .el-checkbox__input.is-focus .el-checkbox__inner {
  border-color: #002856;
}
.self-learn .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #002856;
}
</style>
