const home = {
  state: {
    affairs: [
      {
        id: "1",
        Title: "我校获批2019年教育部工程研究中心建设项目"
      },
      {
        id: "2",
        Title: "我校举办“双一流”建设与改革创新暑期高级研修班"
      },
      {
        id: "3",
        Title: "澳大利亚西澳大学客人来访我校"
      },
      {
        id: "4",
        Title: "我校举办“双一流”建设与改革创新暑期高级研修班"
      },
      {
        id: "5",
        Title: "澳大利亚西澳大学客人来访我校"
      },
      {
        id: "6",
        Title: "澳大利亚西澳大学客人来访我校"
      }
    ],
    learnResource: [
      {
        id: "1",
        Title: "我校获批2019年教育部工程研究中心建设项目"
      },
      {
        id: "2",
        Title: "我校举办“双一流”建设与改革创新暑期高级研修班"
      },
      {
        id: "3",
        Title: "澳大利亚西澳大学客人来访我校"
      }
    ],
    downloadFiles: [
      {
        id: "1",
        Title: "环境管理体系（ISO14001） 环境管理体系（ISO14001） "
      },
      {
        id: "2",
        Title: "环境管理体系（ISO14001） 环境管理体系（ISO14001） "
      },
      {
        id: "3",
        Title: "环境管理体系（ISO14001） 环境管理体系（ISO14001） "
      }
    ],
    projects: [
      {
        id: "1",
        Title: "煤基甲醇制芳烃（MTA ）"
      },
      {
        id: "2",
        Title: "煤基甲醇制芳烃（MTA ）"
      },
      {
        id: "3",
        Title: "煤基甲醇制芳烃（MTA ）"
      }
    ]
  },
  getters: {
    affairsL(state) {
      return state.affairs.filter((item, ind) => ind < 3);
    },
    affairsR(state) {
      return state.affairs.filter((item, ind) => ind < 6 && ind >= 3);
    }
  }
};
export default home;
