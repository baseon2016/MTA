const engineer = {
  state: {
    tabs: [
      {
        id: "1",
        txt: "智能化工"
      }
    ],
    articles: [
      {
        title: "智能化工",
        paragraph:
          "      太原理工大学是国家“双一流”重点建设高校，由原太原工业大学和原山西矿业学院合并组建而成。历经117年传承发展，学校业已建设成为以工为主、理工结合、多学科协调发展的高等学府，是国家“211工程”重点建设大学、教育部首批“卓越工程师教育培养计划”试点高校和国家“大学生创新创业训练计划”实施学校；先后被评为“普通高等学校本科教学工作优秀单位”“全国文明单位”“全国文明校园”，入选“全国首批深化创新创业教育改革示范高校”“国家创新人才培养示范基地”“全国高校实践育人创新创业基地”“教育部‘三全育人’综合改革试点高校”，荣膺“全国五一劳动奖状”“全国先进基层党组织”。"
      }
    ]
  },
  getters: {
    currentEngineer(state, getters) {
      const result = state.articles.find(item => item.title === getters.currentTxt);
      return result;
    }
  }
};
export default engineer;
